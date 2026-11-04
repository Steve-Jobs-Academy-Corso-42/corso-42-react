// Questo tipo descrive i dati richiesti dal componente e viene controllato da TypeScript.
type ProductProps = {
  title: string;
  description: string;
  price: number;
};

// La destrutturazione rende disponibili le singole props senza ripetere "props.".
const Product = ({ title, description, price }: ProductProps) => {
  return (
    <article className="w-full rounded-lg border border-slate-200 p-6 shadow-sm">
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className="text-slate-600">{description}</p>
      <p className="mt-4 font-medium">{price}€</p>
    </article>
  );
};

export default Product;
