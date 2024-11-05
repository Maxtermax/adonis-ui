import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div({
  alignItems: "center",
  display: "inline-flex",
  justifyContent: "center",
  minHeight: "75px",
}));
