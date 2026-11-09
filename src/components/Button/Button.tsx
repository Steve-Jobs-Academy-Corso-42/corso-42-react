// children è il contenuto tra i tag; le altre props sono gli attributi standard del button.
const Button = ({
  children,
  className,
  ...buttonProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      // Lo spread inoltra, per esempio, onClick, type, disabled e attributi di accessibilità.
      {...buttonProps}
      // Conserva le classi ricevute senza produrre la stringa "undefined" quando mancano.
      className={[className, "stile-bottone"].filter(Boolean).join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
