import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types"; // ES6
import styles from "./HeaderRow.module.scss";
import SearchBar from "./SearchBar";
import { useTranslation } from "next-i18next";

import { useContext } from "react";
import { TypeDataContext } from "../../lib/typeDataContext";
import { HEPSI_ID, SEARCH_AT } from "../../utils/constants";

const FilterRow = ({ filter, setFilter, hasDataObj }) => {
  const { data: typeData } = useContext(TypeDataContext);
  const { t } = useTranslation();

  const newButtonList = [
    {
      id: 0,
      label: t("common:allBtn"),
      click: () => setFilter(HEPSI_ID),
      selected: filter === HEPSI_ID,
    },
    ...typeData.map((item) => ({
      id: item.id,
      label:
        item.name === "Hastane"
          ? t("common:hospitalBtn")
          : item.name === "Eczane"
          ? t("common:pharmacyBtn")
          : item.name === "Veteriner"
          ? t("common:vetBtn")
          : item.name === "Psikolojik Destek"
          ? t("common:psychologistBtn")
          : "",
      click: () => setFilter(item.id),
      selected: filter === item.id,
      disabled: !hasDataObj.find((data) => data.typeId === item.id)?.hasData,
    })),
  ];

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filterFlex}>
        {newButtonList.map((item) => (
          <button
            key={item?.id?.toString()}
            className={clsx(styles.filterButton, {
              [styles.buttonDisabled]: item.disabled,
              [styles.selected]: item.selected,
            })}
            type="button"
            onClick={item.click}
            disabled={item.disabled || false}
          >
            {item?.label?.split(" ").map((word, i) => (
              <>
                <span key={word}>{word}</span>
                {i !== item?.label.split(" ").length - 1 && <br />}
              </>
            ))}
          </button>
        ))}

        <div className={styles.filterIconWrapper} key="icon">
          <img
            className={styles.filterSvg}
            src="/icons/filter-icon.svg"
            alt="filter-icon"
          />
        </div>
      </div>
    </div>
  );
};

FilterRow.propTypes = {
  filter: PropTypes.number.isRequired,
  setFilter: PropTypes.func.isRequired,
  hasDataObj: PropTypes.array.isRequired,
};

const HeaderRow = ({
  searchAt,
  setSearchAt,
  filter,
  setFilter,
  searchBarVal,
  setSearchbarVal,
  hasDataObj,
}) => {
  const setHarita = () => setSearchAt(SEARCH_AT.HARITA);
  const setListe = () => setSearchAt(SEARCH_AT.LISTE);

  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.flex}>
        <div className={styles.toggleGroup}>
          <button
            className={clsx(styles.searchButton, {
              [styles.selected]: searchAt === SEARCH_AT.HARITA,
            })}
            type="button"
            onClick={setHarita}
          >
            {t("common:mapBtn")}
          </button>
          <button
            className={clsx(styles.searchButton, {
              [styles.selected]: searchAt === SEARCH_AT.LISTE,
            })}
            type="button"
            onClick={setListe}
          >
            {t("common:listBtn")}
          </button>
        </div>
        <SearchBar
          searchBarVal={searchBarVal}
          setSearchBarVal={setSearchbarVal}
        />
      </div>
      <div className={styles.filterNextRowWrapper}>
        <FilterRow
          filter={filter}
          setFilter={setFilter}
          hasDataObj={hasDataObj}
        />
      </div>
    </div>
  );
};

HeaderRow.propTypes = {
  searchAt: PropTypes.string.isRequired,
  setSearchAt: PropTypes.func.isRequired,
  filter: PropTypes.number.isRequired,
  setFilter: PropTypes.func.isRequired,
  searchBarVal: PropTypes.string.isRequired,
  setSearchbarVal: PropTypes.func.isRequired,
  hasDataObj: PropTypes.array.isRequired,
};

export default HeaderRow;
