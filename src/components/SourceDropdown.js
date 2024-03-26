import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SourceDropdown = ({ handleFilterChange ,setNews }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Select Source</InputLabel>
      <Select
        label="Filter by"
        onChange={(e) => {
          setNews([])
          handleFilterChange('filterType', e.target.value)
      }}
        defaultValue=""
      >
      
        <MenuItem value="news_api_org">NewsAPI.org</MenuItem>
        <MenuItem value="ny_times">New York Times</MenuItem>
        <MenuItem value="guardian">The Guardian</MenuItem>
      </Select>
    </FormControl>
  );
};
export default SourceDropdown;