import { Box } from "@mui/system";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Stack from "@mui/material/Stack";
import InfoCard from "./InfoCard";

const Map = ({ setMapRef, center, zoom, data }) => {
  return (
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
                  <Stack>
                    <InfoCard
                      item={station}
                      key={index}
                      index={station.id}
                      districtMap={districtMap}
                    />
                  </Stack>
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </Box>
  );
};

export default Map;
