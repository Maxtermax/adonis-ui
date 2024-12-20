import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

const medium = ({ md = {} }) => {
  let result = "";
  if (md.rows) {
    result += `
      grid-template-rows: repeat(${md.rows}, 1fr);
  `;
  }
  if (md.cols) {
    result += `
      grid-template-columns: repeat(${md.cols}, 1fr);
    `;
  }
  if (md.gap) {
    result += `
      gap: ${md.gap};
    `;
  }
  return result;
};

const cols = (props) => {
  if (typeof props.cols === "string") return props.cols;
  return `repeat(${props.cols}, 1fr)`;
};

const rows = (props) => {
  if (typeof props.rows === "string") return props.rows;
  return `repeat(${props.rows}, 1fr)`;
};

export const Grid = withTheme(
  styled.div(
    ({
      alignCenter,
      alignItems = "center",
      justifyItems = "center",
      fullWidth,
      fullHeight,
      height = "auto",
      width = "auto",
      sx = {},
      gap = 1,
      lg,
      sm,
      md,
      theme,
      ...props
    }) => ({
      display: "grid",
      justifyItems,
      alignItems: alignCenter ? "center" : alignItems,
      gridTemplateRows: rows(props),
      gridTemplateColumns: cols(props),
      gap: theme.spacing.calc(gap),
      height: fullHeight ? "100%" : height,
      width: fullWidth ? "100%" : width,
      ...sx,
      [`@media screen and (min-width: ${theme.breakpoints.lg})`]: lg ? lg : {},
      [`@media screen and (max-width: ${theme.breakpoints.lg})`]: lg ? lg : {},
      [`@media screen and (max-width: ${theme.breakpoints.md})`]: md ? md : {},
      [`@media screen and (max-width: ${theme.breakpoints.sm})`]: sm ? sm : {},
    }),
  ),
);

export const Col = withTheme(
  styled.div(({ align, lg, sm, md, sx= {}, theme }) => ({
    display: "flex",
    width: "100%",
    gap: theme.spacing.medium,
    justifyContent: align === "start" ? "flex-start" : "center",
    minHeight: "10px",
    [`@media screen and (min-width: ${theme.breakpoints.lg})`]: lg ? lg : {},
    [`@media screen and (max-width: ${theme.breakpoints.lg})`]: lg ? lg : {},
    [`@media screen and (max-width: ${theme.breakpoints.md})`]: md ? md : {},
    [`@media screen and (max-width: ${theme.breakpoints.sm})`]: sm ? sm : {},
    ...sx,
  })),
);
