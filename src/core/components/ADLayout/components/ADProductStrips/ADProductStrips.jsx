import React from "react";
import { ArrowRight } from "@styled-icons/bootstrap";
import { uniqueId } from "lodash";
import ADFlex from "ADFlex";
import ADButton from "ADButton";
import ADText from "ADText";
import ADProductCount from "ADProductCount";
import ADNotifyPopup from "ADNotifyPopup";
import { overlayMicroStore } from "ADOverlay/store/overlay";
import Sizes from "../ADProductFilter/components/Sizes";
import ADBadge from "ADBadge";
import formatCurrency from "../../../../../utils/formatCurrency";
import * as mutations from "ADPopup/mutations";
import * as styles from "./styles";
import { POSITIONS } from "constants";

export const ADProductStrips = ({
  data = [],
  id = uniqueId("ad-product-strips"),
  onDelete,
  onChange,
  showCounter = false,
}) => {
  const notifyPopupId = id + "-notify-popup";
  const handleSizeChange = (sizes, productId, isNotAvailable) => {
    if (isNotAvailable) {
      const store = overlayMicroStore.get(notifyPopupId);
      mutations.setOpen({ store, id: notifyPopupId, value: true });
    }
  };
  const showNotifications = data.some(({ size }) => !!size);

  const nodes = data.map(
    (
      {
        amount = 1,
        name = "",
        discount = 0,
        src = "",
        thubmnail = "",
        link = "#",
        id = "",
        size = "",
        notAvailables = [],
        price,
      },
      index,
    ) => {
      const result = (
        <styles.Item key={id}>
          <ADFlex gap={5} direction="column" alignItems="flex-start" fullWidth>
            <ADFlex
              direction="column"
              alignItems="flex-start"
              fullWidth
              gap={2}
            >
              <styles.Wrapper href={link} delay={index * 0.1}>
                <styles.Thumbnail src={thubmnail || src} />
                <ADFlex alignItems="flext-start" direction="column">
                  <ADFlex gap={2} alignItems="flext-start">
                    <ADText
                      variant="text"
                      value={name}
                      sx={{
                        maxWidth: "80px",
                        whiteSpace: "nowrap"
                      }}
                    />
                    <ADText
                      href={link}
                      value={
                        <ADButton
                          variant="sharp"
                          sx={{
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "flex-start",
                            height: "24px",
                            padding: "8px",
                            borderRadius: "18px",
                          }}
                        >
                          <span>Ver </span>
                          <ArrowRight size={20} />
                        </ADButton>
                      }
                    />
                  </ADFlex>
                  <ADFlex gap={2} alignItems="flext-start">
                    {discount ? (
                      <ADText
                        lineThrough
                        variant="subtitle"
                        value={
                          typeof discount === "number"
                            ? formatCurrency(price * discount) + " / "
                            : formatCurrency(discount.now)
                        }
                      />
                    ) : null}
                    <ADText variant="subtitle" value={formatCurrency(price)} />
                  </ADFlex>
                  {size ? (
                    <styles.SizesWrapper>
                      <Sizes
                        hideTitle
                        defaultSize={size}
                        notAvailables={notAvailables}
                        onChange={(sizes, isNotAvailable) =>
                          handleSizeChange(sizes, id, isNotAvailable)
                        }
                      />
                    </styles.SizesWrapper>
                  ) : null}
                </ADFlex>
              </styles.Wrapper>
            </ADFlex>
          </ADFlex>
        </styles.Item>
      );
      if (showCounter) {
        return (
          <ADBadge
            key={id}
            left="calc(100% - 51px)"
            bottom="90px"
            value={
              <ADProductCount
                defaultValue={amount}
                onChange={(value) => onChange({ id, value })}
                onDelete={(value) => onDelete({ id, value })}
              />
            }
            position={POSITIONS.bottomRight}
          >
            {result}
          </ADBadge>
        );
      }
      return result;
    },
  );
  return (
    <>
      {nodes}
      {showNotifications ? <ADNotifyPopup id={notifyPopupId} /> : null}
    </>
  );
};
