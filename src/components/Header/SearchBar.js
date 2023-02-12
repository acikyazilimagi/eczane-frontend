import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { BREAKPOINTS } from "../../utils/styled";

const SSearchBoxWrapper = styled.div`
  position: relative;
  flex-grow: 1;
`;

const SInput = styled.input`
  height: 100%;
  border-radius: 0.625rem;
  padding: 0.5rem;
  outline: none;
  border: 1px solid white;
  width: 90%;
  margin-left: 10%;
  font-size: 0.625rem;
  font-family: "SegoeUI";
  &::placeholder {
    font-family: "SegoeUI";
    font-size: 0.625rem;
  }
  @media ${BREAKPOINTS.MD.min} {
    font-size: 1.625rem;
    padding: 1.25rem 1.875rem 1.25rem 1.25rem;
    &::placeholder {
      font-size: 1.625rem;
    }
  }
`;

const SSearchIcon = styled.img`
  height: 0.75rem;
  width: 0.75rem;
  @media ${BREAKPOINTS.MD.min} {
    height: 2rem;
    width: 2rem;
  }
`;

const SNoStyleButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const SSearchIconWrapper = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  @media${BREAKPOINTS.MD.min} {
    right: 1.875rem;
  }
`;

function SearchBar() {
  const [input, setInput] = useState();
  const [filteredEczane, setfilteredEczane] = useState([]);
  const [eczaneData, setEczaneData] = useState();

  useEffect(() => {
    axios
      .get("https://eczaneapi.afetharita.com/api")
      .then((response) => {
        setEczaneData(response.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filteredEczane]);
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = eczaneData.filter((eczane) => {
        return eczane.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setfilteredEczane(results);
    } else {
      setfilteredEczane(eczaneData);
    }

    setInput(keyword);
  };

  return (
    <SSearchBoxWrapper>
      <SInput
        type="text"
        placeholder="Ara"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <SSearchIconWrapper>
        <SNoStyleButton>
          <SSearchIcon src="/search-icon.svg" />
        </SNoStyleButton>
      </SSearchIconWrapper>
    </SSearchBoxWrapper>
  );
}
export default SearchBar;
