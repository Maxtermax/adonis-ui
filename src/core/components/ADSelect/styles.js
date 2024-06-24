import styled from "@emotion/styled";

const buildVariant = (variant, theme) =>
  ({
    error: theme.colors.red,
    primary: theme.colors.primary,
    warning: theme.colors.warning,
  })[variant];

export const Container = styled.div`
  padding: 0px;
  margin: 0px;
  width: ${({ width }) => width};
  position: relative;
  & ol[role="select"] {
    border-color: ${({ variant, theme }) => buildVariant(variant, theme)};
    background: ${({ theme }) => theme.colors.silver};
  }
  & .ad-selected__helper-text {
    color: ${({ variant, theme }) => buildVariant(variant, theme)};
    position: relative;
    top: -${({ theme }) => theme.spacing.low};
    left: ${({ theme }) => theme.spacing.low};
  }
`;

export const OptionsWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing.regular};
  border: 1px solid ${({ theme, variant }) => buildVariant(variant, theme)};
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-top: ${({ theme, show, variant }) =>
    show ? buildVariant(variant, theme) : "none"};
  overflow: hidden;
  overflow-y: auto;
  max-height: ${({ maxHeight }) => maxHeight};
  &::-webkit-scrollbar {
    ${({ show }) => show ? "": "display:none" }; 
  }
`;

export const Select = styled.ol`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.radius.rounded};
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: inherit;
  overflow: hidden;
`;

export const Option = styled.li`
  align-items: center;
  display: flex;
  height: ${({ show }) => (show ? "45px" : "0px")};
  width: ${({ show }) => (show ? "auto" : "0px")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: ${({ theme }) => theme.transitions.smooth};
  &:hover {
    background: ${({ theme }) => theme.colors.grey};
  }
`;

export const Label = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.regular};
  text-align: left;
  margin: 0px;
  min-height: 45px;
`;

export const OptionContent = styled.button`
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  padding: 0px;
  margin: 0px;
  text-align: left;
  padding: ${({ theme }) => theme.spacing.regular};
  width: 100%;
  height: 100%;
`;
