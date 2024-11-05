import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  display: flex;
  margin: 0px auto;
  width: 100%;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.calc(2)};
`);
