import styled from "@emotion/styled";

export const Content = styled.div`
  position: relative;
  display: inline-block;
  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

export const Text = styled.span`
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: calc(100% - 5px);
  right: calc(-100% + 10px);
  transition: opacity 0.3s;
  visibility: hidden;
  opacity: 0;
  &::after {
    content: " ";
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;
