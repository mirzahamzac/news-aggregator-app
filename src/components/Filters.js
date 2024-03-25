import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Filters = ({ handleFilterChange  }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Filter by</InputLabel>
      <Select
        label="Filter by"
        onChange={(e) => handleFilterChange('filterType', e.target.value)}
        defaultValue=""
      >
        <MenuItem value="">None</MenuItem>
        {/* Add filter options dynamically */}
        <MenuItem value="date">Date</MenuItem>
        <MenuItem value="category">Category</MenuItem>
        <MenuItem value="source">Source</MenuItem>
      </Select>
    </FormControl>
  );
};
export default Filters;