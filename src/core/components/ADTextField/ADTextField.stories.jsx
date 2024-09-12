import ADTextField from "ADTextField";
import { Search } from "@styled-icons/feather/Search";

export default {
  title: "Basic/ADTextField",
  component: ADTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    helperText: {
      table: { disable: true },
    },
    label: {
      table: { disable: true },
    },
    defaultValue: {
      table: { disable: true },
    },
    placeholder: {
      table: { disable: true },
    },
    disabled: {
      table: { disable: true },
    },
    color: {
      table: { disable: true },
    },
    icon: {
      table: { disable: true },
    },
    id: {
      table: { disable: true },
    },
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

export const Flat = () => {
  return (
    <ADTextField
      icon={<Search size={20} />}
      placeholder="Type to search"
      variant="flat"
    />
  );
};

export const Icon = () => {
  return (
    <ADTextField
      icon={<Search size={20} />}
      placeholder="Placeholder"
      label="label"
      helperText="helper text"
    />
  );
};

export const Success = () => {
  return (
    <ADTextField
      color="success"
      placeholder="Placeholder"
      label="label"
      helperText="helper text"
    />
  );
};

export const Warning = () => {
  return (
    <ADTextField
      color="warning"
      placeholder="Placeholder"
      label="label"
      helperText="helper text"
    />
  );
};

export const Error = () => {
  return (
    <ADTextField
      color="error"
      placeholder="Placeholder"
      label="label"
      helperText="helper text"
    />
  );
};
