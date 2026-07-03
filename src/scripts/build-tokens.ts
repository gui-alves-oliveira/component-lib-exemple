import { writeFileSync, mkdirSync } from "fs";
import path from "path";
import {
    colors,
    radius,
    shadows,
    spacing,
    typography,
    zIndex,
} from "../tokens";

const tokens = {
    color: colors,
    spacing: spacing,
    radius: radius,
    shadow: shadows,
    level: zIndex,
    typography: typography,
};

export function generateCssVariables() {
    const flat = flattenTokens(tokens);

    const cssVariables = Object.entries(flat)
        .map(([key, value]) => {
            const varName = `--${key}`;
            return `  ${varName}: ${value};`;
        })
        .join("\n");

    return `:root {\n${cssVariables}\n}`;
}

function flattenTokens(
    obj: Record<string, any>,
    prefix = "",
): Record<string, string> {
    const result: Record<string, string> = {};

    for (const key in obj) {
        const value = obj[key];
        const nextKey = prefix ? `${prefix}-${key}` : key;

        if (typeof value === "object") {
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
