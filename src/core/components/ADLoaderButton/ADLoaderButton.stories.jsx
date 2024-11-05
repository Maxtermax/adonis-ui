import React from "react";
import ADButton from "ADButton";
import loaderMicroStore from "./store";
import { ADLoaderButton } from "./ADLoaderButton";
import { setLoader } from "./mutations";

const id = "ad-loader-button";

export default {
  title: "Basic/ADLoaderButton",
  component: ADLoaderButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const handleClick = () => {
  setLoader({ store: loaderMicroStore.get(id), id, value: true });
  setTimeout(() => {
    setLoader({ store: loaderMicroStore.get(id), id, value: false });
  }, 3000);
};

export const Basic = {
  args: {
    id,
    children: <ADButton onClick={handleClick}>Click me!!!</ADButton>,
    loaderProps: {
      text: "Loading...",
    },
  },
};
