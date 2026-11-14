import Button from "../Button/Button";
import useTheme from "../../hooks/useTheme";

// children rende il form riutilizzabile con campi scelti dalla pagina chiamante.
const Form = ({
  children,
  className,
  ...formProps
}: React.FormHTMLAttributes<HTMLFormElement>) => {
  // Anche il contenitore e i campi interni cambiano aspetto in base al tema condiviso.
  const { theme } = useTheme();

  return (
    <form
      // Inoltra attributi nativi del form, ad esempio onSubmit, method e aria-label.
      {...formProps}
      // Le classi del chiamante si sommano allo stile base invece di sostituirlo.
      className={[
        "flex w-full flex-col gap-4 rounded-lg border p-4 [&_input]:rounded-md [&_input]:border [&_input]:px-3 [&_input]:py-2 [&_input]:outline-none focus-within:[&_input]:ring-2",
        theme === "dark"
          ? "border-slate-700 bg-slate-800 text-white [&_input]:border-slate-600 [&_input]:bg-slate-900 [&_input]:text-white [&_input]:placeholder:text-slate-400 focus-within:[&_input]:ring-slate-500"
          : "border-slate-200 bg-white text-slate-900 [&_input]:border-slate-300 [&_input]:bg-white [&_input]:text-slate-900 [&_input]:placeholder:text-slate-500 focus-within:[&_input]:ring-slate-300",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Il contenuto del form è fornito dalla pagina; il submit resta condiviso. */}
      {children}

      <Button type="submit">Invia</Button>
    </form>
  );
};

export default Form;
