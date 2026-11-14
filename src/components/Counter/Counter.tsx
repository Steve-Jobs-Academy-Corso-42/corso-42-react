import { useState } from "react";

const Counter = () => {
  // Stato locale: il contatore è indipendente dagli altri componenti.
  const [count, setCount] = useState(0);

  // La forma funzionale calcola il nuovo valore partendo sempre dallo stato più recente.
  const increment = () => setCount((currentCount) => currentCount + 1);

  return (
    <button
      type="button"
      className="rounded-md border border-brand-600 bg-brand-600 px-4 py-2 font-mono text-white transition-colors hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
      onClick={increment}
    >
      Conteggio: {count}
    </button>
  );
};

export default Counter;
