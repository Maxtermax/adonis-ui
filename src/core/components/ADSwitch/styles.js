import styled from "@emotion/styled";

export const Container = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  width: 45px;
  height: 40px;
`;

export const Icons = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Ball = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.radius.circle};
  position: absolute;
  top: -2px;
  transition: ${({ theme }) => theme.transitions.quick};
  transform: ${({ isChecked }) =>
    isChecked ? `translateX(calc(100% - 2px))` : `translateX(-1px)`};
  width: 25px;
  height: 25px;
  &:hover {
    transform: ${({ theme }) => theme.transform.scale.small} ${({
      isChecked,
    }) => (isChecked ? `translateX(calc(100% - 2px))` : `translateX(-1px)`)}
`;

export const Track = styled.div`
  background: ${({ theme }) => theme.colors.silver};
  border-radius: ${({ theme }) => theme.spacing["15"]};
  border: 4px solid;
  transition: ${({ theme }) => theme.transitions.fast};
  position: relative;
  width: 100%;
  height: 20px;
  &:hover {
    background: ${({ theme }) => theme.colors.lightSilver};
  }
`;
