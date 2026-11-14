import Button from "../components/Button/Button";
import Counter from "../components/Counter/Counter";
import useTheme from "../hooks/useTheme";

const ExamplesPage = () => {
  // L'esempio mostra che anche una pagina può leggere il context senza ricevere props.
  const { theme } = useTheme();

  return (
    <div
      className={`flex w-full flex-col gap-6 rounded-xl p-6 ${
        theme === "dark"
          ? "bg-slate-900 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Contatore */}
      <Counter />

      {/* Le props standard del button permettono di gestire il clic e aggiungere classi. */}
      <Button onClick={() => alert("Cliccato!")}>
        Cliccami
      </Button>
    </div>
  );
};

export default ExamplesPage;
