import React from "react";
import ADText from "ADText";
import { setPaused } from "ADMedia/mutations/media";
import { mediaStore } from "ADMedia/store";
import Thumbnails from "../Thumbnails";
import Figure from "../Figure";
import Indicator from "../Indicator";
import { TEXT_VARIANTS } from "constants";
import * as styles from "./styles";

const hasClickedOnButton = (event) => {
  const target = event.target;
  return ["ad-slides__indicator-pause", "ad-slides__indicator-play"].some(
    (className) => target.classList.contains(className),
  );
};

export const Content = ({ discount, images = [], thumbnails = [], id }) => {
  const handleMouseEnter = (event) => {
    if (hasClickedOnButton(event)) return;
    const store = mediaStore.get(id);
    setPaused({ store, targets: [id], value: false });
  };

  const handleMouseLeave = () => {
    const store = mediaStore.get(id);
    setPaused({ store, targets: [id], value: true });
  };

  return (
    <styles.Content
      className="ad-media__content"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {discount ? (
        <styles.Discount>
          <ADText
            variant={TEXT_VARIANTS.SUBTITLE}
            value={`-${discount.percentage}`}
            title={`-${discount.percentage}`}
          />
        </styles.Discount>
      ) : null}

      <styles.Previews className="previews">
        <Thumbnails data={thumbnails} id={id} />
      </styles.Previews>
      <Figure id={id} images={images} />
      <Indicator storeId={id} images={images} />
    </styles.Content>
  );
};
