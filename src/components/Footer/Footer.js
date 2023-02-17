import PropTypes from "prop-types"; // ES6
import React from "react";
import { Block } from "../../lib/Block/Block";
import { useWindowSize } from "../../utils/hooks";
import { Others } from "../Others/Others";
import styles from "./Footer.module.scss";

export function Footer({
  cityData,
  selectedCity,
  handleChangeCity,
  selectedDist,
  setSelectedDist,
  allData,
  hideDistrictSelector,
}) {
  const { isDesktop } = useWindowSize();

  const noCitySelected = !selectedCity;

  const selectedCityData = cityData?.data?.find((a) => a.id === selectedCity);

  const selectedCityDistricts = selectedCityData?.districts;

  const allCities = cityData?.data;

  const cityDistrictWithData = selectedCityDistricts
    ?.filter((dist) => {
      if (!selectedCityDistricts) return true;
      const distData = allData?.find((d) => d.districtId === dist.id);
      return !!distData;
    })
    .map((i) => i.key);

  return (
    <Block>
      <div className={styles.footerContainer}>
        {!hideDistrictSelector && (
          <div className={styles.ilceBox}>
            <div className={styles.IconWrapper}>
              <div className={styles.button}>
                <img
                  className={styles.leftIcon}
                  src="/left-icon.svg"
                  alt="sol-ok"
                />
              </div>
            </div>
            <div className={styles.ilceItems}>
              {noCitySelected && (
                <div className={styles.paragWrapper}>
                  <p className={styles.parag}>Şehir Seçiniz</p>
                </div>
              )}
              {selectedCityDistricts?.map((item) => (
                <button
                  type="button"
                  className={
                    cityDistrictWithData.indexOf(item.key) === -1
                      ? `${styles.ilceItem} ${styles.ilceDisabled}`
                      : selectedDist === item.id
                      ? `${styles.ilceItem} ${styles.ilceActive}`
                      : styles.ilceItem
                  }
                  onClick={() => {
                    setSelectedDist(item.id);
                  }}
                  key={item.id}
                  disabled={cityDistrictWithData.indexOf(item.key) === -1}
                >
                  {item.key}
                </button>
              ))}
            </div>
            <div className={styles.IconWrapper}>
              <div className={styles.button}>
                <img
                  className={styles.rightIcon}
                  src="/left-icon.svg"
                  alt="sol-ok"
                />
              </div>
            </div>
          </div>
        )}

        <div className={styles.citiesBox}>
          {allCities?.map((item) => (
            <button
              type="button"
              className={
                selectedCity === item.id
                  ? `${styles.cityItem} ${styles.cityItemActive}`
                  : styles.cityItem
              }
              key={item.id}
              onClick={() => handleChangeCity(item)}
            >
              {item.key}
            </button>
          ))}
          {!isDesktop && (
            <button
              type="button"
              className={`{styles.cityItem} ${styles.seeAllMobile}`}
              onClick={() => handleChangeCity(null)}
            >
              Tümünü Gör
            </button>
          )}
        </div>
        {isDesktop && (
          <div
            className={styles.seeAllWrapper}
            onClick={() => handleChangeCity(null)}
          >
            <button
              type="button"
              className={`${styles.cityItem} ${styles.seeAllButton}`}
            >
              Tümünü Gör
            </button>
            <img
              className={styles.showAllIcon}
              src="/show-all-icon.svg"
              alt="hepsini-gör-icon"
            />
          </div>
        )}

        <div className={styles.othersWrapper}>
          <Others />
        </div>
      </div>
    </Block>
  );
}
Footer.propTypes = {
  cityData: PropTypes.object,
  selectedCity: PropTypes.string.isRequired,
  handleChangeCity: PropTypes.func.isRequired,
  selectedDist: PropTypes.string.isRequired,
  setSelectedDist: PropTypes.func.isRequired,
  allData: PropTypes.array.isRequired,
  hideDistrictSelector: PropTypes.bool.isRequired,
};
