import L from "leaflet";
import hospitalIcon2Svg from "../icons/hospital-marker-2.png";
import hospitalIconSvg from "../icons/hospital-marker.png";
import pharmacyIcon2Svg from "../icons/pharmacy-marker-2.png";
import pharmacyIconSvg from "../icons/pharmacy-marker.png";

export const hospitalIcon = L.icon({
  iconSize: [32, 42],
  iconAnchor: [32, 64],
  shadowUrl: null,
  shadowSize: null, // size of the shadow
  shadowAnchor: null, // the same for the shadow
  iconUrl: hospitalIconSvg,
});

export const hospitalIcon2 = L.icon({
  iconSize: [32, 42],
  iconAnchor: [32, 64],
  shadowUrl: null,
  shadowSize: null, // size of the shadow
  shadowAnchor: null, // the same for the shadow
  iconUrl: hospitalIcon2Svg,
});

export const pharmacyIcon = L.icon({
  iconSize: [32, 42],
  iconAnchor: [32, 64],
  shadowUrl: null,
  shadowSize: null, // size of the shadow
  shadowAnchor: null, // the same for the shadow
  iconUrl: pharmacyIconSvg,
});

export const pharmacyIcon2 = L.icon({
  iconSize: [32, 42],
  iconAnchor: [32, 64],
  shadowUrl: null,
  shadowSize: null, // size of the shadow
  shadowAnchor: null, // the same for the shadow
  iconUrl: pharmacyIcon2Svg,
});
