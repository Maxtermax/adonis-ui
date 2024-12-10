import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  align-items: start;
  display: grid;
  grid-template-rows: 40px auto 400px;
  height: 100dvh;
`);
