import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  ThemeContext,
  type ResolvedTheme,
  type ThemeMode,
} from "./theme-context";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: ThemeMode;
  storageKey?: string;
};

const defaultStorageKey = "ui-theme";

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme(storageKey: string): ThemeMode | null {
  if (typeof window === "undefined") {
    return null;
  }

  const storedTheme = window.localStorage.getItem(storageKey);

  if (
    storedTheme === "light" ||
    storedTheme === "dark" ||
    storedTheme === "system"
  ) {
    return storedTheme;
  }

  return null;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = defaultStorageKey,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    return getStoredTheme(storageKey) ?? defaultTheme;
  });
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme);

  const resolvedTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function handleChange(event: MediaQueryListEvent) {
      setSystemTheme(event.matches ? "dark" : "light");
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.style.colorScheme = resolvedTheme;
  }, [resolvedTheme]);

  const setTheme = useCallback(
    (nextTheme: ThemeMode) => {
      setThemeState(nextTheme);
      window.localStorage.setItem(storageKey, nextTheme);
    },
    [storageKey],
  );

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme,
    }),
    [theme, resolvedTheme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
