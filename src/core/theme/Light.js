import { DIMENSIONS } from "constants";
import Base from "./Base";

export default class Light extends Base {
  breakpoints = {
    xl: "1200px",
    lg: "1024px",
    md: "768px",
    sm: "576px",
    xs: "360px",
  };
  devices = {
    xs: `(max-width: ${this.breakpoints.xs})`,
    sm: `(max-width: ${this.breakpoints.sm})`,
    md: `(max-width: ${this.breakpoints.md})`,
    lg: `(max-width: ${this.breakpoints.lg})`,
    xl: `(max-width: ${this.breakpoints.xl})`,
  }
  colors = {
    primary: "#0A100D",
    transparent: "transparent",
    transparentBlack: "#0000007d",
    lightSilver: "#9f9f9f17",
    white: "#fff",
    grey: "#9a9da117",
    red: "red",
    contrast: {
      primary: "#FAFAFF",
      white: "#0A100D",
      lightSilver: "#0A100D",
    },
  };
  opacity = {
    middle: "0.5",
    hide: "0",
    visible: "1",
  };
  spacing = {
    [DIMENSIONS.high]: "45px",
    [DIMENSIONS.regular]: "8px",
    [DIMENSIONS.medium]: "14px",
    [DIMENSIONS.low]: "4px",
    [DIMENSIONS.close]: "2px",
    [DIMENSIONS.none]: "0px",
  };
  elevation = {
    [DIMENSIONS.none]: "0px 0px 0px",
    [DIMENSIONS.regular]: "0px 4px 8px",
    [DIMENSIONS.high]: "0px 8px 8px",
  };
  transform = {
    scale: {
      small: "scale(1.03)",
      mid: "scale(1.25)",
      slightly: "scale(1.2)",
      double: "scale(2)",
      half: "scale(1.5)",
      extra: "scale(1.75)",
      tiny: "scale(0.75)",
      ["80%"]: "scale(0.8)",
      ["90%"]: "scale(0.9)",
      none: "scale(1)",
    },
  };
  fonts = {
    primary: {
      regular: "Montserrat",
      thin: "Montserrat-Thin",
      medium: "Montserrat-Medium",
      semiBold: "Montserrat-SemiBold",
      bold: "Montserrat-Bold",
      light: "Montserrat-Light",
      lightItalic: "Montserrat-LightItalic",
    },
    sizes: {
      tiny: "10px",
      small: "14px",
      medium: "16px",
      big: "20px",
    },
  };
  transitions = {
    smooth: "all ease-in-out 0.35s",
    quick: "all ease-in 0.15s",
    fast: "all ease-in 0.35s ",
  };
  border = {
    radius: {
      rounded: "8px",
      sharp: "0px",
    },
    none: "0px",
    normal: "1px",
  };
}
