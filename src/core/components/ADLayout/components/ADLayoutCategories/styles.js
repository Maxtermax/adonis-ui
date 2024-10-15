import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.section`
  display: flex;
  width: 100vw;
  height: 100%;
  gap: ${({ theme }) => theme.spacing.calc(4)};
`);

export const ColLeft = withTheme(styled.div`
  display: flex;
  min-height: 500px;
`);

export const ColRight = withTheme(styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.calc(4)};
  height: 100%;
  min-height: 500px;
  @media screen and ${(props) => props.theme.devices.md} {
    gap: ${({ theme }) => theme.spacing.calc(4)};
  }
`);

