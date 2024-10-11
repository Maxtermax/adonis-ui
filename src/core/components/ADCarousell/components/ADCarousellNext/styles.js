import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

export const LoaderWrapper = withTheme(styled.div`
  padding: ${({ theme }) => theme.spacing.calc(1)};
`);
