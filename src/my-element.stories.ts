import { Meta, StoryObj } from "@storybook/web-components";
import { html, TemplateResult } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import "./my-element";

interface ArgTypes {
  onOpen?: () => void;
  name?: string;
  count?: number;
  slot?: TemplateResult;
}

export default {
  title: "My Element",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onOpen: { action: "onClick" },
    count: { control: "number" },
    // slot: {control: 'TemplateResult'}
  },
  render: (args: ArgTypes) =>
    html`<my-element
      @click=${args.onOpen}
      name=${args.name ?? ""}
      count=${args.count ?? 0}
    >
      ${args.slot}
    </my-element>`,
} as Meta;

export const Default: StoryObj = {
  name: "Default",
  args: {
    name: "Lit",
    count: "0",
  },
};

export const GreetKen: StoryObj = {
  name: "Greet Ken",
  args: {
    name: "Ken",
    count: 1,
  },
};

export const slot: StoryObj = {
  name: "Slot",
  args: {
    slot: html`${unsafeHTML('<p>Slotted content</p>')}`,
  },
};

export const Supper7: StoryObj = {
  args: {
    name: "Ken",
    count: 7
  },

  name: "Supper 7"
};