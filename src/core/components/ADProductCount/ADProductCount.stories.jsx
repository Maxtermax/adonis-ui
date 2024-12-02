import { ADProductCount } from "./ADProductCount";

export default {
  title: "Basic/ADProductCount",
  component: ADProductCount,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      table: { disable: true },
    },
  },
};

export const Default = () => (
  <ADProductCount
    defaultValue={10}
    onChange={(value) => console.log("onChange : ", value)}
    onDelete={(value) => console.log("onDelete :", value)}
  />
);
