import L from "leaflet";
import propTypes from "prop-types";
import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Block } from "../../lib/Block/Block";
import { DragIcon } from "../DragIcon/DragIcon";
import { FullScreenIcon } from "../FullScreenIcon/FullScreenIcon";
import { MapMarkerCluster } from "../MapMarkerCluster/MapMarkerCluster";
import styles from "./MapPage.module.scss";

const ZOOM = 6;
const MIN_ZOOM = 7;

export const CENTER_LAT = 37.683664;
export const CENTER_LNG = 38.322966;

const LEFT_TOP_BOUND = [34.325514, 28.939165];
const RIGHT_BOTTOM_BOUND = [41.57364, 42.770324];

export const MapPage = ({
  searchFilteredData,
  districtMap,
  setMap,
  handleLock,
}) => {
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
          className="hazir-map"
          center={center}
          zoom={ZOOM}
          minZoom={MIN_ZOOM}
          tap={L.Browser.safari && L.Browser.mobile}
          maxBounds={[LEFT_TOP_BOUND, RIGHT_BOTTOM_BOUND]}
        >
          <DragIcon dragActive={dragActive} onLockClick={onLockClick} />
          <FullScreenIcon />

          <TileLayer
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
