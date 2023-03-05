import clsx from "clsx";
import PropTypes from "prop-types"; // ES6
import { useContext } from "react";
import { CITIES } from "../../lib/city";
import { TypeDataContext } from "../../lib/typeDataContext";
import styles from "./InfoCard.module.scss";
import { useTranslation } from "next-i18next";

const InfoCard = ({ item, districtMap, styleName }) => {
  const { data: typeData } = useContext(TypeDataContext);
  const { t } = useTranslation();

  const cityName = CITIES?.[item.cityId]?.key;
  const districtName = districtMap?.get(item.districtId);

  const googleMapsLink = `https://www.google.com/maps/dir//${item.latitude},${item.longitude}`;

  const typeName = typeData?.find((type) => type.id === item.typeId)?.name;
  console.log(typeName, "type name");
  return (
    <div className={`${styles.cardWrapper} ${styleName}`}>
      <div className={styles.cardHeader}>
        <span className={clsx(styles.cardHeaderTitle, typeName.toLowerCase())}>
          {typeName === "Hastane"
            ? t("common:hospitalBtn")
            : typeName === "Eczane"
            ? t("common:pharmacyBtn")
            : typeName === "Veteriner"
            ? t("common:vetBtn")
            : typeName === "Psikolojik Destek"
            ? t("common:psychologistBtn")
            : "" ?? "-"}
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
