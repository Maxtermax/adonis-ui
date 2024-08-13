import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Media = withTheme(styled.div`
  background-color: ${({ theme }) => theme?.colors?.primary};
  color: ${({ theme }) => theme?.colors?.blue};
  border: 1px solid red;
  width: 350px;
`);
