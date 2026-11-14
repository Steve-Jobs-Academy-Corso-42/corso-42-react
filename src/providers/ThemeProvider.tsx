import { useState } from "react";
import ThemeContext, { type Theme } from "../contexts/ThemeContext";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Lo stato qui, sopra le pagine, fa sì che tutte osservino lo stesso tema.
  const [theme, setTheme] = useState<Theme>("light");

  // L'aggiornamento funzionale usa il valore corrente anche in caso di clic ravvicinati.
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  const value = { theme, toggle };

  // Il value viene trasmesso ai discendenti senza passare props attraverso ogni livello.
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
