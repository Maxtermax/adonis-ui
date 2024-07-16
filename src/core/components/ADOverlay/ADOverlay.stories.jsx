import { ADOverlay } from "ADOverlay/ADOverlay";
import { ADText } from "ADText/ADText";

export default {
  title: "Basic/ADOverlay",
  component: ADOverlay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Basic = () => (
  <ADOverlay isOpen>
    <ADText value="Heading" variant="heading" />
  </ADOverlay>
);
