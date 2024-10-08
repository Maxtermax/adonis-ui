import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Sizes = withTheme(styled.div`
  align-items: center;
  display: flex;
  position: relative;
  left: 0px;
  top: 0px;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.calc(2)};
  & .ad-button.size-selected {
    background: ${({ theme }) => theme.colors.primary};
  }
  & .ad-button.size-selected .ad-text {
    color: ${({ theme }) => theme.colors.white};
  }
  & .ad-button {
    background: ${({ theme }) => theme.colors.lightSilver};
    min-width: 42px;
    height: 38px;
  }
`);

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
  & .ad-panel.discount-percentage:hover {
    background: ${({ theme }) => theme.colors.red};
  }
`);

export const LeftCol = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  height: 105px;
  gap: ${(props) => props.theme.spacing.regular};
  width: calc(100% - 10px);
  align-items: flex-start;
  justify-content: center;
  .ad-text-title,
  .ad-text-body {
    align-items: center;
    display: flex;
    height: 30px;
  }
  .ad-text-heading {
    font-size: 25px;
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
  background-color: ${(props) => props.theme.colors.smoke};
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  transition: ${(props) => props.theme.transitions.smooth};
  .ad-panel {
    border: 1px solid ${(props) => props.theme.colors.transparent};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10px;
    height: 10px;
  }
`);
