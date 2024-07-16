import { ADSelect } from "ADSelect/ADSelect";

export default {
  title: "Basic/ADSelect",
  component: ADSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      table: { disable: true },
    },
    options: {
      table: { disable: true },
    },
    label: {
      table: { disable: true },
    },
    maxHeight: {
      table: { disable: true },
    },
    width: {
      table: { disable: true },
    },
    variant: {
      table: { disable: true },
    },
    disabled: {
      table: { disable: true },
    },
  },
};

export const Select = () => {
  return (
    <ADSelect
      defaultOption={2}
      options={[
        {
          name: "One",
          id: 1,
          content: <p>Custom option</p>,
          label: "Custom label",
        },
        { name: "Two", id: 2 },
        { name: "Three", id: 3 },
        { name: "Four", id: 4 },
        { name: "Five", id: 5 },
        { name: "six", id: 6 },
      ]}
    />
  );
};
