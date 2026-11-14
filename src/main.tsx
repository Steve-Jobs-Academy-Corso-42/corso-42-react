import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import ThemeProvider from "./providers/ThemeProvider.tsx";

// Punto d'ingresso dell'app: React monta App nel div #root definito in index.html.
const rootElement = document.getElementById("root");

// Il controllo evita di inizializzare React se manca il contenitore richiesto.
if (!rootElement) {
  throw new Error(
    'Elemento root non trovato: controlla il div con id="root" in index.html.',
  );
}

createRoot(rootElement).render(
  // Il provider più esterno rende il tema disponibile a tutte le pagine e componenti.
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
