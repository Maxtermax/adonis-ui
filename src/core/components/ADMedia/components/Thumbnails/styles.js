import { withTheme } from '@emotion/react';
import styled from "@emotion/styled";

export const Image = withTheme(styled.img`
  object-fit: contain;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: ${({ theme, selected = false }) =>
    selected ? theme.opacity.visible : theme.opacity.middle} !important;
`);
