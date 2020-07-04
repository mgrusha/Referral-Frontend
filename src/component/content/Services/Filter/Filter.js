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
import { useSetRecoilState } from "recoil";
import { starRate, nameFilter, sort } from "../../../../store/atoms";

const FilerContainer = styled.div`
  display: none;
  width: 40%;
  max-width: 300px;
  padding: 1rem 2rem;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  & > div {
    margin-bottom: 1.5rem;
  }
`;

const FilterArea = () => {
  const [rate, setRate] = useState(0);
  const [name, setName] = useState("");
  const [sorting, setSorting] = useState({
    order: "none",
    howToSort: (a, b) => {},
  });
  const setStarRate = useSetRecoilState(starRate);
  const setNameFilter = useSetRecoilState(nameFilter);
  const setSort = useSetRecoilState(sort);

  useEffect(() => {
    setStarRate(rate);
    setNameFilter(name);
    setSort(sorting);
  }, [rate, name, sorting]);

  const handleSort = () => {
    if (sorting.order === "asc") {
      setSorting({
        order: "desc",
        howToSort: (a, b) => b.name.localeCompare(a.name),
      });
    } else {
      setSorting({
        order: "asc",
        howToSort: (a, b) => a.name.localeCompare(b.name),
      });
    }
  };

  let sortIcon = (order) => {
    switch (order) {
      case "none":
        return "";
      case "desc":
        return <ArrowDownward />;
      case "asc":
        return <ArrowUpward />;
    }
  };

  return (
    <FilerContainer>
      <div>
        <Button component="legend" onClick={handleSort}>
          Sort by name
          {sortIcon(sorting.order)}
        </Button>
      </div>
      <div>
        <TextField
          id="filter-by-name"
          label="Filter by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={rate}
          precision={0.5}
          onChange={(e, currentValue) => setRate(currentValue)}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </div>
      <div>
        <Button
          variant="outlined"
          onClick={() => {
            setRate(0);
            setName("");
            setSorting({ order: "none", howToSort: (a, b) => {} });
          }}
        >
          Reset filters
        </Button>
      </div>
    </FilerContainer>
  );
};

export { FilterArea };
