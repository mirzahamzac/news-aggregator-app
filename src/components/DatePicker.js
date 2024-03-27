import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue({ value ,handleDateChange, label}) {
 // const [value, setValue] = React.useState(dayjs(new Date().toString("DD/MM/YYYY")));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    
        <DatePicker
          label={label}
          value={value}
          onChange={handleDateChange}
        />
     
    </LocalizationProvider>
  );
}