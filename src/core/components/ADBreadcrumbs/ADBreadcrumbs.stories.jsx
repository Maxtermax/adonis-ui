import { ADBreadcrumbs } from "components/ADBreadcrumbs/ADBreadcrumbs";

export default {
  title: "Basic/ADBreadcrumbs",
  component: ADBreadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    list: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
};

export const Primary = {
  args: {
    list: [
      {
        value: "One",
      },
      {
        value: "Two",
      },
      {
        value: "tres",
        lineThrough: true,
      },
    ],
  },
};
