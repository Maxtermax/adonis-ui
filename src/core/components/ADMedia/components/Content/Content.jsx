import React from "react";
import ADText from "ADText";
import { TEXT_VARIANTS } from "constants";
import Thumbnails from "../Thumbnails";
import Figure from "../Figure";
import Indicator from "../Indicator";
import * as styles from "./styles";

export const Content = ({ discount, images = [], thumbnails = [], id }) => {
  return (
    <styles.Content className="content">
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
      <Indicator id={id} images={images} />
    </styles.Content>
  );
};
