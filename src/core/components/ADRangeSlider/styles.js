import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
`);

export const Input = withTheme(styled.input`
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  position: relative;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &:focus {
    outline: none;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 30px;
    width: 30px;
    border-radius: ${({ theme }) => theme.border.radius.semiRounded};
    background: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    position: relative;
    bottom: -6px;
  }
  &:first-of-type {
    margin-left: 0px;
    width: calc(100% - 24px);
  }
  &:last-of-type {
    margin-left: 30px;
    width: calc(100% - 24px);
  }
  &:last-of-type::-webkit-slider-thumb {
    bottom: 28px;
  }
`);

export const Label = withTheme(styled.label`
  display: flex;
`);

export const InputWrapper = withTheme(styled.div`
  position: relative;
  width: 100%;
`);

export const LabelWrapper = withTheme(styled.div`
  display: flex;
  justify-content: space-between;
`);

export const SliderTrack = withTheme(styled.div`
  background: ${({ theme }) => theme.colors.smoke};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.radius.semiRounded};
  width: calc(100% - 4px);
  height: 10px;
  translate: 0px 28px;
`);
