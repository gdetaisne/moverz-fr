import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  esbuild: {
    // Prevent "React is not defined" when Vitest compiles TSX/JSX.
    // Next.js handles this automatically; Vitest needs an explicit setting.
    jsx: "automatic",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
    },
  },
  test: {
    environment: "node",
    setupFiles: ["./vitest.setup.ts"],
    include: ["tests/**/*.test.ts"],
  },
});


