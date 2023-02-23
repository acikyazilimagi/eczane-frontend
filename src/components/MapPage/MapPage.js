import L from "leaflet";

import propTypes from "prop-types";
import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Block from "../../lib/Block/Block";

import { CENTER_LAT, CENTER_LNG } from "../../utils/constants";
import DragIcon from "../DragIcon/DragIcon";
import FullScreenIcon from "../FullScreenIcon/FullScreenIcon";
import MapMarkerCluster from "../MapMarkerCluster/MapMarkerCluster";
import styles from "./MapPage.module.scss";

import "react-leaflet-fullscreen/dist/styles.css";

/* const MapMarkerCluster = dynamic(
  () => import("../MapMarkerCluster/MapMarkerCluster"),
  {
    loading: () => <p>loading...</p>,
    ssr: false,
  }
);

const DragIcon = dynamic(() => import("../DragIcon/DragIcon"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

const FullScreenIcon = dynamic(
  () => import("../FullScreenIcon/FullScreenIcon"),
  {
    loading: () => <p>loading...</p>,
    ssr: false,
  }
); */

const ZOOM = 6;
const MIN_ZOOM = 7;

const LEFT_TOP_BOUND = [43, 25];
const RIGHT_BOTTOM_BOUND = [35, 45];

const MapPage = ({ searchFilteredData, districtMap, setMap, handleLock }) => {
  const [dragActive, setDragActive] = useState(true);

  const center = [CENTER_LAT, CENTER_LNG];

  const toggleDragActive = () => {
    setDragActive((active) => !active);
  };

  const onLockClick = () => {
    handleLock();
    toggleDragActive();
  };

  return (
    <Block zeroPaddingOnMobile>
      <div className={styles.mainViewContainerMapContainer}>
        <MapContainer
          whenCreated={setMap}
          className={styles.mapContainer}
          center={center}
          zoom={ZOOM}
          minZoom={MIN_ZOOM}
          tap={L.Browser.safari && L.Browser.mobile}
          maxBounds={[LEFT_TOP_BOUND, RIGHT_BOTTOM_BOUND]}
          maxBoundsViscosity={1}
          preferCanvas
        >
          <DragIcon dragActive={dragActive} onLockClick={onLockClick} />
          <FullScreenIcon />

          <TileLayer
            detectRetina
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapMarkerCluster
            searchFilteredData={searchFilteredData}
            districtMap={districtMap}
          />
        </MapContainer>
      </div>
    </Block>
  );
};

MapPage.propTypes = {
  searchFilteredData: propTypes.array,
  districtMap: propTypes.object,
  setMap: propTypes.func,
  handleLock: propTypes.func,
};

export default MapPage;
