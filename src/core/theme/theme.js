import { THEME } from "constants";
import Dark from "./Dark";
import Light from "./Light";

export default function theme(target) {
  if (target === THEME.LIGHT) return new Light();
  if (target === THEME.DARK) return new Dark();
  return new Light();
}
