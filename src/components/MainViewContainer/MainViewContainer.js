import React, { useMemo, useState } from "react";
import "react-leaflet-fullscreen/dist/styles.css";
import centers from "../../lib/cityCenters";
import { useFetch } from "../../utils/hooks";
import { Footer } from "../Footer/Footer";
import { HeaderCombined } from "../Header/HeaderCombined";
import { FILTER, SEARCH_AT } from "../Header/HeaderRow";
import ListPage from "../ListPage/ListPage";
import { CENTER_LAT, CENTER_LNG, MapPage } from "../MapPage/MapPage";
import styles from "./MainViewContainer.module.scss";

const MainViewContaier = () => {
  const { data: fetchedData } = useFetch(
    "https://eczaneapi.afetharita.com/api/locations"
  );
  const allData = fetchedData?.data;
  const { data: cityData } = useFetch(
    "https://eczaneapi.afetharita.com/api/cityWithDistricts"
  );

  const [map, setMap] = useState();

  const [searchAt, setSearchAt] = useState(SEARCH_AT.HARITA);
  const [filter, setFilter] = useState(FILTER.HEPSI);
  const [searchBarVal, setSearchbarVal] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDist, setSelectedDist] = useState(null);

  const handleLock = () => {
    if (map.dragging.enabled()) {
      map.dragging.disable();
      map.zoomControl.disable();
      map.scrollWheelZoom.disable();
    } else {
      map.dragging.enable();
      map.zoomControl.enable();
      map.scrollWheelZoom.enable();
    }
  };

  const handleChangeCity = (city) => {
    if (city == null) {
      setSelectedCity(null);
      setSelectedDist(null);
      map.flyTo([CENTER_LAT, CENTER_LNG], 7);
      return;
    }
    const lat = centers[city.key]?.lat;
    const lng = centers[city.key]?.lng;
    map.flyTo([lat, lng], 12);
    setSelectedCity(city.id);
    setSelectedDist(null);
  };

  const districtMap = useMemo(() => {
    const theMap = new Map();
    const allDistricts = cityData?.data?.map((city) => city.districts).flat();
    allDistricts?.forEach((district) => {
      theMap.set(district.id, district.key);
    });
    return theMap;
  }, [cityData]);

  if (allData === null) {
    return (
      <div className="loading-container">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  const typeFilteredData = allData?.filter(
    (item) => filter === FILTER.HEPSI || item.typeId === filter
  );
  const searchFilteredData = typeFilteredData?.filter(
    (item) =>
      item.name.toLowerCase().includes(searchBarVal.toLowerCase()) ||
      item.address.toLowerCase().includes(searchBarVal.toLowerCase())
  );
  const cityFilteredData =
    selectedCity == null
      ? searchFilteredData
      : searchFilteredData?.filter((item) => item.cityId === selectedCity);

  const distFilteredData =
    selectedDist == null
      ? cityFilteredData
      : cityFilteredData?.filter((item) => item.districtId === selectedDist);

  const hasVetData = allData?.some((item) => item.typeId === FILTER.VETERINER);

  return (
    <div className={styles.mainViewContainerPaper}>
      <HeaderCombined
        setSearchAt={setSearchAt}
        searchAt={searchAt}
        filter={filter}
        setFilter={setFilter}
        searchBarVal={searchBarVal}
        setSearchbarVal={setSearchbarVal}
        hasVetData={!!hasVetData}
      />

      {searchAt === SEARCH_AT.HARITA && (
        <MapPage
          searchFilteredData={searchFilteredData}
          districtMap={districtMap}
          setMap={setMap}
          handleLock={handleLock}
        />
      )}
      {searchAt === SEARCH_AT.LISTE && (
        <ListPage
          data={distFilteredData}
          cityData={cityData}
          districtMap={districtMap}
        />
      )}

      <Footer
        cityData={cityData}
        selectedCity={selectedCity}
        handleChangeCity={handleChangeCity}
        selectedDist={selectedDist}
        setSelectedDist={setSelectedDist}
        allData={allData}
        hideDistrictSelector={searchAt === SEARCH_AT.HARITA}
      />
    </div>
  );
};
export default MainViewContaier;
