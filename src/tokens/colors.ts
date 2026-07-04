export const colorPrimitives = {
    white: "#ffffff",
    black: "#020617",

    blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
    },

    green: {
        500: "#22c55e",
        600: "#16a34a",
    },

    amber: {
        500: "#f59e0b",
        600: "#d97706",
    },

    red: {
        500: "#ef4444",
        600: "#dc2626",
    },

    sky: {
        500: "#0ea5e9",
        600: "#0284c7",
    },

    gray: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
        950: "#020617",
    },
} as const;

export const colorThemes = {
    light: {
        primary: colorPrimitives.blue[600],
        primaryHover: colorPrimitives.blue[700],
        primaryForeground: colorPrimitives.white,

        success: colorPrimitives.green[600],
        warning: colorPrimitives.amber[500],
        danger: colorPrimitives.red[500],
        info: colorPrimitives.sky[500],

        background: colorPrimitives.white,
        surface: colorPrimitives.gray[50],
        muted: colorPrimitives.gray[100],

        text: {
            default: colorPrimitives.gray[900],
            muted: colorPrimitives.gray[500],
            inverse: colorPrimitives.white,
        },

        border: colorPrimitives.gray[200],

        gray: colorPrimitives.gray,
    },

    dark: {
        primary: colorPrimitives.blue[500],
        primaryHover: colorPrimitives.blue[400],
        primaryForeground: colorPrimitives.white,

        success: colorPrimitives.green[500],
        warning: colorPrimitives.amber[500],
        danger: colorPrimitives.red[500],
        info: colorPrimitives.sky[500],

        background: colorPrimitives.gray[950],
        surface: colorPrimitives.gray[900],
        muted: colorPrimitives.gray[800],

        text: {
            default: colorPrimitives.gray[50],
            muted: colorPrimitives.gray[400],
            inverse: colorPrimitives.gray[950],
        },

        border: colorPrimitives.gray[700],

        gray: colorPrimitives.gray,
    },
} as const;

export const colors = colorThemes.light;

export type ColorThemeName = keyof typeof colorThemes;
