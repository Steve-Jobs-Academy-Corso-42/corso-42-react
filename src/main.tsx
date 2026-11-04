import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";

// index.html contiene il nodo vuoto in cui React inserisce l'intera interfaccia.
const rootElement = document.getElementById("root");

// Fallire subito con un messaggio chiaro è più sicuro che usare un valore nullo.
if (!rootElement) {
  throw new Error(
    'Elemento root non trovato: controlla il div con id="root" in index.html.',
  );
}

createRoot(rootElement).render(<App />);
