import styled from "@emotion/styled";

const medium = ({ md }) => {
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

export const Grid = styled.div`
  align-items: center;
  display: grid;
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  @media screen and ${(props) => props.theme.devices.sm} {
    ${(props) => medium(props)}
  }
`;
