import PropTypes from "prop-types"; // ES6
import styles from "./SearchBar.module.scss";
import { useTranslation } from "next-i18next";

const SearchBar = ({ searchBarVal, setSearchBarVal }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.searchBoxWrapper}>
      <input
        type="text"
        placeholder={t("common:search")}
        value={searchBarVal}
        onInput={(e) => setSearchBarVal(e.target.value)}
        className={styles.input}
      />
      <div className={styles.searchIconWrapper}>
        <button className={styles.noStyleButton} type="button">
          <img
            src="/icons/search-icon.svg"
            alt="Search Icon"
            className={styles.searchIcon}
          />
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchBarVal: PropTypes.string.isRequired,
  setSearchBarVal: PropTypes.func.isRequired,
};

export default SearchBar;
