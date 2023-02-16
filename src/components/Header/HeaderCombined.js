import styled from "@emotion/styled";
import { Header } from "./Header/Header";
import { HeaderRow } from "./HeaderRow";

const SHeaderCombinedWrapper = styled.div`
  padding: 1rem 0;
  background-image: linear-gradient(to bottom, transparent 80%, #182151 100%),
    url("header-bg-mobile.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: 769px) {
    padding: 2.25rem 0;
    background-image: none;
  }
`;

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
    <SHeaderCombinedWrapper>
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
    </SHeaderCombinedWrapper>
  );
};
