import styled from "@emotion/styled";
import { BREAKPOINTS } from "../../utils/styled";
import SearchBar from "./SearchBar";

const SHeaderRowWrapper = styled.div``;

const SFlex = styled.div`
  min-height: 1.875rem;
  display: flex;
  justify-content: space-between;
`;

const SButton = styled.button`
  background-color: ${(props) => (props.selected ? "F83B3B" : "#fff")};
  padding: 0.5rem;
  color: ${(props) => (props.selected ? "#fff" : "#111A42")};
  border: none;
  font-size: 0.75rem;
  cursor: pointer;
  font-family: "SegoeUI";

  @media ${BREAKPOINTS.MD.min} {
    padding: 1rem 2rem;
    font-size: 1.75rem;
  }
`;

const SSearchButton = styled(SButton)`
  padding: 0.5rem 1rem;
  &:first-of-type {
    border-radius: 0.625rem 0 0 0.625rem;
  }
  &:last-of-type {
    border-radius: 0 0.625rem 0.625rem 0;
  }
`;

const SToggleGroup = styled.div`
  display: flex;
`;

const SFilterWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: center;

  @media ${BREAKPOINTS.MD.min} {
    margin-top: 3.375rem;
  }
`;

const SFilterFlex = styled.div`
  border-radius: 0.625rem;
  padding: 2px;
  border: 1px solid #ffffff;
  display: flex;
  align-self: center;
  width: 100%;
  @media ${BREAKPOINTS.MD.min} {
    width: unset;
    padding: 4px;
  }
`;

const SFilterButton = styled(SButton)`
  border-radius: 0.625rem;
  color: ${(props) => (props.buttonDisabled ? "#888" : "#fff")};
  background-color: ${(props) => (props.selected ? "#F83B3B" : "unset")};
  flex-grow: 1;
  cursor: ${(props) => (props.buttonDisabled ? "not-allowed" : "pointer")};
`;

const SFilterIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0.75rem;
  @media ${BREAKPOINTS.MD.min} {
    margin: 0 1.5rem;
  }
`;

const SFilterSvg = styled.img`
  height: 0.75rem;
  width: 0.75rem;
  @media ${BREAKPOINTS.MD.min} {
    height: 2rem;
    width: 2rem;
  }
`;

export const SEARCH_AT = {
  HARITA: "harita",
  LISTE: "liste",
};

export const FILTER = {
  HEPSI: "Hepsi",
  HASTANE: "Hastane",
  ECZANE: "Eczane",
  VETERINER: "Veteriner",
};

export const HeaderRow = ({
  searchAt,
  setSearchAt,
  filter,
  setFilter,
  searchBarVal,
  setSearchbarVal,
}) => {
  const setHarita = () => setSearchAt(SEARCH_AT.HARITA);
  const setListe = () => setSearchAt(SEARCH_AT.LISTE);

  const setHepsi = () => setFilter(FILTER.HEPSI);
  const setHastane = () => setFilter(FILTER.HASTANE);
  const setEczane = () => setFilter(FILTER.ECZANE);
  const setVeteriner = () => setFilter(FILTER.VETERINER);

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
            disabled
            buttonDisabled
          >
            Veteriner
          </SFilterButton>
          <SFilterIconWrapper>
            <SFilterSvg src="/filter-icon.svg" />
          </SFilterIconWrapper>
        </SFilterFlex>
      </SFilterWrapper>
    </SHeaderRowWrapper>
  );
};
