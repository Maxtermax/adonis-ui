import ADTooltip from "ADTooltip";
import ADText from "ADText";
import { TEXT_VARIANTS, DIRECTIONS } from "constants";
const { HEADING, TEXT } = TEXT_VARIANTS;

export default {
  title: "Basic/ADTooltip",
  component: ADTooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    direction: {
      control: "select",
      options: [
        DIRECTIONS.TOP,
        DIRECTIONS.BOTTOM,
        DIRECTIONS.LEFT,
        DIRECTIONS.RIGHT,
      ],
    },
  },
};

export const DirectionTop = {
  args: {
    direction: DIRECTIONS.LEFT,
    contrast: false,
    text: <ADText variant={TEXT} value="Title" />,
    children: <ADText variant={HEADING} value="Hola mundo" />,
  },
};
