import React from "react";
import haritaLogo from "../../icons/afet-harita.svg";
import ioLogo from "../../icons/deprem_io.svg";
import yardimLogo from "../../icons/deprem-yardim.svg";
import styles from "./Others.module.scss";

export const Others = () => {
  const otherWebsites = [
    {
      key: "afet-harita",
      link: "https://afetharita.com/",
      text: "Depremzedeleri aramak ve yardım etmek için kullandığımız site.",
      imgSrc: haritaLogo,
    },
    {
      key: "deprem-io",
      link: "https://deprem.io/",
      text: "Afetle ilgili çeşitli konularda bilgi almak için kullandığımız web sitesi.",
      imgSrc: ioLogo,
    },
    {
      key: "deprem-yardim",
      link: "https://depremyardim.com/",
      text: "Depremzedelere erzak yardımı için kullandığımız site.",
      imgSrc: yardimLogo,
    },
  ];
  return (
    <div className={styles.otherWrapper}>
      <h4 className={styles.otherTitle}>Yardımcı Siteler:</h4>
      <div className={styles.logoContainer}>
        {otherWebsites.map((website) => (
          <div className={styles.tooltip} key={website.key}>
            <a href={website.link} target="_blank" rel="noreferrer">
              <img
                className={styles.logoImg}
                src={website.imgSrc}
                alt={website.key}
                rel="noreferrer"
              />
            </a>
            <span className={styles.tooltiptext}>{website.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
