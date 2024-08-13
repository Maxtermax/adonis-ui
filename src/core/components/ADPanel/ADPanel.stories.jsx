import ADPanel from "ADPanel";
import ADText from "ADText";

export default {
  title: "Basic/ADPanel",
  component: ADPanel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      table: { disable: true },
    },
    variant: {
      table: { disable: true },
    },
  },
};

export const Panel = () => (
  <ADPanel>
    <ADText variant="text" value="Test" />
  </ADPanel>
);
