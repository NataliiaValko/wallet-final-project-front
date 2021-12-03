import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';

const PeriodRange = () => {
  const [value, setValue] = React.useState([null, null]);
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DateRangePicker
            startText="Период С"
            endText="Период ПО"
            value={value}
            onChange={newValue => {
              setValue(newValue);
              console.log(newValue[0]);
              console.log(newValue[0].getFullYear());
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
};

export default PeriodRange;
