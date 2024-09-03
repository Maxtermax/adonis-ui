import ADLayout, { ADLayoutHeader }  from "ADLayout";

export default {
  title: "Basic/ADLayout",
  component: ADLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    header: () => (
      <ADLayoutHeader />
    ),
  },
};
