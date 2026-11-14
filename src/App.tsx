import { BrowserRouter, Link, Route, Routes } from "react-router";
import ProductsPage from "./pages/ProductsPage.tsx";
import FormPage from "./pages/FormPage.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import useTheme from "./hooks/useTheme.ts";
import Button from "./components/Button/Button.tsx";

// App definisce la navigazione e il layout condiviso; le singole schermate vivono in pages/.
function App() {
  // Il custom hook legge il tema globale e fornisce l'azione per cambiarlo.
  const { theme, toggle } = useTheme();

  return (
    // BrowserRouter abilita la navigazione client-side senza ricaricare il documento.
    <BrowserRouter>
      <main
        className={`mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center gap-8 px-4 py-10 font-sans ${
          theme === "dark"
            ? "bg-slate-950 text-white"
            : "bg-white text-slate-900"
        }`}
      >
        {/* Link aggiorna l'URL gestito dal router; Routes mostra la pagina che corrisponde al percorso. */}
        <nav
          className={`flex w-full items-center gap-2 rounded-lg p-3 ${
            theme === "dark"
              ? "bg-slate-900 text-white"
              : "bg-slate-100 text-slate-900"
          }`}
        >
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <Link className="hover:underline" to="/products">
            Products
          </Link>
          <Link className="hover:underline" to="/form">
            Form
          </Link>
          <Link className="hover:underline" to="/examples">
            Examples
          </Link>

          <div className="ml-auto flex items-center gap-2 text-sm">
            <span>
              Tema: <span className="font-medium">{theme}</span>
            </span>
            {/* Il testo alternativo annuncia l'azione; l'icona mostra il tema che si può attivare. */}
            <Button
              aria-label={`Attiva tema ${theme === "light" ? "dark" : "light"}`}
              className="inline-flex items-center justify-center"
              onClick={toggle}
            >
              {theme === "light" ? (
                <svg
                  aria-hidden="true"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z"
                  />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
                  />
                </svg>
              )}
            </Button>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <h1 className="text-2xl font-bold">
                Questa è la Home!
              </h1>
            }
          />
          <Route path="/products" Component={ProductsPage} />
          <Route path="/form" Component={FormPage} />
          <Route path="/examples" Component={ExamplesPage} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
