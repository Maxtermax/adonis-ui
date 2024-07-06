import { ADCheckbox } from "ADCheckbox/ADCheckbox";

export default {
  title: "Basic/ADCheckbox",
  component: ADCheckbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Checkbox = () => <ADCheckbox label="hola mundo" />;
