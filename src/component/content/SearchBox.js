import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const SearchBoxWrapper = styled.div`
  padding: 2rem 0;
  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

const SearchField = styled.input`
  padding: 10px 20px;
  border-radius: 5px;
  font-family: var(--main-font-family);
  font-size: 1rem;
  border: 1px solid #cacaca96;
  width: 100%;
`;

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      if (searchValue !== "") {
        history.push({
          pathname: `/service/${searchValue}`,
        });
      }
    }
  };

  return (
    <SearchBoxWrapper>
      <SearchField
        type="text"
        placeholder="Search for service"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </SearchBoxWrapper>
  );
};

export { SearchBox };
