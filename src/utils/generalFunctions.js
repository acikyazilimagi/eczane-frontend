import { FILTER } from "../components/Header/HeaderRow";
import { hospitalIcon, pharmacyIcon, vetIcon } from "../lib/Icons";

export const getTypeIcons = (type) => {
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
