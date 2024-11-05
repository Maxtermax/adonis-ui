import styled from "@emotion/styled";

export const Content = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.calc(4)};
  height: 100%;
`;

const calcXClosePosition = ({ variant, width }) =>
  ({
    left: "left: -100%",
    right: `left: calc(100% + ${width})`,
    bottom: "left: 0px",
    top: "left: 0px;",
  })[variant];

const calcXOpenPosition = ({ variant, width }) =>
  ({
    left: "left: 0px;",
    right: `left: calc(100% - ${width});`,
    bottom: "left: 0px;",
    top: "left: 0px;",
  })[variant];

const calcYOpenPosition = ({ variant }) =>
  ({
    left: "top: 0px;",
    right: "top: 0px;",
    bottom: `top: 0px`,
    top: `top: 0px`,
  })[variant];

const calcYClosePosition = ({ variant }) =>
  ({
    left: "top: 0px;",
    right: "top: 0px;",
    bottom: `top: 100%`,
    top: `top: -100%`,
  })[variant];

export const Wrapper = styled.div`
  display: flex;
  .appear {
    opacity: 1;
    visibility: visible;
    width: 100%;
    height: 100%;
  }
  .disappear {
    opacity: 0;
    visibility: hidden;
    width: 0px;
    height: 0px;
  }
  .ad-drawer__container--open {
    ${calcXOpenPosition};
    ${calcYOpenPosition};
    z-index: 2;
  }
  .ad-drawer__container--close {
    ${calcXClosePosition};
    ${calcYClosePosition};
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 10px 0px 15px 0px #0000002e;
  display: flex;
  position: fixed;
  min-width: 300px;
  width: ${({ fullWidth, width }) => (fullWidth ? "100%" : width)};
  height: 100%;
  transition: ${({ theme }) => theme.transitions.smooth};
  & .ad-drawer__panel {
    padding: 0px;
    width: 100%;
  }
`;

export const Overlay = styled.div`
  background-color: ${({ theme }) => theme.colors.semiTransparent};
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2;
`;
