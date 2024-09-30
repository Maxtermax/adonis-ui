import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Media = withTheme(styled.div`
  & > .ad-card {
    border-color: transparent;
    width: 340px;
  }
`);
