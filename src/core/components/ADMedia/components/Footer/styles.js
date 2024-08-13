import { withTheme } from '@emotion/react';
import styled from "@emotion/styled";

export const Sizes = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  left: -10px;
  top: -5px;
  justify-content: flex-start;
`;

export const Discount = withTheme(styled.div`
  align-items: center;
  display: flex;
  position: relative;
  height: 20px;
  right: 0px;
  gap: ${({ theme }) => theme.spacing.low};
  & .discount-percentage {
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    transform: ${({ theme }) => theme.transform.scale["90%"]};
  }
  & .ad-badge.discount-percentage:hover {
    background: ${({ theme }) => theme.colors.red};
  }
`);

export const LeftCol = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  gap: ${(props) => props.theme.spacing.regular};
  width: calc(100% - 10px);
  .ad-text-title,
  .ad-text-body {
    align-items: center;
    display: flex;
    height: 30px;
  }
`);

export const RightCol = withTheme(styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding-right: ${({ theme }) => theme.spacing.low};
  height: 100px;
  .ad-button {
    transform: ${(props) => props.theme.transform.scale.mid};
    @media screen and ${(props) => props.theme.devices.sm} {
      position: relative;
      width: calc(100% - 40px);
      top: ${(props) => props.theme.spacing.regular};
    }
  }
  .ad-tooltip {
    @media screen and ${(props) => props.theme.devices.sm} {
      width: 100%;
    }
  }
  @media screen and ${(props) => props.theme.devices.sm} {
    height: 65px;
    width: calc(100% - ${(props) => props.theme.spacing["12"]});
    margin-left: ${(props) => props.theme.spacing.low};
  }
`);

export const Footer = withTheme(styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.grey};
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.low};
  padding: ${(props) => props.theme.spacing.medium};
  transition: ${(props) => props.theme.transitions.smooth};
  .ad-badge {
    border: 1px solid ${(props) => props.theme.colors.transparent};
  }
`);
