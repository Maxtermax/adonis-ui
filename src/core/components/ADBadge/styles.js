import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { POSITIONS } from "constants";

const calcPosition = (position = "top-left") =>
  ({
    [POSITIONS.topLeft]: {
      top: "20px",
      left: "-10px",
    },
    [POSITIONS.topRight]: {
      top: "20px",
      left: "calc(100% - 10px)",
    },
    [POSITIONS.bottomRight]: {
      top: "-10px",
      left: "calc(100% - 10px)",
    },
    [POSITIONS.bottomLeft]: {
      top: "-10px",
      left: "-10px",
    },
  })[position] ?? "";

export const Badge = withTheme(styled.div`
  display: inline-block;
  position: relative;
  ${({ sx = {} }) => ({ ...sx })};
`);

export const Content = withTheme(styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`);

export const Value = withTheme(styled.span`
  position: absolute;
  bottom: ${({ position = "", bottom }) => bottom || calcPosition(position).top};
  left: ${({ position = "", left }) => left || calcPosition(position).left};
  background: ${({ theme }) => theme.colors.red};
  width: 20px;
  height: 20px;
  border-radius: ${({ theme }) => theme.border.radius.rounded};
  padding: ${({ theme }) => theme.spacing.calc(1)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.contrast.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  transform: ${({ theme }) => theme.transform.scale["80%"]};
`);
