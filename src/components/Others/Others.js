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
      imgSrcSet:
        "data:image/svg+xml,%3Csvg width='275' height='275' viewBox='0 0 275 275' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M275 137.5C275 213.439 213.439 275 137.5 275C61.5608 275 0 213.439 0 137.5C0 61.5608 61.5608 0 137.5 0C213.439 0 275 61.5608 275 137.5Z' fill='%23D9D9D9'/%3E%3C/svg%3E",
    },
    {
      key: "deprem-io",
      link: "https://deprem.io/",
      text: "Afetle ilgili çeşitli konularda bilgi almak için kullandığımız web sitesi.",
      imgSrc: ioLogo,
      imgSrcSet:
        "data:image/svg+xml,%3Csvg width='275' height='275' viewBox='0 0 275 275' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M275 137.5C275 213.439 213.439 275 137.5 275C61.5608 275 0 213.439 0 137.5C0 61.5608 61.5608 0 137.5 0C213.439 0 275 61.5608 275 137.5Z' fill='%23D9D9D9'/%3E%3C/svg%3E",
    },
    {
      key: "deprem-yardim",
      link: "https://depremyardim.com/",
      text: "Depremzedelere erzak yardımı için kullandığımız site.",
      imgSrc: yardimLogo,
      imgSrcSet:
        "data:image/svg+xml,%3Csvg width='275' height='275' viewBox='0 0 275 275' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M275 137.5C275 213.439 213.439 275 137.5 275C61.5608 275 0 213.439 0 137.5C0 61.5608 61.5608 0 137.5 0C213.439 0 275 61.5608 275 137.5Z' fill='%23D9D9D9'/%3E%3C/svg%3E",
    },
  ];
  return (
    <div className={styles.otherWrapper}>
      <h1 className={styles.otherTitle}>Yardımcı Siteler:</h1>
      <div className={styles.logoContainer}>
        {otherWebsites.map((website) => (
          <div className={styles.tooltip} key={website.key}>
            <a href={website.link} target="_blank" rel="noreferrer">
              <img
                className={styles.logoImg}
                src={website.imgSrc}
                srcSet={website.imgSrcSet}
                alt={website.key}
                width="48px"
                height="48px"
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
