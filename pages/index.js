import dynamic from "next/dynamic";
import React, { useMemo, useState } from "react";

import Footer from "../src/components/Footer/Footer";
import HeaderCombined from "../src/components/Header/HeaderCombined";
import ListPage from "../src/components/ListPage/ListPage";
import centers from "../src/lib/cityCenters";

import axios from "axios";
import propTypes from "prop-types"; // ES6

import { TypeDataContext } from "../src/lib/typeDataContext";
import { calculateCenter } from "../src/utils/calculateCenter";
import { HEPSI_ID, SEARCH_AT } from "../src/utils/constants.js";

const MapPage = dynamic(() => import("../src/components/MapPage/MapPage"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

const Homepage = ({ fetchedData, cityData, typeData }) => {
  const centerLatLong = calculateCenter(fetchedData);

  const allData = fetchedData?.data;

  const [map, setMap] = useState();

  const [searchAt, setSearchAt] = useState(SEARCH_AT.HARITA);
  const [filter, setFilter] = useState(HEPSI_ID);
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
      map.flyTo([centerLatLong.latitude, centerLatLong.longitude], 7);
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
    (item) => filter === HEPSI_ID || item.typeId === filter
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

  const hasDataObj = typeData?.data?.map((type) => {
    const dataExists = allData?.some((item) => item.typeId === type.id);
    return { typeId: type.id, hasData: dataExists };
  });

  return (
    <div className="mainViewContainerPaper">
      <TypeDataContext.Provider value={typeData}>
        <HeaderCombined
          setSearchAt={setSearchAt}
          searchAt={searchAt}
          filter={filter}
          setFilter={setFilter}
          searchBarVal={searchBarVal}
          setSearchbarVal={setSearchbarVal}
          hasDataObj={hasDataObj}
        />
      </TypeDataContext.Provider>

      {searchAt === SEARCH_AT.HARITA && (
        <TypeDataContext.Provider value={typeData}>
          <MapPage
            searchFilteredData={searchFilteredData}
            districtMap={districtMap}
            setMap={setMap}
            handleLock={handleLock}
            centerLatLong={centerLatLong}
          />
        </TypeDataContext.Provider>
      )}
      {searchAt === SEARCH_AT.LISTE && (
        <TypeDataContext.Provider value={typeData}>
          <ListPage
            data={distFilteredData}
            cityData={cityData}
            districtMap={districtMap}
          />
        </TypeDataContext.Provider>
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

export async function getStaticProps() {
  const fetchedData = await axios.get(
    "https://eczaneapi.afetharita.com/api/locations"
  );

  const cityData = await axios.get(
    "https://eczaneapi.afetharita.com/api/cityWithDistricts"
  );

  const typeData = await axios.get(
    "https://eczaneapi.afetharita.com/api/types"
  );

  return {
    props: {
      fetchedData: fetchedData.data,
      cityData: cityData.data,
      typeData: typeData.data,
    },
    revalidate: 10,
  };
}

Homepage.propTypes = {
  fetchedData: propTypes.object,
  cityData: propTypes.object,
  typeData: propTypes.object,
};

export default Homepage;
