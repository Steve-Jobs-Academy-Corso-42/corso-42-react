import useTheme from "../../hooks/useTheme";

// Wrapper riutilizzabile: accetta tutti gli attributi HTML di un button nativo.
const Button = ({
  children,
  className,
  ...buttonProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  // Lo stile base segue il tema; className permette al chiamante di aggiungere varianti.
  const { theme } = useTheme();

  return (
    <button
      // Le props native (per esempio type, onClick e aria-label) vengono inoltrate al DOM.
      {...buttonProps}
      className={[
        "rounded-md px-4 py-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
        theme === "dark"
          ? "bg-slate-700 text-white hover:bg-slate-600 focus-visible:outline-slate-300"
          : "bg-slate-200 text-slate-900 hover:bg-slate-300 focus-visible:outline-slate-700",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
