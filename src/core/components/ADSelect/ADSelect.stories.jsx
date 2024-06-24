import { ADSelect } from "ADSelect/ADSelect";

export default {
  title: "Basic/ADSelect",
  component: ADSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Select = () => {
  return (
    <ADSelect
      defaultOption={2}
      options={[
        { name: "uno", id: 1, content: <p>TEST</p>, label: "Test" },
        { name: "dos", id: 2 },
        { name: "tres", id: 3 },
        { name: "cuatro", id: 4 },
        { name: "cinco", id: 5 },
        { name: "seis", id: 6 },
      ]}
    />
  );
};
