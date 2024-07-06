import styled from "@emotion/styled";

export const Container = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.semiTransparent};
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  & .ad-loader__spinner {
    border: 4px solid ${({ theme }) => theme.colors.contrast.primary};
    border-bottom-color: transparent;
  }
  & .ad-text-body {
    color: ${({ theme }) => theme.colors.contrast.primary};
  }
`;
