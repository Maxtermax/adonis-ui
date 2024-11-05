import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  align-items: flex-start;
  display: flex;
  width: 100%;
  margin: 0px auto;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.calc(2)};
  & .ad-product-filter__price {
    width: 100%;
  }
`);
