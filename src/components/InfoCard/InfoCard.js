import clsx from "clsx";
import PropTypes from "prop-types"; // ES6
import { CITIES } from "../../lib/city";
import styles from "./InfoCard.module.scss";

const typeIdToClassName = {
  1: "hastane",
  2: "eczane",
  3: "psikolog",
  4: "veteriner",
  5: "diyaliz",
};

const typeIdToName = {
  1: "Hastane",
  2: "Eczane",
  3: "Psikolojik Destek",
  4: "Veteriner",
  5: "Diyaliz Destek",
};

const InfoCard = ({ item, districtMap, styleName }) => {
  const cityName = CITIES?.[item.cityId]?.key;
  const districtName = districtMap?.get(item.districtId);

  const googleMapsLink = `https://www.google.com/maps/dir//${item.latitude},${item.longitude}`;

  return (
    <div className={`${styles.cardWrapper} ${styleName}`}>
      <div className={styles.cardHeader}>
        <span
          className={clsx(
            styles.cardHeaderTitle,
            typeIdToClassName[item.typeId]
          )}
        >
          {typeIdToName?.[item.typeId] ?? "-"}
        </span>
      </div>
      <div className={styles.cardOrgName}>
        <a href={googleMapsLink}>{item.name}</a>
        <span className={styles.cardOrgPhone}>
          {item.phone && <a href={`tel:${item.phone}`}>{item.phone}</a>}
        </span>
      </div>
      <hr />
      <div className={styles.cardOrgInfo}>
        {cityName && (
          <span className={styles.cardOrgLocation}>
            <a href={googleMapsLink}>
              {cityName} | {districtName}
            </a>
          </span>
        )}
        <div className={styles.cardOrgAddress}>
          {item?.address ?? "-"}
          {item?.additionalAddressDetails !== "" && (
            <span>{item.additionalAddressDetails}</span>
          )}
        </div>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  item: PropTypes.object.isRequired,
  districtMap: PropTypes.object.isRequired,
  styleName: PropTypes.string,
};

export default InfoCard;
