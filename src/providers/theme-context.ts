import { createContext } from "react";

export type ThemeMode = "light" | "dark" | "system";
export type ResolvedTheme = Exclude<ThemeMode, "system">;

export type ThemeContextValue = {
    theme: ThemeMode;
    resolvedTheme: ResolvedTheme;
    setTheme: (theme: ThemeMode) => void;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);
