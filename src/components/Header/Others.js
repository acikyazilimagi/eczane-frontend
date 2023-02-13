import styled from "@emotion/styled";
import React, { useState } from "react";
import haritaLogo from "../../icons/afet-harita.svg";
import ioLogo from "../../icons/deprem-io.svg";
import yardimLogo from "../../icons/deprem-yardim.svg";
import { BREAKPOINTS } from "../../utils/styled";

const SOtherWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 10px;
`;

const SOtherTitle = styled.h4`
  font-family: SegoeUi, sans-serif;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  white-space: nowrap;
  display: none;

  @media ${BREAKPOINTS.LG.min} {
    display: block;
  }
`;

const SLogoContainer = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 0.625rem;
  gap: 1.25rem;
  padding: 0.25rem 0.5rem;

  @media ${BREAKPOINTS.MD.min} {
    padding: 0.5rem 1rem;
  }

  & > a {
    background-color: white;
    border-radius: 50%;
  }

  & img {
    width: 2rem;
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    @media ${BREAKPOINTS.MD.min} {
      width: 3.75rem;
    }
  }

  & a:nth-child(3) {
    padding: 0;
  }

  & a:nth-child(3) img {
    scale: 1.1;
  }

  & a:nth-child(3) img:hover {
    scale: 1.2;
  }

  & img:hover {
    scale: 1.1;
  }
`;

const SDescription = styled.div`
  position: absolute;
  top: 6rem;
  right: 0rem;
  background: white;
  padding: 0.625rem;
  border-radius: 0.625rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  z-index: 1;

  & > p {
    font-family: SegoeUI, sans-serif;
  }
`;

const Others = () => {
  const [isHovering, setIsHovering] = useState("");

  const handleMouseOver = (event) => {
    setIsHovering(event.target.id);
  };
  const handleMouseOut = () => {
    setIsHovering("");
  };

  return (
    <SOtherWrapper>
      <SOtherTitle>Yardımcı Siteler:</SOtherTitle>
      <SLogoContainer
        onMouseOver={(event) => handleMouseOver(event)}
        onMouseOut={handleMouseOut}
      >
        <a href="https://afetharita.com/">
          <img id="harita" src={haritaLogo} alt="harita-logo" />
        </a>
        <a href="https://deprem.io/">
          <img id="io" src={ioLogo} alt="deprem-logo" />
        </a>
        <a href="https://depremyardim.com/">
          <img id="yardim" src={yardimLogo} alt="deprem-yardim-logo" />
        </a>
      </SLogoContainer>
      {isHovering === "harita" ? (
        <SDescription>
          <p>Depremzedeleri aramak ve yardım etmek için kullandığımız site.</p>
        </SDescription>
      ) : isHovering === "io" ? (
        <SDescription>
          <p>
            Afetle ilgili çeşitli konularda bilgi almak için kullandığımız web
            sitesi.
          </p>
        </SDescription>
      ) : isHovering === "yardim" ? (
        <SDescription>
          <p>Depremzedelere erzak yardımı için kullandığımız site.</p>
        </SDescription>
      ) : null}
    </SOtherWrapper>
  );
};

export default Others;
