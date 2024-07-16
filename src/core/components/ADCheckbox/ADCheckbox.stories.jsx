import { ADCheckbox } from "ADCheckbox/ADCheckbox";

export default {
  title: "Basic/ADCheckbox",
  component: ADCheckbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      table: { disable: true },
    },
    defaultChecked: {
      table: { disable: true },
    },
    id: {
      table: { disable: true },
    },
  },
};

export const Checkbox = () => <ADCheckbox label="hola mundo" />;
