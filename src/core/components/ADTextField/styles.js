import styled from "@emotion/styled";

const colorMap = (theme, color) =>
  ({
    error: theme.colors.error,
    primary: theme.colors.primary,
    warning: theme.colors.warning,
    success: theme.colors.success,
    blue: theme.colors.blue,
  })[color];

const colorFocusMap = {
  error: "error",
  primary: "blue",
  warning: "warning",
  success: "success",
};

export const Container = styled.div`
  display: flex;
  min-width: 100px;
  flex-direction: row;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.regular};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  position: relative;
  width: 100%;
  .ad-text-field__input-wrapper {
    align-items: center;
    display: flex;
    padding: 0px;
    justify-content: center;
    width: 100%;
  }
  .ad-text-field__input {
    border-color: ${({ theme, color }) => colorMap(theme, color)};
    &:focus {
      border-color: ${({ theme, color }) =>
        colorMap(theme, colorFocusMap[color])};
    }
  }
  .ad-text-field__subtitle {
    color: ${({ theme, color }) => colorMap(theme, color)};
  }
  .label--focus {
    color: ${({ theme, color }) => colorMap(theme, colorFocusMap[color])};
    top: 0px;
    left: 0px;
  }
`;

export const Input = styled.input`
  border: ${({ variant }) => (variant === "outlined" ? 1 : 0)}px solid
    ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.radius.rounded};
  background: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  padding: ${({ theme }) => theme.spacing.low};
  padding-left: ${({ theme }) => theme.spacing.regular};
  padding-right: ${({ theme }) => theme.spacing.regular};
  min-height: 40px;
  outline: none;
  transition: ${({ theme }) => theme.transitions.quick};
  width: 100%;
  &:disabled {
    opacity: 0.5;
  }
`;

export const Label = styled.label`
  color: ${({ theme, color }) => colorMap(theme, color)};
  position: relative;
  top: ${({ icon }) => (icon ? "0px" : "16px")};
  left: ${({ icon }) => (icon ? "0px" : "10px")};
  background: white;
  padding-left: ${({ theme }) => theme.spacing.regular};
  padding-right: ${({ theme }) => theme.spacing.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  transition: ${({ theme }) => theme.transitions.quick};
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  min-width: 40px;
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
