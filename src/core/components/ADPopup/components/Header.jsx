import { overlayMicroStore } from "ADOverlay/store/overlay";
import { setOpen } from "ADPopup/mutations/setOpen";
import { ADButton } from "ADButton/ADButton";
import { ADText } from "ADText/ADText";
import { ADPanel } from "ADPanel/ADPanel";
import { ADTooltip } from "ADTooltip/ADTooltip";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import * as styles from "ADPopup/styles";

export const Header = ({ storeId, title = "", disableClose = false }) => {
  const handleClose = () => {
    const store = overlayMicroStore.get(storeId);
    setOpen({ store, id: storeId, value: false });
  };
  return (
    <styles.Header>
      <ADPanel variant="flat" className="ad-popup__title">
        {title ? <ADText value={title} variant={"title"} /> : null}
        <ADTooltip
          direction="top"
          text={<ADText value="Close" variant="subtitle" />}
        >
          <ADButton
            className="ad-popup__btn-close"
            disabled={disableClose}
            onClick={handleClose}
            variant="text"
          >
            <CloseOutline />
          </ADButton>
        </ADTooltip>
      </ADPanel>
    </styles.Header>
  );
};
