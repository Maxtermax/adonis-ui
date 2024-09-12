import React from "react";
import { overlayMicroStore } from "ADOverlay/store/overlay";
import { setOpen } from "ADPopup/mutations/setOpen";
import { ADButton } from "ADButton/ADButton";
import { ADText } from "ADText/ADText";
import { ADPanel } from "ADPanel/ADPanel";
import { ADTooltip } from "ADTooltip/ADTooltip";
import { Close } from "@styled-icons/evil/Close"
import * as styles from "ADPopup/styles";

export const Header = ({ storeId, title = "", disableClose = false }) => {
  const handleClose = () => {
    const store = overlayMicroStore.get(storeId);
    setOpen({ store, id: storeId, value: false });
  };
  return (
    <styles.Header>
      <ADPanel variant="flat" className="ad-popup__title">
        {typeof title === "string" ? <ADText value={title} variant={"title"} /> : title}
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
            <Close size={25} />
          </ADButton>
        </ADTooltip>
      </ADPanel>
    </styles.Header>
  );
};
