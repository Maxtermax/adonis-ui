import React from "react";
import ADText from "ADText";
import { TEXT_VARIANTS } from "constants";
import { Thumbnails } from "../Thumbnails/Thumbnails";
import { Main } from "../Main/Main";
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
      <Main id={id} images={images} />
    </styles.Content>
  );
};
