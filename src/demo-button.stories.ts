import type { Meta, StoryObj } from "@storybook/web-components";
import { fn } from "@storybook/test";
import "./demo-button";
import { html } from "lit";

export interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  size?: "xsmall" | "small" | "medium" | "large";
  onClick?: () => void;
}
const meta = {
  title: "Demo Button",
  tags: ["autodocs"],
  render: (args: ButtonProps) => html`
    <demo-button
      @click=${args.onClick}
      ?loading=${args.loading ?? false}
      size=${args.size ?? "medium"}
      ?disabled=${args.disabled ?? false}
      >Next</demo-button
    >
  `,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xsmall", "small", "medium", "large"],
    },
    loading: { control: "boolean" },
    // onClick: { action: "onClick" },
  },
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    size: "large"
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    size: "large",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    size: "large",
  },
};

