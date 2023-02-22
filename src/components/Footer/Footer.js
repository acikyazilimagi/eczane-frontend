import PropTypes from "prop-types"; // ES6
import React from "react";
import Block from "../../lib/Block/Block";
import { useWindowSize } from "../../utils/hooks";
import Others from "../Others/Others";
import styles from "./Footer.module.scss";

const Footer = ({
  cityData,
  selectedCity,
  handleChangeCity,
  selectedDist,
  setSelectedDist,
  allData,
  hideDistrictSelector,
}) => {
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
              <div className={`${styles.button} left`}></div>
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
              <div className={`${styles.button} right`}></div>
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
              className={`${styles.cityItem} ${styles.seeAllMobile}`}
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
          </div>
        )}

        <div className={styles.othersWrapper}>
          <Others />
        </div>
      </div>
    </Block>
  );
};
Footer.propTypes = {
  cityData: PropTypes.object,
  selectedCity: PropTypes.number,
  handleChangeCity: PropTypes.func.isRequired,
  selectedDist: PropTypes.number,
  setSelectedDist: PropTypes.func.isRequired,
  allData: PropTypes.array,
  hideDistrictSelector: PropTypes.bool.isRequired,
};

export default Footer;
