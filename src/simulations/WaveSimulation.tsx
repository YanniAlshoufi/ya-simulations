import { P5Canvas } from "@p5-wrapper/react";

const SIDE = 300 as const;

export default function WaveSimulation() {
  return (
    <div className="flex justify-center">
      <div className="border-black border">
        <P5Canvas
          sketch={(p) => {
            let t = 0;

            const countSide = 10 as const;
            const countTotal = countSide * countSide;

            // const aetherBinding = (x: number) => x;

            const r = SIDE / countSide / 2;
            let particles: Particle[] = [];

            p.setup = () => {
              p.resizeCanvas(SIDE, SIDE);
              p.frameRate(10);

              particles = new Array(countTotal).fill(0).map((_, idx) => {
                return {
                  x: Math.floor(idx / countSide) * r * 2 + r,
                  y: (idx % countSide) * r * 2 + r,
                  value: 0,

                  kind: "plain",
                };
              });

              particles[13].kind = "wave";
            };

            p.draw = () => {
              t++;

              p.background(255);

              const newParticles = new Array(countTotal).fill(0).map(() => 0);

              for (let row = 0; row < countSide; row++) {
                for (let col = 0; col < countSide; col++) {
                  let aggregate = 0;

                  for (let i = row - 1; i <= row + 1; i++) {
                    for (let j = col - 1; j <= col + 1; j++) {
                      if (
                        i < 0 ||
                        i >= countSide ||
                        j < 0 ||
                        j >= countSide ||
                        (i === row && j === col)
                      ) {
                        continue;
                      }

                      aggregate += particles[i * countSide + j].value;
                    }
                  }

                  newParticles[row * countSide + col] = aggregate;
                }
              }

              for (let i = 0; i < countTotal; i++) {
                particles[i].value = newParticles[i];
              }

              // What needs to be aggregated isn't the value only, but also the tendency of the value
              // (slope). Also, the aggregation functionality should be done in a function for clarity

              for (const particle of particles) {
                p.noStroke();
                p.fill(255 - particle.value);
                p.circle(particle.x, particle.y, r * 2);

                if (particle.kind === "wave") {
                  particle.value = p.floor((1 - p.cos(t)) * (256 / 2));
                }
              }
            };
          }}
        />
      </div>
    </div>
  );
}

type Particle = {
  x: number;
  y: number;
  value: number; // number between 0 and 255
} & (
  | {
      kind: "plain";
    }
  | {
      kind: "wave";
    }
);
