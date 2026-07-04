import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "./input";

const meta = {
    title: "Components/Input",
    component: Input,
    tags: ["autodocs"],
    args: {
        placeholder: "Search...",
        variant: "secondary",
        size: "md",
        fill: false,
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
        fill: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
    },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
    render: () => (
        <div
            style={{
                display: "grid",
                gap: "var(--spacing-sm)",
                maxWidth: "320px",
            }}
        >
            <Input variant="primary" placeholder="Primary" />
            <Input variant="secondary" placeholder="Secondary" />
            <Input variant="ghost" placeholder="Ghost" />
        </div>
    ),
};
