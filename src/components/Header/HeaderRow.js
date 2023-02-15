import SearchBar from "./SearchBar";
import { useWindowSize } from "../../utils/hooks";
import {
  SFilterButton,
  SFilterFlex,
  SFilterIconWrapper,
  SFilterNextRowWrapper,
  SFilterSvg,
  SFilterWrapper,
  SFlex,
  SHeaderRowWrapper,
  SSearchButton,
  SToggleGroup,
} from "./HeaderRow.styled";

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
    <SFilterWrapper>
      <SFilterFlex>
        {SFilterButtons.map((item) => {
          const { label, click, selected } = item;
          return (
            <SFilterButton
              type="button"
              onClick={click}
              selected={selected}
              disabled={item.disabled || false}
              buttonDisabled={item.buttonDisabled || false}
            >
              {label}
            </SFilterButton>
          );
        })}

        <SFilterIconWrapper>
          <SFilterSvg src="/filter-icon.svg" />
        </SFilterIconWrapper>
      </SFilterFlex>
    </SFilterWrapper>
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
    <SHeaderRowWrapper>
      <SFlex>
        <SToggleGroup>
          <SSearchButton
            type="button"
            onClick={setHarita}
            selected={searchAt === SEARCH_AT.HARITA}
          >
            Haritada
          </SSearchButton>
          <SSearchButton
            type="button"
            onClick={setListe}
            selected={searchAt === SEARCH_AT.LISTE}
          >
            Listede
          </SSearchButton>
        </SToggleGroup>
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
      </SFlex>
      {!isXLarge && (
        <SFilterNextRowWrapper>
          <FilterRow
            filter={filter}
            setFilter={setFilter}
            hasVetData={hasVetData}
          />
        </SFilterNextRowWrapper>
      )}
    </SHeaderRowWrapper>
  );
};
