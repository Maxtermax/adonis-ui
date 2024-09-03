import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  align-content: stretch;
  display: grid;
  grid-template-rows: 80px auto 100px;
  height: 100dvh;
`);
