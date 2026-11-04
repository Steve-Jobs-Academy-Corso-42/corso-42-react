import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// React gestisce JSX e ricaricamento a caldo; Tailwind genera il CSS dalle classi usate.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
