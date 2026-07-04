import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: "build-tokens",
            async buildStart() {
                const { buildTokens } = await import("./src/scripts/build-tokens");
                buildTokens();
            },
        },
    ],
});
