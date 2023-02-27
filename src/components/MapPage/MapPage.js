import L from "leaflet";

import propTypes from "prop-types";
import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Block from "../../lib/Block/Block";

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

// bunu gelen datanin varyansina gore ayarlarsak efsane olur
const LAT_BOUND_THRESHOLD = 4;
const LONG_BOUND_THRESHOLD = 10;

const MapPage = ({
  searchFilteredData,
  districtMap,
  setMap,
  handleLock,
  centerLatLong,
}) => {
  const [dragActive, setDragActive] = useState(true);

  const center = [
    centerLatLong?.latitude ?? 40,
    centerLatLong?.longitude ?? 35,
  ];

  const leftTopBound = [
    centerLatLong?.latitude - LAT_BOUND_THRESHOLD,
    centerLatLong?.longitude - LONG_BOUND_THRESHOLD,
  ];
  const rightBottomBound = [
    centerLatLong?.latitude + LAT_BOUND_THRESHOLD,
    centerLatLong?.longitude + LONG_BOUND_THRESHOLD,
  ];

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
          maxBounds={[leftTopBound, rightBottomBound]}
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
  centerLatLong: propTypes.object.isRequired,
};

export default MapPage;
