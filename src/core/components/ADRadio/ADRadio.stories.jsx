import { ADRadio } from 'ADRadio/ADRadio';

export default {
  title: "Basic/ADRadio",
  component: ADRadio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Radio = () => <ADRadio id="test" label="hola mundo" />;

