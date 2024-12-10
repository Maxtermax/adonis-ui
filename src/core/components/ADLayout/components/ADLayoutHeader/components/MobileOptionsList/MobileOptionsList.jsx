import React from "react";
import { useTheme } from "@emotion/react";
import ADAccordion from "ADAccordion";
import ADDivider from "ADDivider";
import ADAdvice from "ADAdvice";
import ADButton from "ADButton";
import ADFlex from "ADFlex";
import ADText from "ADText";
import { X as CloseIcon } from "@styled-icons/feather/X";
import { AlignLeft } from "@styled-icons/feather/AlignLeft";
import ADGrid, { ADGridCol } from "ADGrid";

const mapItemToContent = ({ items = [] }) => {
  return items.map((data, index) => (
    <ADFlex key={index} direction="column" gap={4} sx={{ padding: "10px" }}>
      <ADText
        className="ad-text-item"
        href={data.link}
        value={data.name}
        variant="anchor"
        sx={{
          width: "300px",
        }}
      />
      {index < items.length - 1 ? <ADDivider /> : null}
    </ADFlex>
  ));
};

const mapDataToPanels = (data = []) => {
  return data.reduce((accumulator, item, index) => {
    accumulator.push({
      id: index,
      content: <ADFlex direction="column">{mapItemToContent(item)}</ADFlex>,
      type: "ACCORDION_CONTENT",
    });
    return accumulator;
  }, []);
};

export const MobileOptionsList = ({ data = {}, onClose }) => {
  const theme = useTheme();
  return (
    <ADGrid
      fullWidth
      cols="1fr"
      rows={"45px 130px calc(100dvh - 185px)"}
      alignItems="stretch"
      lg={{
        gap: "4px",
        height: "100%",
      }}
    >
      <ADGridCol>
        <ADFlex
          sx={{
            justifyContent: "space-between",
            width: "100%",
            paddingBottom: theme.spacing.calc(2),
          }}
        >
          <ADFlex gap={2} alignItems="center">
            <AlignLeft size={30} />
            <ADText value="MENU" uppercase variant="title" />
          </ADFlex>
          <ADButton onClick={onClose} variant="text">
            <CloseIcon size={30} />
          </ADButton>
        </ADFlex>
      </ADGridCol>

      <ADGridCol>
        <ADAdvice
          sx={{
            width: "100%",
            margin: `${theme.spacing.calc(1)}) auto`,
          }}
          variant="outlined"
          message="¿No encuentras el producto que buscas? Escríbenos por WhatsApp y te ayudamos al instante 👇"
          link="https://api.whatsapp.com/send?phone=573126093106&text=%C2%A1Hola!%20Estoy%20buscando%20un%20producto%20y%20me%20gustar%C3%ADa%20saber%20si%20pueden%20ayudarme.%20%F0%9F%98%8A"
        />
      </ADGridCol>

      <ADGridCol>
        <ADAccordion
          sx={{
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "3px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              cursor: "pointer",
              backgroundColor: theme.colors.primary,
            },
            " & .__content": {
              width: `calc(100% - ${theme.spacing.calc(1.5)})`,
            },
          }}
          data={[
            {
              content: mapDataToPanels(data["recents"]),
              id: 1,
              isExpanded: true,
              label: "Recientes",
              type: "ACCORDION_PANEL",
            },
            {
              content: mapDataToPanels(data["categories"]),
              id: 2,
              isExpanded: true,
              label: "Categorias",
              type: "ACCORDION_PANEL",
            },
            {
              content: mapDataToPanels(data["offers"]),
              id: 3,
              isExpanded: true,
              label: "Ofertas",
              type: "ACCORDION_PANEL",
            },
          ]}
        />
      </ADGridCol>
    </ADGrid>
  );
};
