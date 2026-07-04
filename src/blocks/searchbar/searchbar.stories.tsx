import type { Meta, StoryObj } from "@storybook/react-vite";

import { SearchBar } from "./searchbar";

const meta = {
    title: "Blocks/SearchBar",
    component: SearchBar,
    tags: ["autodocs"],
    args: {
        placeholder: "Search documentation...",
    },
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    render: (args) => (
        <div style={{ width: "min(640px, 90vw)" }}>
            <SearchBar {...args} />
        </div>
    ),
};
