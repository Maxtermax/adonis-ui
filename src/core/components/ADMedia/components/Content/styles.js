import styled from "@emotion/styled";

export const Previews = styled.div`
  position: absolute;
  top: ${(props) => props.theme.spacing.low};
  left: ${(props) => props.theme.spacing.low};
  transition: ${(props) => props.theme.transitions.smooth};
  z-index: 1;
  figure {
    display: flex;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.border.radius.rounded};
    justify-content: space-evenly;
    gap: ${(props) => props.theme.spacing.high};
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.theme.spacing.low};
    position: relative;
  }
  figure img {
    cursor: pointer;
    transition: ${(props) => props.theme.transitions.smooth};
    opacity: ${(props) => props.theme.opacity.middle};
  }
  figure img:hover {
    opacity: ${(props) => props.theme.opacity.visible};
  }
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  cursor: zoom-in;
  display: block;
  height: 240px;
  gap: ${(props) => props.theme.spacing.medium};
  @media screen and ${(props) => props.theme.devices.sm} {
    padding: 0px;
  }
  .main-picture {
    position: relative;
  }
  .main-picture img {
    transform: ${(props) => props.theme.transform.scale.six};
    transition: ${(props) => props.theme.transitions.quick};
    aspect-ratio: 16 / 9;
    width: 100%;
    height: auto;
    object-position: left top;
    object-fit: cover;
    &:hover {
      transform: ${(props) => props.theme.transform.scale.extra};
    }
  }
  &:hover .previews {
    height: 70px;
  }
`;
