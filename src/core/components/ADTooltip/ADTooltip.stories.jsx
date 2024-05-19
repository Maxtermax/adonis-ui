import { ADTooltip } from "components/ADTooltip/ADTooltip";
import { DIRECTIONS } from "constants";

export default {
  title: "Basic/ADTooltip",
  component: ADTooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const DirectionTop = {
  args: {
    direction: DIRECTIONS.TOP,
    text: "Tooltip",
    children: <p>Test</p>,
  },
};
