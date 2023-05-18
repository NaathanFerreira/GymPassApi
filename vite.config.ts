import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environmentMatchGlobs: [
      // para todos os testes dentro de controllers, use o ambiente prisma (arquivo prisma-test-environment)
      ["src/http/controllers/**", "prisma"],
    ],
  },
});
