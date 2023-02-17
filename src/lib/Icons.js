import L from "leaflet";
import hospitalIcon2Svg from "../icons/hospital-marker-2.svg";
import hospitalIconSvg from "../icons/hospital-marker.svg";
import pharmacyIcon2Svg from "../icons/pharmacy-marker-2.svg";
import pharmacyIconSvg from "../icons/pharmacy-marker.svg";
import vetIconSvg from "../icons/vet-marker.svg";

const common = {
  iconSize: [32, 42],
  iconAnchor: [18, 22],
  shadowUrl: null,
  shadowSize: null, // size of the shadow
  shadowAnchor: null, // the same for the shadow
};
export const hospitalIcon = L.icon({
  ...common,
  iconUrl: hospitalIconSvg,
});

export const hospitalIcon2 = L.icon({
  ...common,
  iconUrl: hospitalIcon2Svg,
});

export const pharmacyIcon = L.icon({
  ...common,
  iconUrl: pharmacyIconSvg,
});

export const pharmacyIcon2 = L.icon({
  ...common,
  iconUrl: pharmacyIcon2Svg,
});

export const vetIcon = L.icon({
  ...common,
  iconUrl: vetIconSvg,
});
