import { ADPopup } from "ADPopup/ADPopup";

export default {
  title: "Basic/ADPopup",
  component: ADPopup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Basic = () => (
  <ADPopup>
    <p>test</p>
  </ADPopup>
);
