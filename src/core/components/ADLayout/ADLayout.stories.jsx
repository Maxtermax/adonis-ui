import ADLayout, { ADLayoutHeader, ADLayoutBody }  from "ADLayout";

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
    body: () => (
      <ADLayoutBody />
    ),
    header: () => (
      <ADLayoutHeader />
    ),
  },
};
