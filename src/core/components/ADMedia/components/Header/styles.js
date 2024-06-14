import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  position: absolute;
  right: ${({ theme }) => theme.spacing.regular};
  top: -${({ theme }) => theme.spacing.regular};
  & .ad-badge {
    background-color: ${({ theme }) => theme.colors.red};
    border: none;
  }
  & .ad-text-subtitle {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.sizes.big};
  }
`;
