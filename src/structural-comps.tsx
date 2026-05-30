export function ApplicationHeader() {
  return (
    <header className="bg-orange-200 flex px-[10%] py-2 justify-between text-rose-800">
      <p className="font-serif text-3xl italic font-black">YA Simulations</p>

      <select defaultValue="wave-simulation">
        <option value="wave-simulation">Wellensimulation</option>
      </select>
    </header>
  );
}

export function ApplicationFooter() {
  return (
    <footer className="bg-gray-900 w-full flex text-gray-50">
      <div className="text-6xl font-black p-5 flex-3 h-full flex flex-col justify-center">
        <div>
          <p>Yanni</p>
          <p>Alshoufi</p>
        </div>
      </div>

      <section className="flex-1 p-20 font-serif flex flex-col gap-2">
        <h3 className="underline text-xl font-bold">Impressum/Offenlegung</h3>
        <p>Yane Al Shoufi</p>
        <p>
          Johannesstraße 1/7/40 <br />
          4710 Grieskirchen
        </p>
      </section>
    </footer>
  );
}
