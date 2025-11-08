import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Obtener el nombre del repositorio desde la variable de entorno o usar '/' por defecto
  // Si el repo es username.github.io, usar '/'
  // Si el repo es otro nombre, usar '/nombre-repo/'
  const repoName = process.env.VITE_REPO_NAME || '';
  const base = repoName ? `/${repoName}/` : '/';

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
