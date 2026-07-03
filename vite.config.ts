import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: "build-tokens",
            buildStart() {
                require("./src/scripts/build-tokens");
            },
        },
    ],
});
