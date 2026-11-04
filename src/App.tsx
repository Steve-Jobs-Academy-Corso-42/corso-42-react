import Counter from "./components/Counter/Counter.tsx";
import Product from "./components/Product/Product.tsx";

// Il componente principale compone l'interfaccia usando componenti più piccoli.
function App() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center gap-8 px-4 py-10 font-sans text-slate-900">
      <Counter />
      {/* Le props permettono di riutilizzare Product cambiando solo i dati. */}
      <section
        aria-label="Prodotti"
        className="grid w-full gap-4 sm:grid-cols-2"
      >
        <Product
          title="Prodotto 1"
          description="Descrizione del prodotto"
          price={100}
        />
        <Product
          title="Prodotto 2"
          description="Un altro esempio con le stesse props"
          price={200}
        />
      </section>
    </main>
  );
}

export default App;
