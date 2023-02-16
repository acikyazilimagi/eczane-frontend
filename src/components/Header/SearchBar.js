import PropTypes from "prop-types"; // ES6
import styles from "./SearchBar.module.scss";

function SearchBar({ searchBarVal, setSearchBarVal }) {
  return (
    <div className={styles.searchBoxWrapper}>
      <input
        type="text"
        placeholder="Ara"
        value={searchBarVal}
        onInput={(e) => setSearchBarVal(e.target.value)}
        className={styles.input}
      />
      <div className={styles.searchIconWrapper}>
        <button className={styles.noStyleButton}>
          <img
            src="/search-icon.svg"
            alt="Search Icon"
            className={styles.searchIcon}
          />
        </button>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  searchBarVal: PropTypes.string.isRequired,
  setSearchBarVal: PropTypes.func.isRequired,
};

export default SearchBar;
