import { ADLoader } from "ADLoader/ADLoader";

export default {
  title: "Basic/ADLoader",
  component: ADLoader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      table: { disable: true },
    },
    text: {
      table: { disable: true },
    },
  },
};

export const Basic = () => <ADLoader />;

export const Small = () => <ADLoader size={0.5} />;

export const Text = () => <ADLoader text="hello word" />;
