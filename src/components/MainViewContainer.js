import { Box, Button, Grid, Paper, Stack } from "@mui/material";
import axios from "axios";
import L from "leaflet";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import centers from "./cityCenters";
import DownButton from "./DownButton";
import { HeaderCombined } from "./Header/HeaderCombined";
import { FILTER, SEARCH_AT } from "./Header/HeaderRow";
import InfoCard from "./InfoCard";
import ListPage from "./ListPage";
import UpButton from "./UpButton";
import hospitalIconSvg from '../icons/hospital.svg'
import pharmacyIconSvg from '../icons/pharmacy.svg'


const MainViewContaier = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [mapRef, setMapRef] = React.useState();

  const [searchAt, setSearchAt] = useState(SEARCH_AT.HARITA);
  const [filter, setFilter] = useState(FILTER.HEPSI);

  const [citydata, setCityData] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [allData, setAllData] = React.useState(null);

  const center = [37.683664, 38.322966];
  const zoom = 7;


  const hospitalIcon = L.icon({
    //iconRetinaUrl: hospitalIconSvg,
    iconSize: [32, 32],
    iconAnchor: [32, 64],
    shadowUrl: null,
    shadowSize: null,// size of the shadow
    shadowAnchor: null,  // the same for the shadow
    iconUrl: hospitalIconSvg,
  });

  const pharmacyIcon = L.icon({
    // iconRetinaUrl: pharmacyIconSvg,
    iconSize: [32, 32],
    iconAnchor: [32, 64],
    shadowUrl: null,
    shadowSize: null, // size of the shadow
    shadowAnchor: null,  // the same for the shadow
    iconUrl: pharmacyIconSvg,
  });


  const toggleVisible = (event) => {
    const scrolled = document.body.scrollTop;
    if (scrolled > 480) {
      setVisible(true);
    } else if (scrolled <= 480) {
      setVisible(false);
    }
  };
  const toggleVisible1 = (event) => {
    const scrolled = document.body.scrollTop;
    if (scrolled < 480) {
      setVisible1(true);
    } else if (scrolled >= 480) {
      setVisible1(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  window.addEventListener("scroll", toggleVisible1);

  const handleChangeCity = (city) => {
    const lat = centers[city]?.lat;
    const lng = centers[city]?.lng;
    mapRef.flyTo([lat, lng], 12);
  };

  useEffect(() => {
    if (filter === FILTER.HEPSI) {
      setData(allData);
    } else {
      const filteredData = allData.filter((item) => item.type === filter);
      setData(filteredData);
    }
  }, [filter]);

  useEffect(() => {
    axios
      .get("https://eczaneapi.afetharita.com/api")
      .then((response) => {
        setData(response.data?.data);
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
      .catch((err) => { });
  }, []);

  if (data === null) {
    return <h2>Loading </h2>; //LOADBAR EKLE
  }

  return (
    <Paper
      id="fullheight"
      sx={{ bgcolor: "#182151", height: "100%", padding: "0px" }}
      variant="outlined"
    >
      <UpButton visible={visible}></UpButton>
      <DownButton visible={visible1}></DownButton>
      <HeaderCombined
        setSearchAt={setSearchAt}
        searchAt={searchAt}
        filter={filter}
        setFilter={setFilter}
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
              {data?.map((station, index) => {
                return (
                  <Marker
                    icon={station.type.toLowerCase() === 'hastane' ? hospitalIcon : pharmacyIcon}
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
      {searchAt === SEARCH_AT.LISTE && <ListPage data={data} />}

      <Box
        sx={{
          flexGrow: 1,
          marginTop: "30px",
          height: "auto",
          overflow: "auto",
          textAlign: "center",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          {citydata?.data.map((city, index) => (
            <Grid item xs={2} sm={4} md={3} key={index}>
              <Button
                onClick={() => handleChangeCity(city.key)}
                sx={{
                  color: "white",
                  border: "solid 0.5px",
                  height: "50px",
                  width: "150px",
                }}
                variant="outlined"
              >
                <span
                  style={{
                    display: "block",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >{`${city.key}`}</span>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};
export default MainViewContaier;
