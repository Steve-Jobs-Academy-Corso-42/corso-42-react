import { useState } from "react";
import Form from "../components/Form/Form";
import useTheme from "../hooks/useTheme";

const FormPage = () => {
  // Ogni input è controllato da React: value riflette lo stato e onChange lo aggiorna.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { theme } = useTheme();

  return (
    <div
      className={`w-full rounded-xl p-6 ${
        theme === "dark"
          ? "bg-slate-900 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      <h2 className="mb-4 text-xl font-semibold">Nome in tempo reale: {name}</h2>

      {/* Form riceve i campi come children; il submit è dimostrativo e non chiama un server. */}
      <Form onSubmit={() => alert("Invio form")}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form>
    </div>
  );
};

export default FormPage;
