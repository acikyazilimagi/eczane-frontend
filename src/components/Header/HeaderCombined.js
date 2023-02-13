import styled from "@emotion/styled";
import { BREAKPOINTS } from "../../utils/styled";
import { Header } from "./Header";
import { HeaderRow } from "./HeaderRow";
import "./style.css"

const SHeaderCombinedWrapper = styled.div`
  padding:  30px 80px;
  background-image: linear-gradient(to bottom,transparent 80%,#182151 100%),url("header-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media ${BREAKPOINTS.MD.min} {
    
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
      <div className="header-container"> 
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
    </SHeaderCombinedWrapper>
  );
};
