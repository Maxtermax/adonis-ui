import { ADErrorMessage } from "./ADErrorMessage";

export default {
  title: "Basic/ADErrorMessage",
  component: ADErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = () => <ADErrorMessage message="Error message" />;
