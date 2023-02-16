import clsx from "clsx";
import { useWindowSize } from "../../utils/hooks";
import styles from "./HeaderRow.module.scss";
import SearchBar from "./SearchBar";

export const SEARCH_AT = {
  HARITA: "harita",
  LISTE: "liste",
};

export const FILTER = {
  HEPSI: "Hepsi",
  HASTANE: 1,
  ECZANE: 2,
  VETERINER: 4,
};

const FilterRow = ({ filter, setFilter, hasVetData }) => {
  const setHepsi = () => setFilter(FILTER.HEPSI);
  const setHastane = () => setFilter(FILTER.HASTANE);
  const setEczane = () => setFilter(FILTER.ECZANE);
  const setVeteriner = () => setFilter(FILTER.VETERINER);

  const SFilterButtons = [
    {
      label: "Hepsi",
      click: setHepsi,
      selected: filter === FILTER.HEPSI,
    },
    {
      label: "Hastane",
      click: setHastane,
      selected: filter === FILTER.HASTANE,
    },
    {
      label: "Eczane",
      click: setEczane,
      selected: filter === FILTER.ECZANE,
    },
    {
      label: "Veteriner",
      click: setVeteriner,
      selected: filter === FILTER.VETERINER,
      disabled: !hasVetData,
      buttonDisabled: !hasVetData,
    },
  ];
  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filterFlex}>
        {SFilterButtons.map((item) => {
          const { label, click, selected } = item;
          return (
            <button
              key={label}
              className={clsx(styles.filterButton, {
                [styles.buttonDisabled]: item.buttonDisabled,
                [styles.selected]: selected,
              })}
              type="button"
              onClick={click}
              disabled={item.disabled || false}
            >
              {label}
            </button>
          );
        })}

        <div className={styles.filterIconWrapper}>
          <img
            className={styles.filterSvg}
            src="/filter-icon.svg"
            alt="filter-icon"
          />
        </div>
      </div>
    </div>
  );
};

export const HeaderRow = ({
  searchAt,
  setSearchAt,
  filter,
  setFilter,
  searchBarVal,
  setSearchbarVal,
  hasVetData,
}) => {
  const setHarita = () => setSearchAt(SEARCH_AT.HARITA);
  const setListe = () => setSearchAt(SEARCH_AT.LISTE);

  const { isXLarge } = useWindowSize();

  return (
    <div>
      <div className={styles.flex}>
        <div className={styles.toggleGroup}>
          <button
            className={clsx(styles.searchButton, {
              [styles.selected]: searchAt === SEARCH_AT.HARITA,
            })}
            type="button"
            onClick={setHarita}
          >
            Haritada
          </button>
          <button
            className={clsx(styles.searchButton, {
              [styles.selected]: searchAt === SEARCH_AT.LISTE,
            })}
            type="button"
            onClick={setListe}
          >
            Listede
          </button>
        </div>
        {isXLarge && (
          <FilterRow
            filter={filter}
            setFilter={setFilter}
            hasVetData={hasVetData}
          />
        )}
        <SearchBar
          searchBarVal={searchBarVal}
          setSearchBarVal={setSearchbarVal}
        />
      </div>
      {!isXLarge && (
        <div className={styles.filterNextRowWrapper}>
          <FilterRow
            filter={filter}
            setFilter={setFilter}
            hasVetData={hasVetData}
          />
        </div>
      )}
    </div>
  );
};
