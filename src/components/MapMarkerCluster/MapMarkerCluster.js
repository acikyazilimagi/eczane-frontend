import propTypes from "prop-types";
import { Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { getTypeIcons } from "../../utils/generalFunctions";
import InfoCard from "../InfoCard/InfoCard";

const MapMarkerCluster = ({ searchFilteredData, districtMap }) => {
  return (
    <MarkerClusterGroup disableClusteringAtZoom={12}>
      {searchFilteredData?.map((station) => {
        return (
          <Marker
            icon={getTypeIcons(station.typeId)}
            key={station.id}
            position={[station.latitude, station.longitude]}
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
  );
};

MapMarkerCluster.propTypes = {
  searchFilteredData: propTypes.array,
  districtMap: propTypes.object,
};

export default MapMarkerCluster;
