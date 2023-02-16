import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import L from "leaflet";
import React, { useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Control from "react-leaflet-custom-control";
import { FullscreenControl } from "react-leaflet-fullscreen";
import "react-leaflet-fullscreen/dist/styles.css";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { Block } from "../../lib/Block/Block";
import centers from "../../lib/cityCenters";
import { hospitalIcon, pharmacyIcon, vetIcon } from "../../lib/Icons";
import { debounce } from "../../utils/debounce";
import { useFetch } from "../../utils/hooks";
import { Footer } from "../Footer/Footer";
import { HeaderCombined } from "../Header/HeaderCombined";
import { FILTER, SEARCH_AT } from "../Header/HeaderRow";
import InfoCard from "../InfoCard/InfoCard";
import ListPage from "../ListPage/ListPage";
import styles from "./MainViewContainer.module.scss";

const CENTER_LAT = 37.683664;
const CENTER_LNG = 38.322966;
const ZOOM = 6;
const MIN_ZOOM = 7;

const LEFT_TOP_BOUND = [34.325514, 28.939165];
const RIGHT_BOTTOM_BOUND = [41.57364, 42.770324];

const MainViewContaier = () => {
  const { data: fetchedData } = useFetch(
    "https://eczaneapi.afetharita.com/api/locations"
  );
  const allData = fetchedData?.data;
  const { data: cityData } = useFetch(
    "https://eczaneapi.afetharita.com/api/cityWithDistricts"
  );

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

  const center = [CENTER_LAT, CENTER_LNG];

  const setIconFn = (type, subType) => {
    switch (type) {
      case FILTER.HASTANE:
        return hospitalIcon;
      case FILTER.ECZANE:
        return pharmacyIcon;
      case FILTER.VETERINER:
        return vetIcon;
      default:
        return hospitalIcon;
    }
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

  const districtMap = useMemo(() => {
    console.log("this runs");
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
    ); //LOADBAR EKLE
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

  const onLockClick = () => {
    handleLock();
    toggleDragActive();
  };

  return (
    <div className={styles.mainViewContainerPaper}>
      <Block>
        <HeaderCombined
          setSearchAt={setSearchAt}
          searchAt={searchAt}
          filter={filter}
          setFilter={setFilter}
          searchBarVal={searchBarVal}
          setSearchbarVal={setSearchbarVal}
          hasVetData={hasVetData}
        />
      </Block>
      {searchAt === SEARCH_AT.HARITA && (
        <Block zeroPaddingOnMobile>
          <div className={styles.mainViewContainerMapContainer}>
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
                <button
                  className={styles.mainViewContainerButton}
                  onClick={debounce(onLockClick, 150)}
                >
                  {!dragActive ? <LockIcon /> : <LockOpenIcon />}
                </button>
              </Control>
              <Control position="topright">
                <FullscreenControl
                  forceSeparateButton
                  position="topright"
                  content="<img src='fullscreen.png' class='fullscreen-img'/>"
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
                        <InfoCard
                          key={station.id}
                          item={station}
                          districtMap={districtMap}
                          styleName="popup"
                        />
                      </Popup>
                    </Marker>
                  );
                })}
              </MarkerClusterGroup>
            </MapContainer>
          </div>
        </Block>
      )}
      {searchAt === SEARCH_AT.LISTE && (
        <ListPage
          data={distFilteredData}
          cityData={cityData}
          districtMap={districtMap}
        />
      )}
      <Block>
        <Footer
          cityData={cityData}
          selectedCity={selectedCity}
          handleChangeCity={handleChangeCity}
          selectedDist={selectedDist}
          setSelectedDist={setSelectedDist}
          allData={allData}
          hideDistrictSelector={searchAt === SEARCH_AT.HARITA}
        />
      </Block>
    </div>
  );
};
export default MainViewContaier;
