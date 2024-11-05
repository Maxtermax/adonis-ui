import { ADRangeSlider } from "./ADRangeSlider";

export default {
  title: "Basic/ASlider",
  component: ADRangeSlider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Basic = () => {
  return <ADRangeSlider min={0} max={10} />;
};
