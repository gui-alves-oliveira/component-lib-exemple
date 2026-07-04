import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./button";

const meta = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    args: {
        children: "Button",
        variant: "primary",
        size: "md",
        full: false,
        disabled: false,
    },
    argTypes: {
        variant: {
            control: "inline-radio",
            options: ["primary", "secondary", "ghost"],
        },
        size: {
            control: "inline-radio",
            options: ["sm", "md", "lg"],
        },
        full: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "var(--spacing-sm)" }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--spacing-sm)",
            }}
        >
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    ),
};
