import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";

import centers from "../src/lib/cityCenters";
import Footer from "../src/components/Footer/Footer";
import HeaderCombined from "../src/components/Header/HeaderCombined";
import ListPage from "../src/components/ListPage/ListPage";

import axios from "axios";
import propTypes from "prop-types"; // ES6

import {
  CENTER_LAT,
  CENTER_LNG,
  SEARCH_AT,
  FILTER,
} from "../src/utils/constants.js";

const MapPage = dynamic(() => import("../src/components/MapPage/MapPage"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

const Homepage = ({ fetchedData, cityData }) => {
  const allData = fetchedData?.data;

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
    <div className="mainViewContainerPaper">
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

export async function getServerSideProps() {
  const fetchedData = await axios.get(
    "https://eczaneapi.afetharita.com/api/locations"
  );

  const cityData = await axios.get(
    "https://eczaneapi.afetharita.com/api/cityWithDistricts"
  );

  return {
    props: {
      fetchedData: fetchedData.data,
      cityData: cityData.data,
    },
  };
}

Homepage.propTypes = {
  fetchedData: propTypes.object,
  cityData: propTypes.object,
};

export default Homepage;
