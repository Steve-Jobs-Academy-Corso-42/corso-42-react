import { createContext } from "react";

// Il tipo letterale impedisce valori di tema diversi da quelli supportati.
export type Theme = "light" | "dark";

// Forma condivisa dal provider e da tutti i componenti che leggono il tema.
type ThemeCtx = {
  theme: Theme;
  toggle: () => void;
};

// null segnala che un componente sta provando a leggere il tema senza il provider.
const ThemeContext = createContext<ThemeCtx | null>(null);

export default ThemeContext;
