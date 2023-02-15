import L from 'leaflet';
import hospitalIcon2Svg from '../icons/hospital-marker-2.png';
import hospitalIconSvg from '../icons/hospital-marker.png';
import pharmacyIcon2Svg from '../icons/pharmacy-marker-2.png';
import pharmacyIconSvg from '../icons/pharmacy-marker.png';
import vetIconSvg from '../icons/vet-marker.png';

const common = {
  iconSize: [32, 42],
  iconAnchor: [32, 64],
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
