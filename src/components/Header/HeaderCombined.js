import PropTypes from "prop-types"; // ES6
import { Block } from "../../lib/Block/Block";
import { Header } from "./Header/Header";
import styles from "./HeaderCombined.module.scss";
import { HeaderRow } from "./HeaderRow";

export const HeaderCombined = ({
  searchAt,
  setSearchAt,
  filter,
  setFilter,
  searchBarVal,
  setSearchbarVal,
  hasVetData,
}) => {
  return (
    <Block styleName={styles.mobileBgImage}>
      <div className={styles.headerCombinedWrapper}>
        <Header />
        <HeaderRow
          setSearchAt={setSearchAt}
          searchAt={searchAt}
          filter={filter}
          setFilter={setFilter}
          searchBarVal={searchBarVal}
          setSearchbarVal={setSearchbarVal}
          hasVetData={hasVetData}
        />
      </div>
    </Block>
  );
};

HeaderCombined.propTypes = {
  searchAt: PropTypes.string.isRequired,
  setSearchAt: PropTypes.func.isRequired,
  filter: PropTypes.number.isRequired,
  setFilter: PropTypes.func.isRequired,
  searchBarVal: PropTypes.string.isRequired,
  setSearchbarVal: PropTypes.func.isRequired,
  hasVetData: PropTypes.bool.isRequired,
};
