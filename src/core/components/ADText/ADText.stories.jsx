import { ADText } from "components/ADText/ADText";
import { TEXT_VARIANTS } from "constants";

const { HEADING, TITLE, SUBTITLE } = TEXT_VARIANTS;

export default {
  title: "Basic/ADText",
  component: ADText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Template = (args) => <ADText {...args} />;

export const Heading = Template.bind({});

Heading.args = {
  variant: HEADING,
  value: "Heading",
};

export const Title = Template.bind({});
Title.args = {
  variant: TITLE,
  value: "Title",
};

export const SubTitle = Template.bind({});
SubTitle.args = {
  variant: SUBTITLE,
  value: "Sub title",
};
