import { ADMessage } from "./ADMessage";
import { Github } from "@styled-icons/bootstrap/Github";

export default {
  title: "Basic/ADMessage",
  component: ADMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = () => (
  <ADMessage icon={<Github size={50} />} content="Github" />
);
