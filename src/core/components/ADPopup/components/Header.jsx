import React from "react";
import { overlayMicroStore } from "ADOverlay/store";
import { setOpen } from "ADPopup/mutations";
import ADButton from "ADButton";
import ADText from "ADText";
import ADPanel from "ADPanel";
import ADTooltip from "ADTooltip";
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
          direction="bottom"
          text={<ADText value="Cerrar" variant="subtitle" />}
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
