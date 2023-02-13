import styled from "@emotion/styled";
import { BREAKPOINTS } from "../../utils/styled";

export const SHeaderRowWrapper = styled.div``;

export const SFlex = styled.div`
  min-height: 1.875rem;
  display: flex;
  justify-content: space-between;

  & > *:not(:last-child) {
    margin-right: 1.825rem;
  }
`;

export const SButton = styled.button`
  background-color: ${(props) => (props.selected ? "F83B3B" : "#fff")};
  padding: 0.5rem;
  color: ${(props) => (props.selected ? "#fff" : "#111A42")};
  border: none;
  font-size: 0.75rem;
  cursor: pointer;
  font-family: SegoeUI, sans-serif;

  @media ${BREAKPOINTS.MD.min} {
    padding: 1rem 1.5rem;
    font-size: 1.75rem;
  }
`;

export const SSearchButton = styled(SButton)`
  padding: 0.5rem 1rem;

  &:first-of-type {
    border-radius: 0.625rem 0 0 0.625rem;
  }

  &:last-of-type {
    border-radius: 0 0.625rem 0.625rem 0;
  }
`;

export const SToggleGroup = styled.div`
  display: flex;
`;

export const SFilterWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${BREAKPOINTS.MD.min} {
  }
`;

export const SFilterFlex = styled.div`
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

export const SFilterButton = styled(SButton)`
  border-radius: 0.625rem;
  color: ${(props) => (props.buttonDisabled ? "#888" : "#fff")};
  background-color: ${(props) => (props.selected ? "#F83B3B" : "unset")};
  flex-grow: 1;
  cursor: ${(props) => (props.buttonDisabled ? "not-allowed" : "pointer")};
`;

export const SFilterIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0.75rem;
  @media ${BREAKPOINTS.MD.min} {
    margin: 0 1.5rem;
  }
`;

export const SFilterSvg = styled.img`
  height: 0.75rem;
  width: 0.75rem;
  @media ${BREAKPOINTS.MD.min} {
    height: 2rem;
    width: 2rem;
  }
`;

export const SFilterNextRowWrapper = styled.div`
  margin-top: 1rem;
  @media ${BREAKPOINTS.MD.min} {
    margin-top: 2rem;
  }
`;
