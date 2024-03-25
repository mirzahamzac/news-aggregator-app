import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = ({ searchTerm, handleSearchChange, filters }) => {
  return (
    <TextField
      label="Search news"
      variant="outlined"
      value={searchTerm}
      onChange={(e) => handleSearchChange(e.target.value)}
      fullWidth
      margin="normal"
      disabled={filters === "" || filters === undefined ? true : false}
    />
  );
};

export default SearchBar;