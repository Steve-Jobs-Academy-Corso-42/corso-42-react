import useTheme from "../../hooks/useTheme";

// Product dichiara in un solo tipo i dati attesi dall'API e necessari per la card.
type ProductProps = {
  product: ProductType;
};

// Forma essenziale di un prodotto: TypeScript controlla l'accesso a queste proprietà.
export type ProductType = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
};

const Product = ({
  product: { image, title, description, price },
}: ProductProps) => {
  // Il componente resta riutilizzabile: riceve i dati con props e legge il tema dal context.
  const { theme } = useTheme();

  return (
    <article
      className={`flex h-full flex-col gap-3 rounded-xl border p-4 shadow-sm transition hover:shadow-md ${
        theme === "dark"
          ? "border-slate-700 bg-slate-800 text-white"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      <img
        src={image}
        alt={title}
        className={`h-48 w-full rounded-lg object-contain p-4 ${
          theme === "dark" ? "bg-slate-700" : "bg-slate-50"
        }`}
      />
      <h2 className="text-lg font-semibold leading-snug">{title}</h2>
      <p
        className={`text-sm leading-relaxed ${
          theme === "dark" ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
      <p className="mt-auto pt-2 text-lg font-bold">
        {price.toFixed(2)}€
      </p>
    </article>
  );
};

export default Product;
