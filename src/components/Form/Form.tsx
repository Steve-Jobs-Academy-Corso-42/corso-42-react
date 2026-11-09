// children rende il form riutilizzabile con campi e pulsanti scelti da chi lo usa.
const Form = ({
  children,
  className,
  ...formProps
}: React.FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form
      // Inoltra attributi nativi, ad esempio onSubmit, method e aria-label.
      {...formProps}
      // Le classi del chiamante si aggiungono allo stile base, non vengono sovrascritte.
      className={["flex w-full flex-col gap-4 rounded-lg border p-3", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </form>
  );
};

export default Form;
