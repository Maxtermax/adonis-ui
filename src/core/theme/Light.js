import { DIMENSIONS } from "constants";
import Base from "./Base";

const MIN_SPACING = 4;
const SCALE_FACTOR = 1;
const FONT_SIZE_FACTOR = 16; 

class Light extends Base {
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
  };
  colors = {
    primary: "#0A100D",
    success: "#00aa00",
    transparent: "#0000000",
    transparentBlack: "#0000007d",
    transparentWhite: "rgba(255, 255, 255, 0.5)",
    lightSilver: "#00000017",
    smoke: "whitesmoke",
    warning: "#ffcc4e",
    white: "#ffffff",
    grey: "#f7f7f7",
    silver: "#efeeee",
    blue: "#3289e7",
    red: "red",
    error: "red",
    softWarning: "#ffcc4e12",
    softSuccess: "#74fa7414",
    softRed: "#ff00050d",
    checked: "#009b00",
    semiTransparent: "rgba(0, 0, 0, 0.5)",
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
    [DIMENSIONS.wide]: "18px",
    [DIMENSIONS.low]: "4px",
    [DIMENSIONS.extraSmall]: "2px",
    [DIMENSIONS.none]: "0px",
    30: "30px",
    25: "25px",
    24: "24px",
    20: "20px",
    17: "17px",
    16: "16px",
    15: "15px",
    12: "12px",
    10: "10px",
    3: "3px",
    6: "6px",
    calc: (factor) => `${MIN_SPACING * factor}px`,
  };
  elevation = {
    [DIMENSIONS.none]: "0px 0px 0px",
    [DIMENSIONS.regular]: "0px 4px 8px",
    [DIMENSIONS.high]: "0px 8px 8px",
    little: "0px 15px 20px 0px #000000d4",
    center: "0px 0px 8px 0px #595959e0"
  };
  transform = {
    scale: {
      small: "scale(1.03)",
      mid: "scale(1.25)",
      slightly: "scale(1.02)",
      double: "scale(2)",
      half: "scale(1.5)",
      six: "scale(1.6)",
      extra: "scale(1.75)",
      tiny: "scale(0.75)",
      ["50%"]: "scale(0.5)",
      ["80%"]: "scale(0.8)",
      ["90%"]: "scale(0.9)",
      none: "scale(1)",
      calc: (factor) => `scale(${SCALE_FACTOR * factor})`,
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
      extra: "25px",
      parse2Num: (val = "") => Number(val.replaceAll("px", "")),
      calc: (factor) => `${FONT_SIZE_FACTOR * factor}px`,
    },
  };
  timing = {
    slow: "0.8s",
    mid: "0.5s",
    smooth: "0.35s",
    quick: "0.15s",
    fast: "0.28s",
  };
  animationFunctions = {
    sweet: "cubic-bezier(0, 1.33, 1, 0.97)",
    easy: "ease-in-out"
  }
  transitions = {
    smooth: "all ease-in-out 0.35s",
    quick: "all ease-in 0.15s",
    fast: "all ease-in 0.28s ",
  };
  border = {
    radius: {
      rounded: "8px",
      semiRounded: "4px",
      circle: "100%",
      sharp: "0px",
    },
    none: "0px",
    normal: "1px",
  };
}

export default new Light();
