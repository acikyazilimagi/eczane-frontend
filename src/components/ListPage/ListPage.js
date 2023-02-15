import InfoCard from "../InfoCard/InfoCard";
import styles from "./ListPage.module.scss";

const ListPage = ({ data, allDistricts }) => {
  return (
    <div className={styles.wrapper}>
      {data?.length ? (
        <div className={styles.flexWrapper}>
          {data?.map((item) => (
            <InfoCard key={item.id} item={item} allDistricts={allDistricts} />
          ))}
        </div>
      ) : (
        <h2 className={styles.notFoundText}>
          Aranılan kriterlere uygun sonuç bulunamadı.
        </h2>
      )}
    </div>
  );
};
export default ListPage;
