import React, { useState } from "react";
import haritaLogo from "../../icons/afet-harita.svg";
import ioLogo from "../../icons/deprem-io.svg";
import yardimLogo from "../../icons/deprem-yardim.svg";
import { useWindowSize } from "../../utils/hooks";
import styles from "./Others.module.scss";

const Others = () => {
  const [isHovering, setIsHovering] = useState("");
  const { isDesktop } = useWindowSize();

  const handleMouseOver = (event) => {
    if (isDesktop) {
      setIsHovering(event.target.id);
    } else {
      setIsHovering("");
    }
  };
  const handleMouseOut = () => {
    setIsHovering("");
  };

  return (
    <div className={styles.otherWrapper}>
      <h4 className={styles.otherTitle}>Yardımcı Siteler:</h4>
      <div
        className={styles.logoContainer}
        onMouseOver={(event) => handleMouseOver(event)}
        onMouseOut={handleMouseOut}
      >
        <a href="https://afetharita.com/" target="_blank" rel="noreferrer">
          <img
            id="harita"
            src={haritaLogo}
            alt="afet-harita"
            rel="noreferrer"
          />
        </a>
        <a href="https://deprem.io/" target="_blank" rel="noreferrer">
          <img id="io" src={ioLogo} alt="deprem-io" />
        </a>
        <a href="https://depremyardim.com/" target="_blank" rel="noreferrer">
          <img id="yardim" src={yardimLogo} alt="deprem-yardim" />
        </a>
      </div>
      {isHovering === "harita" ? (
        <div className={styles.description}>
          <p>Depremzedeleri aramak ve yardım etmek için kullandığımız site.</p>
        </div>
      ) : isHovering === "io" ? (
        <div className={styles.description}>
          <p>
            Afetle ilgili çeşitli konularda bilgi almak için kullandığımız web
            sitesi.
          </p>
        </div>
      ) : isHovering === "yardim" ? (
        <div className={styles.description}>
          <p>Depremzedelere erzak yardımı için kullandığımız site.</p>
        </div>
      ) : null}
    </div>
  );
};

export default Others;
