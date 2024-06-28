import { ADTextField } from "components/ADTextField/ADTextField";

export default {
  title: "Basic/ADTextField",
  component: ADTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: "label",
    helperText: "helper",
  },
};

export const Basic = () => {
  return <ADTextField label="label" helperText="helper" error />;
};
