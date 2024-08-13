import { ADTab } from "ADTabs/components/ADTab";
import ADText from "ADText";
import ADTabs from "ADTabs";
import { TEXT_VARIANTS } from "constants";

export default {
  title: "Basic/ADTabs",
  component: ADTabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      table: { disable: true },
    },
    checked: {
      table: { disable: true },
    },
    id: {
      table: { disable: true },
    },
  },
};

export const Tabs = () => {
  return (
    <ADTabs arrows style={{ maxWidth: "500px" }}>
      <ADTab id={"1"} isSelected>
        <ADText value="Tab 1" variant={TEXT_VARIANTS.TEXT} />
      </ADTab>
      <ADTab id={"2"}>
        <ADText value="Tab 2" variant={TEXT_VARIANTS.TEXT} />
      </ADTab>
      <ADTab id={"3"}>
        <ADText value="Tab 3" variant={TEXT_VARIANTS.TEXT} />
      </ADTab>
      <ADTab id={"4"}>
        <ADText value="Tab 4" variant={TEXT_VARIANTS.TEXT} />
      </ADTab>
    </ADTabs>
  );
};
