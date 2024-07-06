import { ADLoader } from "ADLoader/ADLoader";

export default {
  title: "Basic/ADLoader",
  component: ADLoader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Basic = () => <ADLoader />;

export const Text = () => <ADLoader text="hello word" />;
