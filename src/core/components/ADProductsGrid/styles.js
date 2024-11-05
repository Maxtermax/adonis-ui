import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.calc(6.25)};
  .ad-card {
    background-color: ${({ theme }) => theme.colors.smoke};
    border: 2px solid ${({ theme }) => theme.colors.smoke};
    gap: ${({ theme }) => theme.spacing.calc(1)};
    width: 100%;
    height: 370px;
    transition: ${({ theme }) => theme.transitions.smooth};
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
  @media screen and ${(props) => props.theme.devices.sm} {
    .ad-card:nth-of-type(odd):last-child {
      grid-column: 1 / -1;
      height: 450px;
      width: calc(100% - 30px);
    }
    .ad-card:nth-of-type(odd):last-child img {
      height: 300px;
    }
  }
  .ad-products-grid__filter-button {
    align-content: center;
    align-self: flex-start;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.border.radius.sharp};
    display: flex;
    text-transform: uppercase;
    width: 160px;
    height: 40px;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.calc(2)};
    position: relative;
    bottom: 8px;
    & .ad-text {
      color: ${({ theme }) => theme.colors.contrast.primary};
    }
    & svg {
      color: ${({ theme }) => theme.colors.contrast.primary};
    }
    @media screen and ${(props) => props.theme.devices.sm} {
      align-self: center;
      bottom: 0px;
    }
  }
  .ad-products-grid__load-button {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing.calc(2)};
    width: 150px;
    text-transform: uppercase;
    & .ad-text {
      color: ${({ theme }) => theme.colors.primary};
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }
    &:hover .ad-text {
      color: ${({ theme }) => theme.colors.contrast.primary};
    }
  }
`);
