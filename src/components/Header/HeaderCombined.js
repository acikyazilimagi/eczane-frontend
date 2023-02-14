import styled from "@emotion/styled";
import { BREAKPOINTS } from "../../utils/styled";
import { Header } from "./Header/Header";
import { HeaderRow } from "./HeaderRow";

const SHeaderCombinedWrapper = styled.div`
  padding: 1rem 1.5rem;
  background-image: linear-gradient(to bottom, transparent 80%, #182151 100%),
    url("header-bg-mobile.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: 768px) {
    padding: 2.25rem 3rem;
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
  hasPsychData,
  hasDiyalizData,
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
        hasPsychData={hasPsychData}
        hasDiyalizData={hasDiyalizData}
      />
    </SHeaderCombinedWrapper>
  );
};
