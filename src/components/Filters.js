import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import "react-datepicker/dist/react-datepicker.css";
const Filters = ({
  handleFilterChange,
  categories,
  sources,
  onFilterChange,
}) => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [catValue, setCatValue] = React.useState();
  const [sourceValue, setSourceValue] = React.useState();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <InputLabel>Filter by</InputLabel>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              {" "}
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  className="form-control"
                  onChange={onFilterChange}
                  name="category"
                  value={catValue}
                  disabled={categories && categories.length > 0 ? false : true}
                >
                  <MenuItem>All Categories</MenuItem>
                  {categories &&
                    categories.length > 0 &&
                    categories.map((category) => (
                      <MenuItem
                        key={category}
                        value={category}
                        onClick={() => setCatValue(category)}
                      >
                        {category}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              {" "}
              <FormControl fullWidth>
                <InputLabel>Source</InputLabel>

                <Select
                  className="form-control"
                  onChange={onFilterChange}
                  name="source"
                  disabled={sources && sources.length > 0 ? false : true}
                  value={sourceValue}
                >
                  <MenuItem value="">All Sources</MenuItem>
                  {sources &&
                    sources.length > 0 &&
                    sources.map((source) => (
                      <MenuItem key={source} value={source} onClick={()=>setSourceValue(source)}>
                        {source}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Item>
          </Grid>
          {/* <Grid item xs={4}>
            <Item>
              <FormControl fullWidth>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </FormControl>
            </Item>
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};
export default Filters;
