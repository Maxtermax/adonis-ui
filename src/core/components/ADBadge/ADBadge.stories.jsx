import { fn } from "@storybook/test";
import ADBadge from "ADBadge";
import ADButton from "ADButton";
import { POSITIONS } from "constants";

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
    position: {
      control: "select",
      options: [
        POSITIONS.bottomLeft,
        POSITIONS.bottomRight,
        POSITIONS.topLeft,
        POSITIONS.topLeft,
        POSITIONS.topRight,
      ],
    },
  },
};

export const Primary = {
  args: {
    value: "3K",
    position: POSITIONS.topRight,
    children: (
      <ADButton variant="contained">
        <p>Hola mundo</p>
      </ADButton>
    ),
  },
};
