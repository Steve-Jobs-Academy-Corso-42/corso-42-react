import Button from "./components/Button/Button.tsx";
import Counter from "./components/Counter/Counter.tsx";
import Form from "./components/Form/Form.tsx";
import Product from "./components/Product/Product.tsx";

// App compone componenti più piccoli e passa loro i dati o le funzioni necessarie.
function App() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center gap-8 px-4 py-10 font-sans text-slate-900">
      <Counter />

      {/* Le props standard del button permettono di gestire il clic e aggiungere classi. */}
      <Button className="mt-4" onClick={() => alert("Cliccato!")}>
        Cliccami
      </Button>

      {/* Form accetta contenuto come children; qui il submit non invia ancora dati a un server. */}
      <Form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <Button type="submit">Invia</Button>
      </Form>

      {/* Lo stesso componente mostra prodotti diversi ricevendo valori diversi tramite props. */}
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
