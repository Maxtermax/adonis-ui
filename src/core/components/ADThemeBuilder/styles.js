import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const Content = styled.div`
  height: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
`;


export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  & .ad-card {
    background: ${({ theme }) => theme.colors.white};
    border-left: 1px solid ${({ theme }) => theme.colors.lightSilver};
  }
  & .ad-card-content {
    height: calc(100% - 140px);
  }
`;
