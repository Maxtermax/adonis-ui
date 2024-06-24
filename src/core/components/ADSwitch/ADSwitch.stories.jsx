import { ADSwitch } from "components/ADSwitch/ADSwitch";

export default {
  title: "Basic/ADSwitch",
  component: ADSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Switch = () => (
  <ADSwitch
    onUnCheck={() => console.log("uncheck")}
    onCheck={() => console.log("check")}
  />
);
