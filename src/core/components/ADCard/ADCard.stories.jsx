import { fn } from "@storybook/test";
import { ADCard } from "components/ADCard/ADCard";
import { CARD_VARIANTS, DIMENSIONS, SHAPES } from "constants";

const { OUTLINED, CONTAINED } = CARD_VARIANTS;

export default {
  title: "Basic/ADCard",
  component: ADCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    Header: {
      table: { disable: true },
    },
    Content: {
      table: { disable: true },
    },
    Footer: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    variant: {
      control: "select",
      options: [OUTLINED, CONTAINED],
    },
    elevation: {
      control: "select",
      options: [DIMENSIONS.high, DIMENSIONS.none, DIMENSIONS.regular],
    },
    shape: {
      control: "select",
      options: [SHAPES.rounded, SHAPES.sharp],
    },
    gap: {
      control: "select",
      options: [DIMENSIONS.high, DIMENSIONS.none, DIMENSIONS.regular],
    },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    elevation: DIMENSIONS.high,
    variant: CONTAINED,
    gap: DIMENSIONS.high,
    shape: SHAPES.rounded,
    Header: () => <div>header</div>,
    Content: () => <div style={{ width: "300px" }}>content</div>,
    Footer: () => <div>footer</div>,
  },
};
