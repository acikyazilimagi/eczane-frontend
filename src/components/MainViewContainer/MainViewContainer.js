import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Box, Stack } from "@mui/material";
import axios from "axios";
import L from "leaflet";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Control from "react-leaflet-custom-control";
import { FullscreenControl } from "react-leaflet-fullscreen";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { hospitalIcon, pharmacyIcon } from "../../lib/Icons";
import { debounce } from "../../utils/debounce";
import centers from "../cityCenters";
import { Footer } from "../Footer/Footer";
import { HeaderCombined } from "../Header/HeaderCombined";
import { FILTER, SEARCH_AT } from "../Header/HeaderRow";
import InfoCard from "../InfoCard";
import ListPage from "../ListPage";
import { SButton, SPaper } from "./MainViewController.styled";

const CENTER_LAT = 37.683664;
const CENTER_LNG = 38.322966;
const ZOOM = 6;
const MIN_ZOOM = 7;

const LEFT_TOP_BOUND = [34.325514, 28.939165];
const RIGHT_BOTTOM_BOUND = [41.57364, 42.770324];

const MainViewContaier = () => {
  const [mapRef, setMapRef] = React.useState();
  const [dragActive, setDragActive] = React.useState(true);

  const toggleDragActive = () => {
    setDragActive((active) => !active);
  };

  const [searchAt, setSearchAt] = useState(SEARCH_AT.HARITA);
  const [filter, setFilter] = useState(FILTER.HEPSI);
  const [searchBarVal, setSearchbarVal] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDist, setSelectedDist] = useState(null);

  const [cityData, setCityData] = React.useState(null);
  const [allData, setAllData] = React.useState(null);

  const center = [CENTER_LAT, CENTER_LNG];

  const setIconFn = (type, subType) => {
    let newicon = hospitalIcon;

    if (type === FILTER.HASTANE) {
      newicon = hospitalIcon;
    }
    // else if (type === FILTER.HASTANE && subType === "sahra hastanesi") {
    //   newicon = hospitalIcon2;
    // }
    if (type === FILTER.ECZANE) {
      newicon = pharmacyIcon;
    }
    // else if (type === FILTER.ECZANE && subType === "sahra eczanesi") {
    //   newicon = pharmacyIcon2;
    // }

    if (newicon) return newicon;
  };
  const handleLock = () => {
    if (mapRef.dragging.enabled()) {
      mapRef.dragging.disable();
      mapRef.zoomControl.disable();
      mapRef.scrollWheelZoom.disable();
    } else {
      mapRef.dragging.enable();
      mapRef.zoomControl.enable();
      mapRef.scrollWheelZoom.enable();
    }
  };

  const handleChangeCity = (city) => {
    if (city == null) {
      setSelectedCity(null);
      setSelectedDist(null);
      mapRef.flyTo([CENTER_LAT, CENTER_LNG], 7);
      return;
    }
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
      .catch((err) => {});
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

  const allDistricts = cityData?.data?.map((city) => city.districts).flat();

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

  const onLockClick = () => {
    handleLock();
    toggleDragActive();
  };

  return (
    <SPaper>
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
            zoom={ZOOM} //ZOOM NE KADAR YAKINDA OLMASINI
            minZoom={MIN_ZOOM}
            tap={L.Browser.safari && L.Browser.mobile}
            maxBounds={[LEFT_TOP_BOUND, RIGHT_BOTTOM_BOUND]}
          >
            <Control position="topright">
              <SButton onClick={debounce(onLockClick, 300)}>
                {!dragActive ? <LockIcon /> : <LockOpenIcon />}
              </SButton>
            </Control>
            <Control position="topright">
              <FullscreenControl
                forceSeparateButton
                position="topright"
                content="<img src='./fullscreen.png' class='fullscreen-img'></img>"
                title="Tam Ekran"
              />
            </Control>

            <TileLayer //Bu kısımda değişikliğe gerek yok
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            <MarkerClusterGroup>
              {searchFilteredData?.map((station, index) => {
                return (
                  <Marker
                    icon={setIconFn(station.typeId, station.subTypeId)}
                    key={station.id} //key kısmını da kendi datanıza göre ayarlayın mydaya.id gibi
                    position={[station.latitude, station.longitude]} //Kendi pozisyonunuzu ekleyin buraya stationı değiştirin mydata.adress.latitude mydata.adress.longitude gibi
                  >
                    <Popup>
                      <Stack>
                        <InfoCard
                          key={station.id}
                          item={station}
                          cityData={cityData}
                          allDistricts={allDistricts}
                        />
                      </Stack>
                    </Popup>
                  </Marker>
                );
              })}
            </MarkerClusterGroup>
          </MapContainer>
        </Box>
      )}
      {searchAt === SEARCH_AT.LISTE && (
        <ListPage
          data={distFilteredData}
          cityData={cityData}
          allDistricts={allDistricts}
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
    </SPaper>
  );
};
export default MainViewContaier;
