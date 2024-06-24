import { ADBreadcrumbs } from "components/ADBreadcrumbs/ADBreadcrumbs";

export default {
  title: "Basic/ADBreadcrumbs",
  component: ADBreadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    list: [
      {
        value: "uno",
      },
      {
        value: "dos",
      },
      {
        value: "tres",
        lineThrough: true
      },
    ],
  },
};
