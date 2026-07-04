import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/reset.css";
import "./styles/tokens.css";
import "./styles/globals.css";

import App from "./App.tsx";
import { ThemeProvider } from "./providers/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
