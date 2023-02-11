import { Box } from "@mui/system";
import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";

const Map =({setMapRef,center,zoom,data})=>{
    
   return( <Box
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
                          Eczane
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

                        <Box
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <CallIcon></CallIcon>
                          <a href={"tel:" + station.phone}>
                            {station.phone}
                          </a>
                        </Box>
                      </Stack>
                      <Typography
                        sx={{
                          margin: 0,
opacity: 0.63,
flexWrap:"wrap",
padding:"5px"
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
  </Box>)





}


export default Map