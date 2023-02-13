import styled from "@emotion/styled";
import { BREAKPOINTS } from "../../utils/styled";

const SHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  @media ${BREAKPOINTS.MD.min} {
    margin-bottom: 3.625rem;
  }
`;

const SImage = styled.img`
  aspect-ratio: auto;
  width: 40px;
  @media ${BREAKPOINTS.MD.min} {
    width: 110px;
  }
`;

const SLogoText = styled.h1`
  font-family: SegoeUI, sans-serif;
  color: #fff;
  font-size: 1rem;
  max-width: 8.75rem;
  margin-left: 0.75rem;

  @media ${BREAKPOINTS.MD.min} {
    font-size: 3rem;
    max-width: 18.75rem;
    margin-left: 2rem;
  }
`;

export const Header = () => {
  return (
    <SHeaderWrapper>
      <SImage src="/logo.png" alt="logo" />
      <SLogoText>
        Hastaneler ve <br />
        Eczaneler
      </SLogoText>
    </SHeaderWrapper>
  );
};
