import styles from "./SearchBar.module.scss";

function SearchBar({ searchBarVal, setSearchBarVal }) {
  return (
    <div className={styles.SearchBoxWrapper}>
      <input
        type="text"
        placeholder="Ara"
        value={searchBarVal}
        onInput={(e) => setSearchBarVal(e.target.value)}
        className={styles.Input}
      />
      <div className={styles.SearchIconWrapper}>
        <button className={styles.NoStyleButton}>
          <img
            src="/search-icon.svg"
            alt="Search Icon"
            className={styles.SearchIcon}
          />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
