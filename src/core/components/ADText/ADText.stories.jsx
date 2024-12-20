import ADText from "ADText";
import { TEXT_VARIANTS } from "constants";
import React from "react";

const { FANCY, HEADING, TITLE, SUBTITLE } = TEXT_VARIANTS;

export default {
  title: "Basic/ADText",
  component: ADText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      table: { disable: true },
    },
    variant: {
      table: { disable: true },
    },
  },
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

export const Fancy = Template.bind({});
Fancy.args = {
  variant: FANCY,
  value: "Fancy",
};


