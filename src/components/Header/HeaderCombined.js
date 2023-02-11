import styled from "@emotion/styled";
import { BREAKPOINTS } from "../../utils/styled";
import { Header } from "./Header";
import { HeaderRow } from "./HeaderRow";

const SHeaderCombinedWrapper = styled.div`
  padding: 1rem 2.25rem;
  @media ${BREAKPOINTS.MD.min} {
    padding: 2.25rem 4.5rem;
  }
`;

export const HeaderCombined = () => {
  return (
    <SHeaderCombinedWrapper>
      <Header />
      <HeaderRow />
    </SHeaderCombinedWrapper>
  );
};
