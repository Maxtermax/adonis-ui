import { ADTextField } from "components/ADTextField/ADTextField";
import { User } from "@styled-icons/boxicons-regular/User";

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
  return (
    <ADTextField
      placeholder="Placeholder"
      label="label"
      helperText="helper text"
    />
  );
};

export const Icon = () => {
  return (
    <ADTextField
      icon={<User size={20} />}
      placeholder="Placeholder"
      label="label"
      helperText="helper text"
    />
  );
};

export const Error = () => {
  return (
    <ADTextField
      error
      placeholder="Placeholder"
      label="label"
      helperText="helper text"
    />
  );
};
