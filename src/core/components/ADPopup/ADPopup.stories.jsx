import { overlayMicroStore } from "ADOverlay/store/overlay";
import ADPopup from "ADPopup";
import { ADButton } from "ADButton/ADButton";
import { ADTextField } from "ADTextField/ADTextField";
import { ADPanel } from "ADPanel/ADPanel";
import * as mutations from "ADPopup/mutations";
import uniqueId from "lodash/uniqueId";

export default {
  title: "Basic/ADPopup",
  component: ADPopup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { isOpen: false, disableClose: false },
  argTypes: {
    disableClose: "checkbox",
    children: {
      table: { disable: true },
    },
    title: {
      table: { disable: true },
    },
    reRenderOnClose: {
      table: { disable: true },
    },
    id: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
};

const id = uniqueId("");

export const Basic = ({ ...args }) => {
  const handleVisibility = () => {
    const store = overlayMicroStore.get(id);
    mutations.setOpen({ store, id, value: true });
  };
  return (
    <div>
      <ADPopup title="Hello word" id={id} {...args}>
        <ADPanel variant="flat">
          <ADTextField
            placeholder="Placeholder"
            label="label"
            helperText="helper text"
          />
        </ADPanel>
      </ADPopup>
      <ADButton variant="outlined" onClick={handleVisibility}>
        Show
      </ADButton>
    </div>
  );
};

export const Fullscreen = ({ ...args }) => {
  const handleVisibility = () => {
    const store = overlayMicroStore.get(id);
    mutations.setOpen({ store, id, value: true });
  };
  return (
    <div>
      <ADPopup variant="fullscreen" title="Hello word" id={id} {...args}>
        <ADPanel variant="flat">
          <ADTextField
            placeholder="Placeholder"
            label="label"
            helperText="helper text"
          />
        </ADPanel>
      </ADPopup>
      <ADButton variant="outlined" onClick={handleVisibility}>
        Show
      </ADButton>
    </div>
  );
};
