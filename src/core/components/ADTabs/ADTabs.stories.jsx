import { ADTab } from "ADTabs/components/ADTab";
import { ADText } from "ADText/ADText";
import { ADTabs } from "ADTabs/ADTabs";
import { TEXT_VARIANTS } from "constants";

export default {
  title: "Basic/ADTabs",
  component: ADTabs,
  parameters: {
    layout: "centered",
  },
};

export const Tabs = () => {
  return (
    <ADTabs arrows style={{ maxWidth: "300px" }}>
      <ADTab isSelected>
        <ADText value="text 1" variant={TEXT_VARIANTS.TEXT} />
      </ADTab>
      <ADTab>
        <ADText value="text 2" variant={TEXT_VARIANTS.TEXT} />
      </ADTab>
    </ADTabs>
  );
};
