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
  if (typeof props.cols === "string") {
    return props.cols;
  }
  return `repeat(${(props) => props.cols}, 1fr)`;
};

const rows = (props) => {
  if (typeof props.rows === "string") {
    return props.rows;
  }
  return `repeat(${(props) => props.rows}, 1fr)`;
};

export const Grid = styled.div`
  align-items: center;
  display: grid;
  grid-template-rows: ${(props) => rows(props)};
  grid-template-columns: ${(props) => cols(props)};
  @media screen and ${(props) => props.theme.devices.sm} {
    ${(props) => medium(props)}
  }
`;
