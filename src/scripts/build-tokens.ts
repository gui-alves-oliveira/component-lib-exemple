import { writeFileSync, mkdirSync } from "fs";
import path from "path";
import {
    colorThemes,
    radius,
    shadows,
    spacing,
    typography,
    zIndex,
} from "../tokens";

type TokenValue = string | number;
type TokenTree = {
    [key: string]: TokenValue | TokenTree;
};

const globalTokens = {
    spacing: spacing,
    radius: radius,
    shadow: shadows,
    level: zIndex,
    typography: typography,
};

export function generateCssVariables() {
    const globalCss = formatCssVariables(flattenTokens(globalTokens));
    const lightCss = formatCssVariables(flattenTokens({ color: colorThemes.light }));
    const darkCss = formatCssVariables(flattenTokens({ color: colorThemes.dark }));

    const css = [
        ":root {",
        globalCss,
        lightCss,
        "}",
        "",
        '[data-theme="light"] {',
        lightCss,
        "}",
        "",
        '[data-theme="dark"] {',
        darkCss,
        "}",
    ].join("\n");

    return `${css}\n`;
}

function formatCssVariables(tokens: Record<string, TokenValue>) {
    return Object.entries(tokens)
        .map(([key, value]) => {
            const varName = `--${key}`;
            return `  ${varName}: ${value};`;
        })
        .join("\n");
}

function flattenTokens(
    obj: TokenTree,
    prefix = "",
): Record<string, TokenValue> {
    const result: Record<string, TokenValue> = {};

    for (const key in obj) {
        const value = obj[key];
        const nextKey = prefix ? `${prefix}-${key}` : key;

        if (typeof value === "object" && value !== null) {
            Object.assign(result, flattenTokens(value, nextKey));
        } else {
            result[nextKey] = value;
        }
    }

    return result;
}

export function buildTokens() {
    const css = generateCssVariables();

    const outDir = path.resolve("src/styles");
    const outFile = path.join(outDir, "tokens.css");

    mkdirSync(outDir, { recursive: true });

    writeFileSync(outFile, css, "utf-8");

    console.log("✅ Tokens generated at src/styles/tokens.css");
}
