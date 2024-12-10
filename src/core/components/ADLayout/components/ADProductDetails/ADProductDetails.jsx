import React, { useRef } from "react";
import { useTheme } from "@emotion/react";
import ADText from "ADText";
import ADNotifyPopup from "ADNotifyPopup";
import ADNotification from "ADNotification";
import ADButton from "ADButton";
import ADAdvice from "ADAdvice";
import ADAccordion from "ADAccordion";
import ADFlex from "ADFlex";
import { overlayMicroStore } from "ADOverlay/store/overlay";
import ADGrid, { ADGridCol } from "ADGrid";
import { ShoppingCart } from "@styled-icons/feather/ShoppingCart";
import { microNotificationStore } from "ADNotification/store";
import DeliveryInfo from "./components/DeliveryInfo";
import ProductChanges from "./components/ProductChanges";
import PriceCalculator from "./components/PriceCalculator";
import Gallery from "./components/Gallery";
import formatCurrency from "../../../../../utils/formatCurrency";
import * as notificationMutations from "ADNotification/mutations";
import * as mutations from "ADPopup/mutations";
import * as styles from "./styles";

export const Text = (props) => {
  const theme = useTheme();
  return (
    <ADText
      variant="subtitle"
      sx={{
        fontFamily: theme.fonts.primary.light,
        fontSize: theme.fonts.sizes.calc(1),
      }}
      {...props}
    />
  );
};

export const Price = ({ price, discount }) => {
  return (
    <ADFlex direction="row" gap={2}>
      <Text lineThrough value={formatCurrency(price)} />
      {discount ? <span> / </span> : null}
      {discount ? <Text value={formatCurrency(discount.now)} /> : null}
    </ADFlex>
  );
};

const notifyPopupId = "checkout-notify-popup";
const warningNotificationId = "checkout-success-notification";

const toggleNotificationPopup = (id, value) => {
  const store = overlayMicroStore.get(id);
  mutations.setOpen({ store, id: notifyPopupId, value });
};

export const ADProductDetails = ({ product = {} }) => {
  const detailsRef = useRef({
    amount: product.amount,
    size: null,
  });
  const theme = useTheme();

  const handleCountChange = (value) => (detailsRef.current.amount = value);

  const handleSizeChange = (sizes, isNotAvailable) => {
    detailsRef.current.size =
      sizes.find(({ selected }) => selected)?.id ?? null;
    toggleNotificationPopup(notifyPopupId, isNotAvailable);
  };

  const handleBuy = () => {
    const store = microNotificationStore.get(warningNotificationId);
    if (!detailsRef.current.size) {
      notificationMutations.setOpen({
        store,
        id: warningNotificationId,
        value: true,
      });
      return;
    }
  };

  return (
    <styles.Container className="ad-product-details">
      <ADGrid
        fullWidth
        rows={1}
        cols={"1fr 0.94fr"}
        gap={4}
        lg={{
          gap: theme.spacing.calc(2),
        }}
        md={{
          gridTemplateColumns: "1fr",
        }}
        sx={{
          alignItems: "start",
          height: "100%",
        }}
      >
        <ADGridCol
          className="ad-grid-col"
          sx={{
            height: "100%",
          }}
        >
          <Gallery data={product.hdImages} />
        </ADGridCol>

        <ADGridCol
          className="ad-grid-col"
          sx={{
            flexDirection: "column",
            gap: theme.spacing.calc(4),
            width: "calc(100% - 20px)",
            paddingLeft: "20px",
            paddingTop: "20px",
            [`@media screen and (max-width: ${theme.breakpoints.md})`]: {
              padding: "0px",
              width: "calc(100% - 50px)",
            },
          }}
        >
          <ADFlex direction="column" gap={2} alignItems="flex-start">
            <ADText
              value={product.name}
              variant="heading"
              sx={{
                fontSize: theme.fonts.sizes.calc(3.4),
              }}
            />
            <ADText
              value={product.description}
              variant="text"
              sx={{
                fontFamily: theme.fonts.primary.light,
                fontSize: theme.fonts.sizes.calc(1.2),
              }}
            />
          </ADFlex>

          <PriceCalculator
            onChange={handleCountChange}
            onSizeChange={handleSizeChange}
            data={product}
          />

          <ADFlex
            direction="column"
            gap={6}
            alignItems="flex-end"
            sx={{ marginTop: theme.spacing.calc(6) }}
          >
            <ADButton
              onClick={handleBuy}
              variant="contained"
              sx={{
                display: "flex",
                padding: theme.spacing.calc(1),
                gap: theme.spacing.calc(4),
                height: "45px",
                width: "100%",
              }}
            >
              <ShoppingCart size={30} />
              <ADText
                value={"Comprar"}
                variant="text"
                sx={{
                  color: theme.colors.white,
                  fontFamily: theme.fonts.primary.regular,
                  fontSize: theme.fonts.sizes.calc(1.22),
                }}
              />
            </ADButton>

            <ADAdvice
              sx={{
                width: "100%",
              }}
              variant="outlined"
              message="¿No encuentras el producto que buscas? Escríbenos por WhatsApp y te ayudamos al instante 👇"
              link="https://api.whatsapp.com/send?phone=573126093106&text=%C2%A1Hola!%20Estoy%20buscando%20un%20producto%20y%20me%20gustar%C3%ADa%20saber%20si%20pueden%20ayudarme.%20%F0%9F%98%8A"
            />
          </ADFlex>

          <ADFlex direction="column" sx={{ marginTop: theme.spacing.calc(8) }}>
            <ADAccordion
              data={[
                {
                  content: [
                    {
                      content: <DeliveryInfo />,
                      id: "delivery-info",
                      isExpanded: true,
                      type: "ACCORDION_CONTENT",
                    },
                  ],
                  id: "delivery-info",
                  isExpanded: true,
                  label: "Envíos",
                  type: "ACCORDION_PANEL",
                },
                {
                  content: [
                    {
                      content: <ProductChanges />,
                      id: "product-changes",
                      isExpanded: true,
                      type: "ACCORDION_CONTENT",
                    },
                  ],
                  id: "product-changes",
                  isExpanded: true,
                  label: "Cambios y Devoluciones",
                  type: "ACCORDION_PANEL",
                },
              ]}
            />
          </ADFlex>
        </ADGridCol>
      </ADGrid>
      <ADNotifyPopup product={{ current: product.id }} id={notifyPopupId} />
      <ADNotification
        id={warningNotificationId}
        text=" Ya casi!"
        subtitle="Elegir una talla por fa."
        variant="default"
      />
    </styles.Container>
  );
};
