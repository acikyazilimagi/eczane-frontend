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
  PSIKOLOJIK_DESTEK: 3,
  VETERINER: 4,
  DIYALIZ: 5,
};

const FilterRow = ({
  filter,
  setFilter,
  hasVetData,
  hasPsychData,
  hasDiyalizData,
}) => {
  const setHepsi = () => setFilter(FILTER.HEPSI);
  const setHastane = () => setFilter(FILTER.HASTANE);
  const setEczane = () => setFilter(FILTER.ECZANE);
  const setVeteriner = () => setFilter(FILTER.VETERINER);
  const setPsikolojikDestek = () => setFilter(FILTER.PSIKOLOJIK_DESTEK);
  const setDiyaliz = () => setFilter(FILTER.DIYALIZ);
  return (
    <SFilterWrapper>
      <SFilterFlex>
        <SFilterButton
          type="button"
          onClick={setHepsi}
          selected={filter === FILTER.HEPSI}
        >
          Hepsi
        </SFilterButton>
        <SFilterButton
          type="button"
          onClick={setHastane}
          selected={filter === FILTER.HASTANE}
        >
          Hastane
        </SFilterButton>
        <SFilterButton
          type="button"
          onClick={setEczane}
          selected={filter === FILTER.ECZANE}
        >
          Eczane
        </SFilterButton>
        <SFilterButton
          type="button"
          onClick={setVeteriner}
          selected={filter === FILTER.VETERINER}
          disabled={!hasVetData}
          buttonDisabled={!hasVetData}
        >
          Veteriner
        </SFilterButton>
        <SFilterButton
          type="button"
          onClick={setPsikolojikDestek}
          selected={filter === FILTER.PSIKOLOJIK_DESTEK}
          disabled={!hasPsychData}
          buttonDisabled={!hasPsychData}
        >
          Psikolojik
          <br />
          Destek
        </SFilterButton>
        <SFilterButton
          type="button"
          onClick={setDiyaliz}
          selected={filter === FILTER.DIYALIZ}
          disabled={!hasDiyalizData}
          buttonDisabled={!hasDiyalizData}
        >
          Diyaliz
        </SFilterButton>
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
  hasPsychData,
  hasDiyalizData,
}) => {
  const setHarita = () => setSearchAt(SEARCH_AT.HARITA);
  const setListe = () => setSearchAt(SEARCH_AT.LISTE);

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
        <SearchBar
          searchBarVal={searchBarVal}
          setSearchBarVal={setSearchbarVal}
        />
      </SFlex>

      <SFilterNextRowWrapper>
        <FilterRow
          filter={filter}
          setFilter={setFilter}
          hasVetData={hasVetData}
          hasPsychData={hasPsychData}
          hasDiyalizData={hasDiyalizData}
        />
      </SFilterNextRowWrapper>
    </SHeaderRowWrapper>
  );
};
