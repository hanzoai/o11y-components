import type { Meta, StoryObj } from "@storybook/react";
import ColorPalette from "../components/ColorPalette";
import { getTransformedColorTokens } from "../utils";

const meta: Meta<typeof ColorPalette> = {
  title: "Design System/Colors",
  component: ColorPalette,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#000" }],
    },
  },
};

const colors = getTransformedColorTokens();

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const Default: Story = {
  render: () => <ColorPalette />,
};
