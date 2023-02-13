import styled from "@emotion/styled";
import { BREAKPOINTS } from "../../utils/styled";
import Others from "./Others";

const SHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SImage = styled.img`
  aspect-ratio: auto;
  height: 40px;
  @media ${BREAKPOINTS.MD.min} {
    height: 86px;
  }
`;

const SLogoText = styled.h1`
  font-family: SegoeUI, sans-serif;
  color: #fff;
  font-size: 1.5rem;
  max-width: 8.75rem;
  margin-left: 0.75rem;

  @media ${BREAKPOINTS.MD.min} {
    font-size: 3rem;
    max-width: 18.75rem;
    margin-left: 2rem;
  }
`;

const SHeaderRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  @media ${BREAKPOINTS.MD.min} {
    margin-bottom: 2.5rem;
  }
`;

export const Header = () => {
  return (
    <SHeaderRowWrapper>
      <SHeaderWrapper>
        <SImage src="/logo.png" alt="logo" />
        <SLogoText>Afet Yardım</SLogoText>
      </SHeaderWrapper>
      <Others />
    </SHeaderRowWrapper>
  );
};
