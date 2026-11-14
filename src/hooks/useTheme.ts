import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function useTheme() {
  // Incapsula useContext così i componenti usano un'unica interfaccia per il tema.
  const ctx = useContext(ThemeContext);
  // Lanciare un errore esplicito rende subito visibile un uso fuori dal ThemeProvider.
  if (!ctx) throw new Error("useTheme deve essere usato dentro ThemeProvider");
  return ctx;
}

export default useTheme;
