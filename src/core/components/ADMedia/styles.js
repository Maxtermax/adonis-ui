import styled from "@emotion/styled";

export const Media = styled.div`
  width: 350px;
  @media screen and ${(props) => props.theme.devices.sm} {
    width: 290px;
  }
`;
