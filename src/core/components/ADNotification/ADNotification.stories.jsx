import { ADNotification } from "components/ADNotification/ADNotification";

export default {
  title: "Basic/ADNotification",
  component: ADNotification,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
  },
};

export const Basic = () => {
  return <ADNotification />;
};
