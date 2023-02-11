import styled from "@emotion/styled";
import { useState } from "react";
import { BREAKPOINTS } from "../../utils/styled";

const SHeaderRowWrapper = styled.div``;

const SFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SButton = styled.button`
  background-color: ${(props) => (props.selected ? "F83B3B" : "#fff")};
  padding: 0.5rem 1rem;
  color: ${(props) => (props.selected ? "#fff" : "#111A42")};
  border: none;
  font-size: 0.75rem;

  @media ${BREAKPOINTS.MD.min} {
    padding: 1rem 2rem;
    font-size: 1.75rem;
  }
`;

const SSearchButton = styled(SButton)`
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
  margin-top: 2rem;
  justify-content: center;

  @media ${BREAKPOINTS.MD.min} {
    margin-top: 3.375rem;
  }
`;

const SFilterFlex = styled.div`
  border-radius: 0.625rem;
  padding: 4px 2px;
  border: 1px solid #ffffff;
  display: flex;
`;

const SFilterButton = styled(SButton)`
  border-radius: 0.625rem;
  color: #fff;
  background-color: ${(props) => (props.selected ? "F83B3B" : "unset")};
`;

const SEARCH_AT = {
  HARITA: "harita",
  LISTE: "liste",
};

const FILTER = {
  HEPSI: "hepsi",
  HASTANE: "hastane",
  ECZANE: "eczane",
  VETERINER: "veteriner",
};

export const HeaderRow = () => {
  const [searchAt, setSearchAt] = useState(SEARCH_AT.HARITA);

  const [filter, setFilter] = useState(FILTER.HEPSI);

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

        {/* Farkli bir task'la halledilecek  */}
        <input style={{ marginLeft: "0.625rem" }} />
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
          >
            Veteriner
          </SFilterButton>
        </SFilterFlex>
      </SFilterWrapper>
    </SHeaderRowWrapper>
  );
};
