import { fn } from "@storybook/test";
import { ADBadge } from "components/ADBadge/ADBadge";
import { ADText } from "components/ADText/ADText";
import { SHAPES, TEXT_VARIANTS, DIMENSIONS } from "constants";

const { circle, rounded, sharp } = SHAPES;

export default {
  title: "Basic/ADBadge",
  component: ADBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    onClick: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    variant: {
      control: "select",
      options: [rounded, sharp, circle],
    },
    size: {
      control: "select",
      options: [DIMENSIONS.small, DIMENSIONS.normal, DIMENSIONS.xs],
    },
  },
};

export const Primary = {
  args: {
    variant: rounded,
    size: DIMENSIONS.small,
    children: <ADText variant={TEXT_VARIANTS.HEADING} value="2" />,
  },
};
