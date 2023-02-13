import styled from "@emotion/styled";
import { BREAKPOINTS } from "../../utils/styled";
import Others from "./Others";

const SHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
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
    font-size: 2rem;
    max-width: 18.75rem;
    margin-left: 2rem;
  }
  @media ${BREAKPOINTS.LG.min} {
    font-size: 3rem;
  }
`;

const SHeaderRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  @media ${BREAKPOINTS.MD.min} {
    margin-bottom: 3.625rem;
  }
`;

export const Header = () => {
  return (
    <SHeaderRowWrapper>
      <SHeaderWrapper>
        <SImage src="/logo.png" alt="logo" />
        <SLogoText>
          Hastaneler ve <br />
          Eczaneler
        </SLogoText>
      </SHeaderWrapper>
      <Others />
    </SHeaderRowWrapper>
  );
};
