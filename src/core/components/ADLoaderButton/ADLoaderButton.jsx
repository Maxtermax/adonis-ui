import React from "react";
import { useObservableStore, useMutations } from "hermes-io";
import { uniqueId } from "lodash";
import ADLoader from "ADLoader";
import loaderMicroStore from "./store";
import { actions, reducer } from "./reducer";
import * as styles from "./styles";

export const ADLoaderButton = ({
  id = uniqueId("ad-loader-button"),
  className = "",
  loaderProps = {},
  children = [],
  ...rest
}) => {
  const { store } = useObservableStore(
    id,
    {
      isLoading: false,
    },
    reducer,
    loaderMicroStore,
  );

  const { state, onEvent } = useMutations({
    initialState: { isLoading: false },
    store,
    id,
  });
  const { isLoading } = state;

  onEvent(actions.SET_LOADER, (value) => ({ isLoading: value }));

  return (
    <styles.Container className={`ad-loader-button ${className}`} {...rest}>
      {isLoading ? <ADLoader {...loaderProps} /> : children}
    </styles.Container>
  );
};
