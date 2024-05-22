import { ADTooltip } from "components/ADTooltip/ADTooltip";
import { ADText } from "components/ADText/ADText";
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
