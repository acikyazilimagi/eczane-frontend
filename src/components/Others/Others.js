import React from "react";
import { useTranslation } from "next-i18next";

import styles from "./Others.module.scss";

const Others = () => {
  const otherWebsites = [
    {
      key: "afet-harita",
      link: "https://afetharita.com/",
      text: "Depremzedeleri aramak ve yardım etmek için kullandığımız site.",
      imgSrc: "/icons/afet-harita.svg",
    },
    {
      key: "deprem-io",
      link: "https://deprem.io/",
      text: "Afetle ilgili çeşitli konularda bilgi almak için kullandığımız web sitesi.",
      imgSrc: "/icons/deprem-io.svg",
    },
    {
      key: "deprem-yardim",
      link: "https://depremyardim.com/",
      text: "Depremzedelere erzak yardımı için kullandığımız site.",
      imgSrc: "/icons/deprem-yardim.svg",
    },
  ];

  const { t } = useTranslation();

  return (
    <div className={styles.otherWrapper}>
      <h4 className={styles.otherTitle}>{t("common:helperSites")}:</h4>
      <div className={styles.logoContainer}>
        {otherWebsites.map((website) => (
          <div className={styles.tooltip} key={website.key}>
            <a href={website.link} target="_blank" rel="noreferrer">
              <img
                className={styles.logoImg}
                src={website.imgSrc}
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

export default Others;
