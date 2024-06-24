import { ADDrawer } from "components/ADDrawer/ADDrawer";
import { setOpen } from "ADDrawer/mutations/drawer";
import { drawerMicroStore } from "ADDrawer/store/drawer";
import { uniqueId } from "lodash";

export default {
  title: "Basic/ADDrawer",
  component: ADDrawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Template = (args) => {
  const id = uniqueId("");
  const handleOpen = () => {
    const store = drawerMicroStore.get(id);
    setOpen({ store, id, value: true });
  };
  const handleClose = () => {
    const store = drawerMicroStore.get(id);
    setOpen({ store, id, value: false });
  };

  return (
    <div>
      <ADDrawer
        content={
          <div>
            <button onClick={handleClose}>Close</button>
          </div>
        }
        id={id}
        {...args}
      />
      <button onClick={handleOpen}>Open</button>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: "Title",
  subtitle: "subtitle",
  variant: "left",
  width: "500px"
};
