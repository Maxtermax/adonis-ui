import React from "react";
import ADText from "ADText";
import ADButton from "ADButton";
import ADAdvice from "ADAdvice";
import ADFlex from "ADFlex";
import ADMessage from "ADMessage";
import ADErrorMessage from "ADErrorMessage";
import ADProductStrips from "../../../ADProductStrips";
import ADGrid, { ADGridCol } from "ADGrid";
import { X as CloseIcon } from "@styled-icons/feather/X";
import { CartCheck } from "@styled-icons/bootstrap/CartCheck";
import { Archive } from "@styled-icons/feather/Archive";
import Total from "../Total";
import * as styles from "../../styles";
import {
  datasourceMicroStore,
  DATASOURCE,
} from "@/core/hooks/useDataSource/store";
import {
  setProductAmount,
  setProducts,
} from "@/core/hooks/useDataSource/mutations";

export const Content = ({ data = [], error, onClose }) => {
  const handleDelete = ({ id: productId }) => {
    const store = datasourceMicroStore.get(DATASOURCE);
    const { state } = store;
    const value = [...state.products].filter(({ id }) => id !== productId);
    setProducts(store, [DATASOURCE], value);
  };

  const handleChange = ({ id: productId, value }) => {
    const store = datasourceMicroStore.get(DATASOURCE);
    setProductAmount(store, [DATASOURCE], { id: productId, value });
  };

  const isEmpty = data.length === 0;

  const defaultTotal = data.reduce(
    (acc, { price, amount = 1 }) => acc + amount * price,
    0,
  );

  return (
    <styles.Container className="ad-shopping-cart">
      <ADGrid
        fullWidth
        cols="1fr"
        rows={"45px calc(100dvh - 185px) 40px 60px"}
        alignItems="stretch"
        lg={{
          gap: "4px",
          height: "100%",
        }}
      >
        <ADGridCol>
          <styles.Header>
            <ADFlex gap={2} alignItems="center">
              <CartCheck size={35} />
              <ADText value="CARRITO" uppercase variant="title" />
            </ADFlex>
            <ADButton onClick={onClose} variant="text">
              <CloseIcon size={30} />
            </ADButton>
          </styles.Header>
        </ADGridCol>

        <ADGridCol>
          <styles.Content
            className="ad-shopping-cart__content"
            sx={{
              justifyContent: error ? "center" : "flex-start",
            }}
          >
            {error && !isEmpty ? (
              <ADErrorMessage message="Los sentimos ocurrio un error interno 😞" />
            ) : (
              <ADProductStrips
                noLink
                showCounter
                onChange={handleChange}
                onDelete={handleDelete}
                data={data}
              />
            )}
            {isEmpty ? (
              <ADMessage
                icon={<Archive size={50} />}
                sx={{
                  display: "flex",
                  placeContent: "center",
                  height: "100%",
                  gap: "10px",
                }}
                content={
                  <ADAdvice 
                    message="¿No encuentras el producto que buscas? Escríbenos por WhatsApp y te ayudamos al instante 👇"
                    link="https://api.whatsapp.com/send?phone=573126093106&text=%C2%A1Hola!%20Estoy%20buscando%20un%20producto%20y%20me%20gustar%C3%ADa%20saber%20si%20pueden%20ayudarme.%20%F0%9F%98%8A"
                  />
                }
              />
            ) : null}
          </styles.Content>
        </ADGridCol>

        {isEmpty ? null : (
          <ADGridCol>
            <ADFlex
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              fullWidth
              gap={2}
            >
              <styles.Divider />
              <Total defaultTotal={defaultTotal} />
            </ADFlex>
          </ADGridCol>
        )}

        {isEmpty ? null : (
          <ADGridCol>
            <styles.Footer>
              <ADText
                href="#"
                value={
                  <ADButton
                    variant="sharp"
                    sx={{
                      width: "100%",
                      display: "flex",
                      padding: "5px",
                    }}
                  >
                    Ir a pagar
                  </ADButton>
                }
              />
            </styles.Footer>
          </ADGridCol>
        )}
      </ADGrid>
    </styles.Container>
  );
};
