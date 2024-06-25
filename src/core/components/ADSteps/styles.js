import styled from "@emotion/styled";

export const Container = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  min-width: 300px;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  position: relative;
`;

export const Step = styled.div`
  position: relative;
  & .ad-button {
    background: none;
    display: flex;
    flex-direction: column;
  }
  & .ad-button:disabled .ad-steps__subtitle {
    opacity: ${({ theme }) => theme.opacity.middle};
  }
  & .ad-button:disabled .ad-steps__title {
    color: ${({ theme }) => theme.colors.semiTransparent};
  }
  & .ad-button:disabled {
    pointer-events: none;
  }
  &::after {
    background: ${({ theme }) => theme.colors.primary};
    display: ${({ showGuide }) => (showGuide ? "flex" : "none")};
    content: " ";
    height: 1px;
    width: 100%;
    position: absolute;
    right: calc(-100% + ${({ theme }) => theme.spacing.regular});
    top: calc(50% - ${({ theme }) => theme.spacing.medium});
    z-index: -1;
  }
  .ad-steps__title {
    background: ${({ theme }) => theme.colors.silver};
    border-radius: ${({ theme }) => theme.border.radius.rounded};
    color: ${({ theme }) => theme.colors.primary};
    margin: 0px;
    padding: ${({ theme }) => theme.spacing.regular};
    transition: ${({ theme }) => theme.transitions.quick};
    width: 30px;
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.contrast.primary};
    }
  }
  .ad-steps__subtitle {
    margin-top: ${({ theme }) => theme.spacing.medium};
  }
`;

export const Icon = styled.div`
  background-color: ${({ theme, variant }) =>
    ({
      error: theme.colors.error,
      done: theme.colors.checked,
      custom: theme.colors.silver,
    })[variant]};
  border-radius: ${({ theme }) => theme.spacing.regular};
  display: flex;
  padding: ${({ theme }) => theme.spacing[10]};
  width: 30px;
  height: 105px;
  justify-content: center;
  & > svg {
    color: ${({ theme }) => theme.colors.white};
  }
  & .icon__custom {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
