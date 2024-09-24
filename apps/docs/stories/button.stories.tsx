import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@signoz/button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
    asChild: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    theme: "light",
    asChild: false,
    onClick: () => {
      // eslint-disable-next-line no-alert -- alert for demo
      alert("It works!");
    },
  },
};

export const Secondary: Story = {
  render: (args) => <Button {...args} />,
  args: {
    ...Primary.args,
    children: "Secondary",
    variant: "secondary",
  },
};

export const Large: Story = {
  render: (args) => <Button {...args} />,
  args: {
    ...Primary.args,
    children: "Large",
    size: "lg",
  },
};

export const Small: Story = {
  render: (args) => <Button {...args} />,
  args: {
    ...Primary.args,
    children: "Small",
    size: "sm",
  },
};

export const Dark: Story = {
  render: (args) => <Button {...args} />,
  args: {
    ...Primary.args,
    children: "Dark Theme",
    theme: "dark",
  },
};
