import { ADRadio } from "ADRadio/ADRadio";

export default {
  title: "Basic/ADRadio",
  component: ADRadio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      table: { disable: true },
    },
  },
};

export const Radio = () => <ADRadio id="test" label="hola mundo" />;
