export const actions = {
  SET_PRODUCT_AMOUNT: "SET_PRODUCT_AMOUNT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT", 
};

export const reducer = (state, action) => {
  const actionsMap = {
    [actions.SET_PRODUCT_AMOUNT]: () => {
      state.products.find(({ id }) => id === action.payload.id).amount = action.payload.value;
      return state;
    },
    [actions.REMOVE_PRODUCT]: () => {
      state.products.splice(state.products.findIndex(({ id }) => id === action.payload.id), 1);
      return state;
    },
  };
  return actionsMap[action.type]?.();
};

