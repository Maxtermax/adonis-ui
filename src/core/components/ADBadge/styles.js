import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { SHAPES, DIMENSIONS } from "constants";

const calcPosition = (position = "top-left") =>
  ({
    ["top-left"]: {
      top: "20px",
      left: "-10px",
    },
    ["top-right"]: {
      top: "20px",
      left: "calc(100% - 10px)",
    },
  })[position] ?? "";

const radius = ({ theme, variant }) =>
  ({
    [SHAPES.rounded]: theme.border.radius[SHAPES.rounded],
    [SHAPES.sharp]: theme.border.radius[SHAPES.sharp],
    [SHAPES.circle]: theme.border.radius[SHAPES.circle],
  })[variant] ?? "";

const transform = ({ theme, size }) =>
  ({
    [DIMENSIONS.normal]: theme.transform.scale.normal,
    [DIMENSIONS.small]: theme.transform.scale.tiny,
    [DIMENSIONS.extraSmall]: theme.transform.scale["50%"],
  })[size] ?? "";

export const Badge = withTheme(styled.div`
  display: inline-block;
  position: relative;
`);

export const Content = withTheme(styled.div`
  display: inline-block;
  position: relative;
`);

export const Value = withTheme(styled.span`
  position: absolute;
  bottom: ${({ position = "" }) => calcPosition(position).top};
  left: ${({ position = "" }) => calcPosition(position).left};
  background: red;
  min-width: 20px;
  min-height: 20px;
  border-radius: 100%;
  padding: 2px;
`);
