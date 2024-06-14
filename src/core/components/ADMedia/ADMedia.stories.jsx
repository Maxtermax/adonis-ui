import { ADMedia } from "components/ADMedia/ADMedia";
import mock from "ADMedia/mock";

export default {
  title: "Basic/ADMedia",
  component: ADMedia,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Media = () => <ADMedia {...mock} />;
