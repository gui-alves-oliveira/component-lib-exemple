import type { Decorator, Preview } from "@storybook/react-vite";

import "../src/styles/reset.css";
import "../src/styles/tokens.css";
import "../src/styles/globals.css";

import { ThemeProvider } from "../src/providers/theme-provider";
import type { ThemeMode } from "../src/providers/theme-context";

const withTheme: Decorator = (Story, context) => {
    const selectedTheme =
        context.globals.theme === "dark" ? "dark" : "light";

    return (
        <ThemeProvider
            key={selectedTheme}
            defaultTheme={selectedTheme}
            storageKey={`storybook-theme-${selectedTheme}`}
        >
            <Story />
        </ThemeProvider>
    );
};

const preview: Preview = {
    decorators: [withTheme],
    globalTypes: {
        theme: {
            description: "Theme",
            defaultValue: "light" satisfies ThemeMode,
            toolbar: {
                icon: "circlehollow",
                items: [
                    { value: "light", title: "Light" },
                    { value: "dark", title: "Dark" },
                ],
                dynamicTitle: true,
            },
        },
    },
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            source: {
                type: "dynamic",
            },
        },
    },
};

export default preview;
