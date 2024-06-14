import styled from "@emotion/styled";

export const Image = styled.img`
  object-fit: contain;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: ${({ theme, selected = false }) =>
    selected ? theme.opacity.visible : theme.opacity.middle} !important;
`;
