import { Box, Stack } from "@mui/material";
import axios from "axios";
import L from "leaflet";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import styled from "styled-components";
import hospitalIcon2Svg from "../icons/hospital-marker-2.png";
import hospitalIconSvg from "../icons/hospital-marker.png";
import pharmacyIcon2Svg from "../icons/pharmacy-marker-2.png";
import pharmacyIconSvg from "../icons/pharmacy-marker.png";
import { BREAKPOINTS } from "../utils/styled";
import centers from "./cityCenters";
import DownButton from "./DownButton";
import { Footer } from "./Footer/Footer";
import { HeaderCombined } from "./Header/HeaderCombined";
import { FILTER, SEARCH_AT } from "./Header/HeaderRow";
import InfoCard from "./InfoCard";
import ListPage from "./ListPage";
import UpButton from "./UpButton";

const SPaper = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #182151;
  margin-bottom: 1.5rem;
  @media ${BREAKPOINTS.MD.min} {
    margin-bottom: 3rem;
  }
`;

const MainViewContaier = () => {
  const [visible, setVisible] = useState(false);
  const [mapRef, setMapRef] = React.useState();

  const [searchAt, setSearchAt] = useState(SEARCH_AT.HARITA);
  const [filter, setFilter] = useState(FILTER.HEPSI);
  const [searchBarVal, setSearchbarVal] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDist, setSelectedDist] = useState(null);

  const [cityData, setCityData] = React.useState(null);

  const [allData, setAllData] = React.useState(null);

  const center = [37.683664, 38.322966];
  const zoom = 7;

  const hospitalIcon = L.icon({
    iconSize: [32, 42],
    iconAnchor: [32, 64],
    shadowUrl: null,
    shadowSize: null, // size of the shadow
    shadowAnchor: null, // the same for the shadow
    iconUrl: hospitalIconSvg,
  });

  const hospitalIcon2 = L.icon({
    iconSize: [32, 42],
    iconAnchor: [32, 64],
    shadowUrl: null,
    shadowSize: null, // size of the shadow
    shadowAnchor: null, // the same for the shadow
    iconUrl: hospitalIcon2Svg,
  });

  const pharmacyIcon = L.icon({
    iconSize: [32, 42],
    iconAnchor: [32, 64],
    shadowUrl: null,
    shadowSize: null, // size of the shadow
    shadowAnchor: null, // the same for the shadow
    iconUrl: pharmacyIconSvg,
  });

  const pharmacyIcon2 = L.icon({
    iconSize: [32, 42],
    iconAnchor: [32, 64],
    shadowUrl: null,
    shadowSize: null, // size of the shadow
    shadowAnchor: null, // the same for the shadow
    iconUrl: pharmacyIcon2Svg,
  });

  const setIconFn = (type, subType) => {
    let newicon = hospitalIcon;

    if (type === "hastane" && subType === "genel") {
      newicon = hospitalIcon;
    } else if (type === "hastane" && subType === "sahra hastanesi") {
      newicon = hospitalIcon2;
    }
    if (type === "eczane" && subType === "genel") {
      newicon = pharmacyIcon;
    } else if (type === "eczane" && subType === "sahra eczanesi") {
      newicon = pharmacyIcon2;
    }

    if (newicon) return newicon;
  };
  const toggleVisible = (event) => {
    const scrolled = document.body.scrollTop;
    if (scrolled > 480) {
      setVisible(true);
    } else if (scrolled <= 480) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);

  const handleChangeCity = (city) => {
    const lat = centers[city.key]?.lat;
    const lng = centers[city.key]?.lng;
    mapRef.flyTo([lat, lng], 12);
    setSelectedCity(city.id);
    setSelectedDist(null);
  };

  useEffect(() => {
    axios
      .get("https://eczaneapi.afetharita.com/api/locations")
      .then((response) => {
        setAllData(response.data?.data);
      })
      .catch((err) => {
        //setError(err)
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://eczaneapi.afetharita.com/api/cityWithDistricts ")
      .then((response) => {
        setCityData(response.data);
      })
      .catch((err) => {});
  }, []);

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
    ); //LOADBAR EKLE
  }

  const typeFilteredData = allData?.filter(
    (item) => filter === FILTER.HEPSI || item.type === filter
  );

  const searchFilteredData = typeFilteredData?.filter(
    (item) =>
      item.name.toLowerCase().includes(searchBarVal.toLowerCase()) ||
      item.address.toLowerCase().includes(searchBarVal.toLowerCase()) ||
      item.district.toLowerCase().includes(searchBarVal.toLowerCase())
  );

  const cityFilteredData =
    selectedCity == null
      ? searchFilteredData
      : searchFilteredData?.filter((item) => item.cityId === selectedCity);

  const distFilteredData =
    selectedDist == null
      ? cityFilteredData
      : cityFilteredData?.filter((item) => item.districtId === selectedDist);

  const hasVetData = allData?.some((item) => item.type === FILTER.VETERINER);

  return (
    <SPaper>
      <UpButton visible={visible}></UpButton>
      <DownButton visible={!visible}></DownButton>
      <HeaderCombined
        setSearchAt={setSearchAt}
        searchAt={searchAt}
        filter={filter}
        setFilter={setFilter}
        searchBarVal={searchBarVal}
        setSearchbarVal={setSearchbarVal}
        hasVetData={hasVetData}
      />

      {searchAt === SEARCH_AT.HARITA && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            height: "500px",
            borderRadius: "17px",
            position: "relative",
          }}
        >
          <MapContainer
            whenCreated={setMapRef}
            className="hazir-map" //class adı kendinize göre ayarlayabilirsiniz isterseniz
            center={center} //CENTER BILGINIZ NEREDE İSE ORAYA KOYUNUZ
            zoom={zoom} //ZOOM NE KADAR YAKINDA OLMASINI
            maxZoom={17}
            tap={L.Browser.safari && L.Browser.mobile}
            //maxZoomu kendinize göre ayarlayın
          >
            <TileLayer //Bu kısımda değişikliğe gerek yok
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            <MarkerClusterGroup>
              {searchFilteredData?.map((station, index) => {
                return (
                  <Marker
                    icon={setIconFn(
                      station.type?.toLowerCase(),
                      station.subType?.toLowerCase()
                    )}
                    //icon={station.type.toLowerCase() === 'hastane' ? hospitalIcon : pharmacyIcon}
                    key={station.id} //key kısmını da kendi datanıza göre ayarlayın mydaya.id gibi
                    position={[station.latitude, station.longitude]} //Kendi pozisyonunuzu ekleyin buraya stationı değiştirin mydata.adress.latitude mydata.adress.longitude gibi
                  >
                    <Popup>
                      <Stack>
                        <InfoCard item={station} key={index} index={index} />
                      </Stack>
                    </Popup>
                  </Marker>
                );
              })}
            </MarkerClusterGroup>
          </MapContainer>
        </Box>
      )}
      {searchAt === SEARCH_AT.LISTE && <ListPage data={distFilteredData} />}

      <Footer
        cityData={cityData}
        selectedCity={selectedCity}
        handleChangeCity={handleChangeCity}
        selectedDist={selectedDist}
        setSelectedDist={setSelectedDist}
        allData={allData}
      />
    </SPaper>
  );
};
export default MainViewContaier;
