import { ADSwitch } from "components/ADSwitch/ADSwitch";

export default {
  title: "Basic/ADSwitch",
  component: ADSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      table: { disable: true },
    },
    checked: {
      table: { disable: true },
    },
  },
};

export const Switch = () => (
  <ADSwitch
    onUnCheck={() => console.log("uncheck")}
    onCheck={() => console.log("check")}
  />
);
