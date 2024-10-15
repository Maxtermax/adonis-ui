import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.calc(2)};
  & .ad-text-title {
    position: relative;
    &:before {
      content: " ";
      display: block;
      background: ${({ theme }) => theme.colors.primary};
      width: 25px;
      height: 8px;
      position: absolute;
      left: calc(50% - 25px / 2);
      top: -14px;
    }
  }
  @media screen and ${(props) => props.theme.devices.md} {
    padding-top: ${({ theme }) => theme.spacing.calc(7)};
    padding-bottom: ${({ theme }) => theme.spacing.calc(7)};
  }
`);
