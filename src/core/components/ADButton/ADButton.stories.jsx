import { fn } from "@storybook/test";
import { ADButton } from "components/ADButton/ADButton";
import { CARD_VARIANTS } from "constants";

const { TEXT, OUTLINED, CONTAINED, SHARP } = CARD_VARIANTS;

export default {
  title: "Basic/ADButton",
  component: ADButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [TEXT, OUTLINED, CONTAINED, SHARP],
    },
    onClick: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    variant: CONTAINED,
    children: <p>Example</p>,
  },
};
