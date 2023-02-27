import {
  diyalizIcon,
  hospitalIcon,
  pharmacyIcon,
  psikologIcon,
  vetIcon,
} from "../lib/Icons";
import { HEPSI_ID } from "./constants";

// FIXME: This is a temporary solution. We should use a better way to get the icons.
export const getTypeIcons = (type) => {
  switch (type) {
    case HEPSI_ID:
      return hospitalIcon;
    case 1:
      return pharmacyIcon;
    case 4:
      return vetIcon;
    case 3:
      return psikologIcon;
    case 5:
      return diyalizIcon;
    default:
      return hospitalIcon;
  }
};
