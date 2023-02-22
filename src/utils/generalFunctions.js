import { FILTER } from "./constants";
import {
  hospitalIcon,
  pharmacyIcon,
  vetIcon,
  psikologIcon,
  diyalizIcon,
} from "../lib/Icons";

export const getTypeIcons = (type) => {
  switch (type) {
    case FILTER.HASTANE:
      return hospitalIcon;
    case FILTER.ECZANE:
      return pharmacyIcon;
    case FILTER.VETERINER:
      return vetIcon;
    case FILTER.PSIKOLOG:
      return psikologIcon;
    case FILTER.DIYALIZ:
      return diyalizIcon;
    default:
      return hospitalIcon;
  }
};
