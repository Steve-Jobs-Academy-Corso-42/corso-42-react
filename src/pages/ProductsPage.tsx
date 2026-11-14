import { useEffect, useState } from "react";
import Product, { type ProductType } from "../components/Product/Product";
import Button from "../components/Button/Button";
import useTheme from "../hooks/useTheme";

const ProductsPage = () => {
  // undefined indica che la richiesta è ancora in corso; [] indica una risposta senza prodotti.
  const [products, setProducts] = useState<ProductType[]>();
  // Errore e dati sono stati distinti per poter mostrare stati diversi della richiesta.
  const [error, setError] = useState(false);

  const { theme } = useTheme();

  // Richiede l'elenco al servizio esterno e salva la risposta nello stato React.
  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      // Converte il corpo HTTP in dati JavaScript prima di aggiornare l'interfaccia.
      .then((res) => res.json())
      .then((data) => setProducts(data))
      // Se la richiesta fallisce, lo stato permette alla pagina di mostrare un errore.
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  // useEffect avvia il caricamento dopo il primo render, non durante la costruzione del JSX.
  useEffect(() => {
    fetchProducts();
  }, []);

  // Seleziona cosa mostrare in base allo stato: errore, caricamento, lista o lista vuota.
  const Products = () => {
    // Controllo l'errore prima di mostrare i prodotti.
    if (error) return "CRETINO HAI SBAGLIATO URL!";

    // Controllo lo stato di loading prima di mostrare i prodotti.
    // Implicitamente, se products è undefined, la fetch non ha finito.
    if (products) {
      return products?.length // Controllo se ci sono prodotti.
        ? // Li mostra.
          products.map((singoloProdottoIterato) => (
            <Product
              // key aiuta React a riconoscere ogni elemento quando la lista cambia.
              key={singoloProdottoIterato.id}
              product={singoloProdottoIterato}
            />
          ))
        : // Mostra un messaggio dedicato.
          "No products";
    }

    // Se non ci sono prodotti, mostra un messaggio di caricamento.
    return "Loading...";
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Prodotti</h2>
        {/* Lo stesso componente mostra prodotti diversi ricevendo valori diversi tramite props. */}
        <Button
          className="text-sm font-medium"
          onClick={() => setProducts((prev) => prev?.slice(1))}
        >
          ELIMINA PRIMO
        </Button>
      </div>

      <p
        className={`mb-4 text-sm ${
          theme === "dark" ? "text-slate-400" : "text-slate-500"
        }`}
      >
        Tema attivo: {theme}
      </p>

      {/* map crea una card per ogni prodotto mantenendo la griglia come contenitore. */}
      <section
        aria-label="Prodotti"
        className={`grid w-full gap-4 sm:grid-cols-2 ${
          theme === "dark" ? "text-slate-200" : "text-slate-700"
        }`}
      >
        {Products()}
      </section>
    </div>
  );
};

export default ProductsPage;
