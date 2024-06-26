import styled from "@emotion/styled";

const medium = ({ md = {} }) => {
  let result = "";
  if (md.rows) {
    result += `
      grid-template-rows: repeat(${md.rows}, 1fr);
  `;
  }
  if (md.cols) {
    result += `
      grid-template-columns: repeat(${md.cols}, 1fr);
    `;
  }
  return result;
};

const cols = (props) => {
  if (typeof props.cols === "string") return props.cols;
  return `repeat(${props.cols}, 1fr)`;
};

const rows = (props) => {
  if (typeof props.rows === "string") return props.rows;
  return `repeat(${props.rows}, 1fr)`;
};

export const Grid = styled.div`
  display: grid;
  justify-items: ${({ justifyCenter }) =>
    justifyCenter ? "center" : "center"};
  align-items: ${({ alignCenter, alignItems = "center" }) => (alignCenter ? "center" : alignItems)};
  grid-template-rows: ${(props) => rows(props)};
  grid-template-columns: ${(props) => cols(props)};
  height: ${({ fullHeight, height = "auto" }) => (fullHeight ? "100%" : height)};
  @media screen and ${(props) => props.theme.devices.sm} {
    ${(props) => medium(props)}
  }
`;
