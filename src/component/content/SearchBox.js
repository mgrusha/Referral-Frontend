import React, { useState } from "react";
import styled from "styled-components";
import ReactSearchBox from "react-search-box";

const SearchBoxWrapper = styled.div`
  padding: 2rem 0;
  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

const StyledSearchBox = styled(ReactSearchBox)`
  position: absolute;
`;

const SearchBox = () => {
  const [data, setData] = useState([
    { key: "booking", value: "Booking.com" },
    { key: "uber", value: "uber.com" },
    { key: "airbnb", value: "airbnb.com" },
  ]);

  return (
    <SearchBoxWrapper>
      <ReactSearchBox
        placeholder="Search for service"
        data={data}
        autoFocus={true}
        onSelect={(record) => console.log("Selected!!", record)}
        onFocus={() => {
          console.log("Search is focused");
        }}
        //onChange={(value) => console.log(value)}
        fuseConfigs={{
          threshold: 0.4,
        }}
      />
    </SearchBoxWrapper>
  );
};

export { SearchBox };
