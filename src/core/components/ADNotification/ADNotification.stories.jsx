import { uniqueId } from "lodash";
import { microNotificationStore } from "ADNotification/store/notification";
import { setOpen } from "ADNotification/mutations/notification";
import ADNotification from "ADNotification";

export default {
  title: "Basic/ADNotification",
  component: ADNotification,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    variant: {
      table: { disable: true },
    },
    text: {
      table: { disable: true },
    },
    id: {
      table: { disable: true },
    },
  },
};

const Template = (args) => {
  const id = uniqueId("ad-notification");
  const handleVisibility = () => {
    const store = microNotificationStore.get(id);
    setOpen({ store, id, value: !store.state.isOpen });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0px",
        left: "0px",
      }}
    >
      <ADNotification id={id} text="Title" {...args} />
      <button onClick={handleVisibility}>Show/Hide</button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  direction: "top",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
};

export const Left = Template.bind({});
Left.args = {
  direction: "left",
};

export const Right = Template.bind({});
Right.args = {
  direction: "right",
};

export const Top = Template.bind({});
Top.args = {
  direction: "top",
};

export const Bottom = Template.bind({});
Bottom.args = {
  direction: "bottom",
};
