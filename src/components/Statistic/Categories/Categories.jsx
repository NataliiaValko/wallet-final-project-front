import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import s from './Categories.module.css';
const Categories = () => {
  return (
    <div className={s.categories}>
      <FormControl component="fieldset">
        {/* <FormLabel component="legend"></FormLabel> */}
        <RadioGroup row aria-label="balance" name="row-radio-buttons-group">
          <FormControlLabel value="costs" control={<Radio />} label="Расходы" />
          <FormControlLabel value="incoming" control={<Radio />} label="Доходы" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Categories;
