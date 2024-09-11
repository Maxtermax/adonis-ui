import ADMedia from "ADMedia";
import mock from "ADMedia/mock";
import ADCarousell from "ADCarousell";

export default {
  title: "Basic/ADCarousell",
  component: ADCarousell,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    children: [1, 2, 3, 4].map((index) => (
      <ADMedia key={index} {...mock} />
    )),
  },
};
