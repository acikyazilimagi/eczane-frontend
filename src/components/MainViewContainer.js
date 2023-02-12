import React, { useEffect, useState } from "react";
import L from 'leaflet';

import { styled } from "@mui/material/styles";
import {
  Box,
  Paper,
  Grid,
  Typography,
  Button,
  Stack,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import axios from "axios";
import L from 'leaflet';

import centers from "./cityCenters";
import UpButton from "./UpButton";
import DownButton from "./DownButton";
import Header from "./Header";
import SelectType from "./SelectType";
import ListPage from "./ListPage";
import hospitalIconSvg from "../icons/hospital.svg";
import pharmacyIconSvg from "../icons/pharmacy.svg";



const MainViewContaier = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [mapRef, setMapRef] = React.useState();
  const [alignment, setAlignment] = React.useState("harita");
  const [citydata, setCityData] = React.useState(null);
  const [data, setData] = React.useState(null)
  const [allData, setAllData] = React.useState(null)
  const [button, setButton] = React.useState("hepsi")
  const center = [37.683664, 38.322966];
  const zoom = 7;

  const hospitalIcon = L.icon({
    iconRetinaUrl: hospitalIconSvg,
    //iconUrl: require('../icons/hospital.svg'),
    iconSize: [32, 32],
    iconAnchor: [32, 64],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    color: 'blue'
  });

  const pharmacyIcon = L.icon({
    iconRetinaUrl: pharmacyIconSvg,
    //iconUrl: require('../icons/hospital.svg'),
    iconSize: [32, 32],
    iconAnchor: [32, 64],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
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


  const handleChange = (event, newAlignment) => {  //TODO DEGISTIR
    if (newAlignment) {
      setAlignment(newAlignment);
    }
  };

  const handleChangeCity = (city) => {
    const lat = centers[city]?.lat;
    const lng = centers[city]?.lng;
    mapRef.flyTo([lat, lng], 12);
  };

  const handleFilterButton = (event) => {
    setButton(event.target.value);
    if (event.target.value === 'hepsi') {
      setData(allData)
    }


    else {
      const filteredData = allData?.filter((item) => item.type === event.target.value)
      setData(filteredData)
    }
  }


  const CustomToggleButtonFilter = styled(ToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: "#FF6464",
    },
    "&.MuiToggleButton-root": {
      textTransform: "none",
      color: "white !important",
    },
  });



  useEffect(() => {
    console.log("data", data)

  }, [data]);



  useEffect(() => {
    axios.get("https://eczaneapi.afetharita.com/api").then((response) => {
      setData(response.data?.data);
      setAllData(response.data?.data);
    }).catch((err) => {
      //setError(err)
    })

  }, []);

  useEffect(() => {
    axios
      .get("https://eczaneapi.afetharita.com/api/cityWithDistricts ")
      .then((response) => {
        setCityData(response.data);
      })
      .catch((err) => {
      });
  }, []);

  if (data === null) {
    return <h2>Loading  </h2>   //LOADBAR EKLE
  }



  return (
    <Paper
      id="fullheight"
      sx={{ bgcolor: "#182151", height: "100%", padding: "0px" }}
      variant="outlined"
    >

      <UpButton visible={visible}></UpButton>
      <DownButton visible={visible1}></DownButton>

      <Header alignment={alignment} handleChange={handleChange}></Header>






      <Grid container sx={{ width: "100%", margin: "90px 0px 40px 0px", justifyContent: "center" }} >


        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            color: "white",
            maxWidth: "unset",
            flexBasis: "auto",
            margin: "10px 0px"

          }}
          item md={6} sm={12} alignSelf={"self-start"}
        >
          <Stack
            sx={{
              border: "solid 0.1px",
              padding: "7px",
              borderRadius: "8px",


            }}
            direction="row-reverse"
            spacing={2}
            divider={
              <Divider
                sx={{ backgroundColor: "white" }}
                orientation="vertical"
                flexItem
              />
            }
          >
            <ToggleButtonGroup
              sx={{
                padding: "1",
              }}
              value={button}
              exclusive
              onChange={handleFilterButton}
              aria-label="Platform"
            >
              <CustomToggleButtonFilter value="hepsi" c>
                Hepsi
              </CustomToggleButtonFilter>
              <CustomToggleButtonFilter value="Hastane">
                Hastane
              </CustomToggleButtonFilter>
              <CustomToggleButtonFilter value="Eczane">
                Eczane
              </CustomToggleButtonFilter>
            </ToggleButtonGroup>
          </Stack>
        </Grid>
        <Grid item md={6} sm={12} display="flex">
          <SelectType handleChange={handleChange} alignment={alignment} ></SelectType>
        </Grid>


      </Grid>










      {alignment === "harita" && (
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
              {data?.map((station) => {
                return (
                  <Marker
                    icon={station.type.toLowerCase() === 'hastane' ? hospitalIcon : pharmacyIcon}
                    key={station.id} //key kısmını da kendi datanıza göre ayarlayın mydaya.id gibi
                    position={[station.latitude, station.longitude]} //Kendi pozisyonunuzu ekleyin buraya stationı değiştirin mydata.adress.latitude mydata.adress.longitude gibi
                  >
                    <Popup>
                      <Box>
                        <Stack width="400px">
                          <Box>
                            <Stack
                              direction="row"
                              spacing={0}
                              margin="0px"
                              padding="0px 12px"
                            >
                              <Box padding="3px 4px 0px 0px">
                                <img
                                  src="./pill.png "
                                  width="16px"
                                  height="16px"
                                  alt="./pill.png"
                                ></img>{" "}
                                {
                                  //Alternatif image eklenebilir
                                }
                              </Box>
                              <Typography margin="0px" color={"#F83B3B"}>
                                {station.type}
                              </Typography>
                            </Stack>
                          </Box>
                          <Typography fontSize="24px" p="0px 12px">
                            {station.name}
                          </Typography>

                          <Divider
                            style={{ width: "93.5%", margin: "7px 4px" }}
                          />

                          <Stack direction="column">
                            <Stack
                              direction="row"
                              padding="3px 0px 0px 7px"
                              justifyContent="space-evenly"
                            >
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <LocationOnIcon></LocationOnIcon>
                                <a
                                  href={`https://www.google.com/maps/dir//${station.latitude},${station.longitude}`}
                                >
                                  {station.city} {station.district}
                                </a>
                              </Box>

                              {station.phone && (
                                <Box
                                  sx={{ display: "flex", alignItems: "center" }}
                                >
                                  <CallIcon></CallIcon>
                                  <a href={"tel:" + station.phone}>
                                    {station.phone}
                                  </a>
                                </Box>
                              )}

                            </Stack>
                            <Typography
                              sx={{
                                margin: 0,
                                opacity: 0.63,
                                flexWrap: "wrap",
                                padding: "5px"
                              }}

                            >
                              {station.address}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>
                    </Popup>
                  </Marker>
                );
              })}
            </MarkerClusterGroup>
          </MapContainer>
        </Box>
      )}

      <Box
        sx={{
          flexGrow: 1,
          marginTop: "30px",
          height: "500px",
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

      {alignment === "liste" && (
        <ListPage data={data} />
      )}
    </Paper>
  );
};
export default MainViewContaier;
