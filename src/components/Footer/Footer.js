import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/styled";
import "./style.css";

const SIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SLeftIcon = styled.img`
  height: 0.75rem;
  width: 0.75rem;
  @media ${BREAKPOINTS.MD.min} {
    height: 2rem;
    width: 2rem;
  }
  margin: 0 0.5rem;
`;

const SRightIcon = styled(SLeftIcon)`
  transform: rotate(180deg);
`;

const SParagWrapper = styled.div`
  display: flex;
`;
const SParag = styled.p`
  font-family: "SegoeUI";
  font-size: 0.75rem;
  color: white;
`;

export function Footer({
  cityData,
  selectedCity,
  handleChangeCity,
  selectedDist,
  setSelectedDist,
}) {
  console.log(cityData, "city");

  const noCitySelected = !selectedCity;

  const selectedCityData = cityData?.data?.find((a) => a.key === selectedCity);

  const selectedCityDistricts = selectedCityData?.districts;
  console.log(selectedCityData, "selectedCityData");

  const allCities = cityData?.data?.map((item) => item.key);

  return (
    <div className="footer-container">
      <div className="ilce-box">
        <SIconWrapper>
          <SLeftIcon src="/left-icon.svg" />
        </SIconWrapper>
        <div className="ilce-items">
          {noCitySelected && (
            <SParagWrapper>
              <SParag>Şehir Seçiniz</SParag>
            </SParagWrapper>
          )}
          {selectedCityDistricts?.map((item) => (
            <button
              className={
                selectedDist === item.key
                  ? "ilce-item ilce-active"
                  : "ilce-item"
              }
              onClick={() => {
                console.log("click");
                setSelectedDist(item.key);
              }}
              key={item.id}
            >
              {item.key}
            </button>
          ))}
        </div>
        <SIconWrapper>
          <SRightIcon src="/left-icon.svg" />
        </SIconWrapper>
        s
      </div>

      <div className="cities-box">
        {allCities?.map((item) => (
          <button
            className={
              selectedCity === item ? "city-item city-item-active" : "city-item"
            }
            key={item}
            onClick={() => handleChangeCity(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
