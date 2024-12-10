import React from "react";
import ADLayout from "ADLayout";
import { Landing } from "./stories/Landing/Landing";
import { ProductDetails } from "./stories/ProductDetails/ProductDetails";

export default {
  title: "Basic/ADLayout",
  component: ADLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const LadingPage = Landing.bind({});
export const Product = ProductDetails.bind({});
