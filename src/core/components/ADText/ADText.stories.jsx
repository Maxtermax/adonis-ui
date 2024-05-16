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

export const Heading = {
  args: {
    variant: HEADING,
    value: "Heading",
  },
};

export const Title = {
  args: {
    variant: TITLE,
    value: "Title",
  },
};

export const SubTitle = {
  args: {
    variant: SUBTITLE,
    value: "Sub title",
  },
};


