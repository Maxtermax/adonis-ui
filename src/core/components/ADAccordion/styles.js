import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Anchor = styled.a`
  display: flex;
  gap: ${({ theme }) => theme.spacing.regular};
  transition: all 0.35s ease-in-out;
  outline: none;
  height: auto;
  padding-top: 5px;
  padding-bottom: 5px;
  align-items: center;
`;

export const Container = styled.div`
  display: block;
  min-width: 200px;
  width: 100%;
  flex-direction: column;
`;

export const Label = styled.span`
  align-items: center;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.spacing.regular};
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.regular};
  padding: ${({ theme }) => theme.spacing.regular};
  transition: ${({ theme }) => theme.transitions.smooth};
`;

export const Content = styled.div`
  align-items: center;
  background: ${({ theme, inner }) =>
    inner ? theme.colors.white : theme.colors.grey};
  border-radius: ${({ theme }) => theme.spacing.regular};
  border: 1px solid
    ${({ theme, inner }) =>
      inner ? theme.colors.transparent : theme.colors.lightSilver};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: ${({ theme }) => theme.transitions.smooth};
  justify-content: flex-start;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.regular};
  overflow: hidden;
  width: 100%;
`;

export const InnerContent = styled.div`
  display: flex;
  width: 100%;
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.regular};
  & .ad-panel {
    position: relative;
    top: -${({ theme }) => theme.spacing.regular};
  }
`;
