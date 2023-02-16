import React from "react";
import haritaLogo from "../../icons/afet-harita.svg";
import ioLogo from "../../icons/deprem-io.svg";
import yardimLogo from "../../icons/deprem-yardim.svg";
import styles from "./Others.module.scss";

export const Others = () => {
  return (
    <div className={styles.otherWrapper}>
      <h4 className={styles.otherTitle}>Yardımcı Siteler:</h4>
      <div className={styles.logoContainer}>
        <div className={styles.tooltip}>
          <a href="https://afetharita.com/" target="_blank" rel="noreferrer">
            <img
              className={styles.logoImg}
              id="harita"
              src={haritaLogo}
              alt="afet-harita"
              rel="noreferrer"
            />
          </a>
          <span className={styles.tooltiptext}>
            Depremzedeleri aramak ve yardım etmek için kullandığımız site.
          </span>
        </div>
        <div className={styles.tooltip}>
          <a href="https://deprem.io/" target="_blank" rel="noreferrer">
            <img
              className={styles.logoImg}
              id="io"
              src={ioLogo}
              alt="deprem-io"
            />
          </a>
          <span className={styles.tooltiptext}>
            Afetle ilgili çeşitli konularda bilgi almak için kullandığımız web
            sitesi.
          </span>
        </div>
        <div className={styles.tooltip}>
          <a href="https://depremyardim.com/" target="_blank" rel="noreferrer">
            <img
              className={styles.logoImg}
              id="yardim"
              src={yardimLogo}
              alt="deprem-yardim"
            />
          </a>
          <span className={styles.tooltiptext}>
            Afetle ilgili çeşitli konularda bilgi almak için kullandığımız web
            sitesi.
          </span>
        </div>
      </div>
    </div>
  );
};
