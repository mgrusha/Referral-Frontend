import React, { useState } from "react";
import styled from "styled-components";
import ReactSearchBox from "react-search-box";

const SearchBox = () => {
  const [data, setData] = useState([
    { key: "booking", value: "Booking.com" },
    { key: "uber", value: "uber.com" },
    { key: "airbnb", value: "airbnb.com" },
  ]);

  return (
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
  );
};

export { SearchBox };
