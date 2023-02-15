import InfoCard from "../InfoCard/InfoCard";
import styles from "./ListPage.module.scss";

const ListPage = ({ data, districtMap }) => {
  return (
    <div className={styles.wrapper}>
      {data?.length ? (
        <div className={`${styles.flexWrapper} list`}>
          {data?.map((item) => (
            <InfoCard key={item.id} styleName={'list'} item={item} districtMap={districtMap} />
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
