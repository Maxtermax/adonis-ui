import { fn } from "@storybook/test";
import ADBadge from "ADBadge";
import ADButton from "ADButton";
import { SHAPES, DIMENSIONS } from "constants";

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
      options: [DIMENSIONS.small, DIMENSIONS.normal, DIMENSIONS.extraSmall],
    },
  },
};

export const Primary = {
  args: {
    variant: rounded,
    size: DIMENSIONS.small,
    value: "3K",
    position: 'top-right',
    children: (
      <ADButton variant="contained">
        <p>Hola mundo</p>
      </ADButton>
    ),
  },
};
