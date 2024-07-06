import { ADOverlay } from "ADOverlay/ADOverlay";
import { ADLoader } from "ADLoader/ADLoader";

export default {
  title: "Basic/ADOverlay",
  component: ADOverlay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Basic = () => (
  <ADOverlay>
    <ADLoader text="Loading..." />
  </ADOverlay>
);
