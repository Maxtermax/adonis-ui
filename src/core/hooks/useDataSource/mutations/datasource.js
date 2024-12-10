import { actions } from "../reducer";

export const setProducts = (store, targets = [], value) => {
  store.mutate({
    targets,
    type: actions.SET_PRODUCTS,
    payload: { value },
  });
};

export const setRecommendations = (store, targets = [], value) => {
  store.mutate({
    targets,
    type: actions.SET_RECOMMENDATIONS,
    payload: { value },
  });
};

export const setProductAmount = (store, targets = [], payload) => {
  store.mutate({
    targets,
    type: actions.SET_PRODUCT_AMOUNT,
    payload,
  });
};

export const sendNotifyProduct = (store, targets = [], payload) => {
  store.mutate({
    targets,
    type: actions.SEND_NOTIFY_PRODUCT,
    payload,
  });
};


