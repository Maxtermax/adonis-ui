import { ADNotification } from "components/ADNotification/ADNotification";

export default {
  title: "Basic/ADNotification",
  component: ADNotification,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export const Basic = () => <ADNotification text="Title" direction="top" />;

export const Error = () => <ADNotification text="Title" variant="error" />;

export const Warning = () => <ADNotification text="Title" variant="warning" />;

export const Success = () => <ADNotification text="Title" variant="success" />;

export const Left = () => <ADNotification text="Title" direction="left" />;

export const Right = () => <ADNotification text="Title" direction="right" />;

export const Top = () => <ADNotification text="Title" direction="top" />;

export const Bottom = () => <ADNotification text="Title" direction="bottom" />;
