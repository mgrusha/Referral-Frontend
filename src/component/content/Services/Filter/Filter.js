import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import InputAdornment from "@material-ui/core/InputAdornment";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Button } from "@material-ui/core";

const FilerContainer = styled.div`
  display: none;
  width: 40%;
  padding: 1rem 2rem;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  & > div {
    margin-bottom: 1.5rem;
  }
`;

const FilterArea = ({ services, setServices }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [starRate, setStarRate] = useState(0);
  const [sort, toogleSort] = useState();

  useEffect(
    () =>
      setServices(
        services
          .filter(
            (service) =>
              service.name.toLowerCase().includes(nameFilter) &&
              service.rating >= starRate
          )
          .sort((a, b) => {
            return sort
              ? b.name.localeCompare(a.name)
              : a.name.localeCompare(b.name);
          })
      ),
    [nameFilter, starRate, sort]
  );

  return (
    <FilerContainer>
      <div>
        <Button component="legend" onClick={() => toogleSort(!sort)}>
          Sort by name {sort ? <ArrowUpward /> : <ArrowDownward />}
        </Button>
      </div>
      <div>
        <TextField
          id="filter-by-name"
          label="Filter by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div>
        <Typography component="legend">Select minimal rating</Typography>
        <Rating
          name="customized-empty"
          value={starRate}
          precision={0.5}
          onChange={(e, currentValue) => setStarRate(currentValue)}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </div>
      <div>
        <Button
          variant="outlined"
          onClick={() => {
            setStarRate(0);
            setNameFilter("");
          }}
        >
          Reset filters
        </Button>
      </div>
    </FilerContainer>
  );
};

export { FilterArea };
