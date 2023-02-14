import styled from "@emotion/styled";
import { BREAKPOINTS } from "../../utils/styled";

export const SPaper = styled.div`
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  margin-bottom: 1.5rem;
  @media ${BREAKPOINTS.MD.min} {
    margin-bottom: 3rem;
  }
`;

export const SButton = styled.button`
  width: 30px;
  height: 30px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  pointer-events: auto;
  cursor: pointer;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  display: block;
  border: 2px solid rgba(0, 0, 0, 0.2);
`;

export const SMapContainer = styled.div`
  display: flex;
  height: 500px;
  border-radius: 17px;
  position: relative;
  @media ${BREAKPOINTS.MD.min} {
    padding: 0 3rem;
  }
`;
