import { Header } from "./Header/Header";
import { HeaderRow } from "./HeaderRow";
import styles from "./HeaderCombined.module.scss";

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
  );
};
