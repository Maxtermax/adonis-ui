import React from "react";
import ADLoader from "ADLoader";
import useLoaderData from "@/core/hooks/useLoaderData";
import Content from "./components/Content";

export const ADShoppingCart = ({ onClose }) => {
  const { actions, state, onEvent } = useLoaderData('products');
  const { data = [], isLoading, error } = state;

  onEvent(actions.SET_PRODUCTS, (value) => ({
    isLoading: false,
    error: null,
    data: value,
  }));

  if (isLoading) return <ADLoader />;
  return <Content error={error} data={data} onClose={onClose} />;
};
