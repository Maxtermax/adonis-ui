import { ADMedia } from "components/ADMedia/ADMedia";
import mock from "ADMedia/mock";

export default {
  title: "Basic/ADMedia",
  component: ADMedia,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      table: { disable: true },
    },
    sizes: {
      table: { disable: true },
    },
    name: {
      table: { disable: true },
    },
    images: {
      table: { disable: true },
    },
    thumbnails: {
      table: { disable: true },
    },
    id: {
      table: { disable: true },
    },
  },
};

export const Media = () => <ADMedia {...mock} />;
