import React, { useRef } from "react";
import ADText from "ADText";
import { setPaused } from "ADMedia/mutations/media";
import { mediaStore } from "ADMedia/store";
import Thumbnails from "../Thumbnails";
import Figure from "../Figure";
import Indicator from "../Indicator";
import { TEXT_VARIANTS } from "constants";
import * as styles from "./styles";

export const Content = ({ discount, images = [], thumbnails = [], id }) => {
  const indicatorRef = useRef(null);
  const pause = () => {
    const store = mediaStore.get(id);
    setPaused({ store, targets: [id], value: true });
  };

  const play = () => {
    const store = mediaStore.get(id);
    setPaused({ store, targets: [id], value: false });
  };

  const handleMouseEnter = (event) => {
    const { target } = event;
    let hasClickedToggleButton = false;
    for (const node of indicatorRef.current.childNodes) {
      hasClickedToggleButton = node.contains(target);
      if (hasClickedToggleButton) break;
    }
    if (hasClickedToggleButton) return;
    play();
  };

  const handleMouseLeave = () => pause();

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
      <Indicator ref={indicatorRef} storeId={id} images={images} />
    </styles.Content>
  );
};
