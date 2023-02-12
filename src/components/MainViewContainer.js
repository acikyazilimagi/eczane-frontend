import { Box, Paper, Stack } from "@mui/material";
import axios from "axios";
import L from "leaflet";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import centers from "./cityCenters";
import DownButton from "./DownButton";
import { Footer } from "./Footer/Footer";
import { HeaderCombined } from "./Header/HeaderCombined";
import { FILTER, SEARCH_AT } from "./Header/HeaderRow";
import InfoCard from "./InfoCard";
import ListPage from "./ListPage";
import UpButton from "./UpButton";

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
    const lat = centers[city]?.lat;
    const lng = centers[city]?.lng;
    mapRef.flyTo([lat, lng], 12);
    setSelectedCity(city);
    setSelectedDist(null);
  };

  useEffect(() => {
    axios
      .get("https://eczaneapi.afetharita.com/api")
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
      : searchFilteredData?.filter(
          (item) => item.city.toLowerCase() === selectedCity.toLowerCase()
        );

  const distFilteredData =
    selectedDist == null
      ? cityFilteredData
      : cityFilteredData?.filter(
          (item) => item.district.toLowerCase() === selectedDist.toLowerCase()
        );

  return (
    <Paper
      id="fullheight"
      sx={{ bgcolor: "#182151", height: "100%", padding: "0px" }}
      variant="outlined"
    >
      <UpButton visible={visible}></UpButton>
      <DownButton visible={!visible}></DownButton>
      <HeaderCombined
        setSearchAt={setSearchAt}
        searchAt={searchAt}
        filter={filter}
        setFilter={setFilter}
        searchBarVal={searchBarVal}
        setSearchbarVal={setSearchbarVal}
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
      />
    </Paper>
  );
};
export default MainViewContaier;
