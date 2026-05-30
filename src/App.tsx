import WaveSimulation from "./simulations/WaveSimulation";
import { ApplicationFooter, ApplicationHeader } from "./structural-comps";

export default function App() {
  return (
    <div className="h-dvh flex flex-col bg-gray-900">
      <ApplicationHeader />
      <main className="min-h-50 bg-gray-200 p-20">
        <WaveSimulation />
      </main>
      <ApplicationFooter />
    </div>
  );
}
