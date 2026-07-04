import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: "build-tokens",
            async buildStart() {
                const { buildTokens } =
                    await import("./src/scripts/build-tokens");
                buildTokens();
            },
        },
    ],
    build: {
        lib: {
            entry: {
                index: resolve(rootDir, "src/index.ts"),
                components: resolve(rootDir, "src/components/index.ts"),
                "components/button": resolve(
                    rootDir,
                    "src/components/button/index.tsx",
                ),
                "components/icon": resolve(
                    rootDir,
                    "src/components/icon/index.tsx",
                ),
                "components/input": resolve(
                    rootDir,
                    "src/components/input/index.tsx",
                ),
                blocks: resolve(rootDir, "src/blocks/index.ts"),
                "blocks/searchbar": resolve(
                    rootDir,
                    "src/blocks/searchbar/index.tsx",
                ),
                tokens: resolve(rootDir, "src/tokens/index.ts"),
                styles: resolve(rootDir, "src/styles/index.ts"),
            },
            formats: ["es", "cjs"],
            fileName: (format, entryName) =>
                `${entryName}.${format === "es" ? "js" : "cjs"}`,
            cssFileName: "style",
        },
        rollupOptions: {
            external: [
                "@base-ui/react/button",
                "@base-ui/react/input",
                "class-variance-authority",
                "lucide-react",
                "react",
                "react-dom",
                "react/jsx-runtime",
            ],
        },
    },
});
