import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search } from "lucide-react";

import { Icon } from ".";

const meta = {
    title: "Components/Icon",
    component: Icon,
    tags: ["autodocs"],
    args: {
        icon: Search,
        size: "md",
        "aria-hidden": true,
    },
    argTypes: {
        size: {
            control: "inline-radio",
            options: ["sm", "md", "lg"],
        },
        icon: {
            table: {
                disable: true,
            },
        },
    },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--spacing-sm)",
            }}
        >
            <Icon icon={Search} size="sm" aria-hidden />
            <Icon icon={Search} size="md" aria-hidden />
            <Icon icon={Search} size="lg" aria-hidden />
        </div>
    ),
};
