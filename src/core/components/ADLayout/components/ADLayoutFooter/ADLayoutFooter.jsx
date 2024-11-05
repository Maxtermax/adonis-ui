import React from "react";
import ADGrid from "ADGrid";
import ADText from "ADText";
import * as styles from "./styles";

export const ADLayoutFooter = () => {
  return (
    <styles.Container className="ad-layout-footer">
      <ADGrid
        fullWidth
        cols={"repeat(auto-fit, minmax(300px, 1fr))"}
        lg={{
          alignItems: "start",
          height: "max-content",
          gap: "20px",
        }}
        sm={{
          gap: "40px",
          justifyItems: "start",
        }}
      >
        <styles.List className="ad-layout-footer-list">
          <styles.Item className="ad-layout-footer-list__item">
            <ADText value="Sobre nosotros" variant={"title"} />
            <a href="#">
              <ADText value="Contacto" variant={"subtitle"} />
            </a>
            <a href="#">
              <ADText value="Sugerencias" variant={"subtitle"} />
            </a>
          </styles.Item>
        </styles.List>

        <styles.List className="ad-layout-footer-list">
          <styles.Item className="ad-layout-footer-list__item">
            <ADText value="Guía de compra" variant={"title"} />
            <a href="#">
              <ADText value="Envíos y plazos de entrega" variant={"subtitle"} />
            </a>
            <a href="#">
              <ADText value="Cambios / Devoluciones" variant={"subtitle"} />
            </a>
            <a href="#">
              <ADText value="Metodos de pago" variant={"subtitle"} />
            </a>
          </styles.Item>
        </styles.List>

        <styles.List className="ad-layout-footer-list">
          <styles.Item className="ad-layout-footer-list__item">
            <ADText value="Atención al cliente" variant={"title"} />
            <a href="#">
              <ADText value="ayuda@adonisurban.com" variant={"subtitle"} />
            </a>
            <a href="#">
              <ADText value="WhatsApp" variant={"subtitle"} />
            </a>
          </styles.Item>
        </styles.List>
      </ADGrid>
      <styles.Trademark className="ad-layout-footer-trademark">
        <ADText
          variant="subtitle"
          value={`© ${new Date().getFullYear()} Adonis Urban`}
        />
      </styles.Trademark>
    </styles.Container>
  );
};
