import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  gap: 10px;
  & .ad-button:disabled > svg {
    opacity: 0.5;
  }
`;

export const Tabs = styled.ul`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled.li`
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.lightSilver};
  border-bottom: ${({ theme }) => theme.spacing.xs} solid
    ${({ theme, isSelected }) => isSelected ? theme.colors.primary : theme.colors.lightSilver};
  display: flex;
  min-width: 150px;
  height: 100%;
  margin: 0px;
  padding: 0px;
  padding-left: ${({ theme }) => theme.spacing.regular};
  padding-right: ${({ theme }) => theme.spacing.regular};
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.quick};
  position: relative;
  top: -${({ theme }) => theme.spacing.xs};
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const TabWrapper = styled.div`
  display: flex;
`;
