import uniqueId from "lodash/uniqueId";
import ADDrawer from "ADDrawer";
import { setOpen } from "ADDrawer/mutations/drawer";
import { drawerMicroStore } from "ADDrawer/store/drawer";

export default {
  title: "Basic/ADDrawer",
  component: ADDrawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      table: { disable: true },
    },
    width: {
      table: { disable: true },
    },
    height: {
      table: { disable: true },
    },
    content: {
      table: { disable: true },
    },
    id: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    fullWidth: {
      table: { disable: true },
    },
    title: {
      table: { disable: true },
    },
    subtitle: {
      table: { disable: true },
    },
  },
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
  width: "350px",
  height: "100%",
};
