import React from "react";
import { useObservableStore, useMutations } from "hermes-io";
import ADText from "ADText";
import ADButton from "ADButton";
import ADFlex from "ADFlex";
import { ADProductStrips } from "../ADProductStrips/ADProductStrips";
import ADLoaderButton from "ADLoaderButton";
import ADGrid, { ADGridCol } from "ADGrid";
import { X as CloseIcon } from "@styled-icons/feather/X";
import { CartCheck } from "@styled-icons/bootstrap/CartCheck";
import { uniqueId } from "lodash";
import * as styles from "./styles";
import formatCurrency from "../../../../../utils/formatCurrency";
import { productsMicroStore } from "./store";
import { reducer, actions } from "./reducer";

const Total = ({ id, defaultTotal = 0 }) => {
  const { onEvent, state } = useMutations({
    initialState: { total: defaultTotal },
    store: productsMicroStore,
    id,
  });

  const calculateTotal = () => {
    const products = productsMicroStore.get(id).state.products;
    return products.reduce(
      (acc, { price, amount = 1 }) => acc + amount * price,
      0,
    );
  };

  onEvent(actions.SET_PRODUCT_AMOUNT, () => ({ total: calculateTotal() }));

  return (
    <ADText value={`TOTAL: ${formatCurrency(state.total)}`} variant="title" />
  );
};

export const ADShoppingCart = ({
  id = uniqueId("ad-shopping-cart"),
  data = [],
  onClose,
}) => {
  const { store } = useObservableStore(
    id,
    { products: data },
    reducer,
    productsMicroStore,
  );

  const handleDelete = ({ id: productId }) => {
    store.mutate({
      targets: [id],
      type: actions.REMOVE_PRODUCT,
      payload: { id: productId },
    });
  };

  const handleChange = ({ id: productId, value }) => {
    store.mutate({
      targets: [id],
      type: actions.SET_PRODUCT_AMOUNT,
      payload: { id: productId, value },
    });
  };

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
          <styles.Content className="ad-shopping-cart__content">
            <ADProductStrips
              showCounter
              onChange={handleChange}
              onDelete={handleDelete}
              data={data}
            />
          </styles.Content>
        </ADGridCol>

        <ADGridCol>
          <ADFlex
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
            fullWidth
            gap={2}
          >
            <styles.Divider />
            <Total id={id} defaultTotal={defaultTotal} />
          </ADFlex>
        </ADGridCol>

        <ADGridCol>
          <styles.Footer>
            <ADLoaderButton id={id}>
              <ADButton variant="sharp">
                <ADText value="Ir a pagar" variant="subtitle" />
              </ADButton>
            </ADLoaderButton>
          </styles.Footer>
        </ADGridCol>
      </ADGrid>
    </styles.Container>
  );
};
