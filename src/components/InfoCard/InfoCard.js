import PropTypes from "prop-types"; // ES6
import { CITIES } from "../../lib/city";
import styles from "./InfoCard.module.scss";

const InfoCard = ({ item, districtMap, styleName }) => {
  const cityName = CITIES?.[item.cityId]?.key;
  const districtName = districtMap?.get(item.districtId);

  return (
    <div className={`${styles.cardWrapper} ${styleName}`}>
      <div className={styles.cardHeader}>
        <span
          className={`
            ${styles.cardHeaderTitle} ${
            item.typeId === 1
              ? "hastane"
              : item.typeId === 2
              ? "eczane"
              : item.typeId === 4
              ? "veteriner"
              : item.typeId === 3
              ? "psikolog"
              : ""
          }`}
        >
          {item.typeId === 1
            ? "Hastane"
            : item.typeId === 2
            ? "Eczane"
            : item.typeId === 4
            ? "Veteriner"
            : item.typeId === 3
            ? "Psikolojik Destek"
            : "-"}
        </span>
      </div>
      <div className={styles.cardOrgName}>
        <a
          href={`https://www.google.com/maps/dir//${item.latitude},${item.longitude}`}
        >
          {item.name}
        </a>
        <span className={styles.cardOrgPhone}>
          {item.phone ? <a href={`tel:${item.phone}`}>{item.phone}</a> : ""}
        </span>
      </div>
      <hr />
      <div className={styles.cardOrgInfo}>
        {cityName ? (
          <span className={styles.cardOrgLocation}>
            <a
              href={`https://www.google.com/maps/dir//${item.latitude},${item.longitude}`}
            >
              {cityName} | {districtName}
            </a>
          </span>
        ) : (
          ""
        )}
        <div className={styles.cardOrgAddress}>
          {item.address}
          {item.additionalAddressDetails !== "" ? (
            <span>{item.additionalAddressDetails}</span>
          ) : (
            ""
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
