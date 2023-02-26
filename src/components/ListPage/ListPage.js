import PropTypes from "prop-types"; // ES6
import Block from "../../lib/Block/Block";
import InfoCard from "../InfoCard/InfoCard";
import styles from "./ListPage.module.scss";

const ListPage = ({ data, districtMap }) => {
  return (
    <Block>
      <div className={styles.wrapper}>
        {data?.length ? (
          <div className={`${styles.flexWrapper} list`}>
            {data?.map((item) => (
              <InfoCard
                key={item.id}
                styleName={"list"}
                item={item}
                districtMap={districtMap}
              />
            ))}
          </div>
        ) : (
          <h2 className={styles.notFoundText}>
            Aranılan kriterlere uygun sonuç bulunamadı.
          </h2>
        )}
      </div>
    </Block>
  );
};

ListPage.propTypes = {
  data: PropTypes.array.isRequired,
  districtMap: PropTypes.object.isRequired,
};

export default ListPage;
