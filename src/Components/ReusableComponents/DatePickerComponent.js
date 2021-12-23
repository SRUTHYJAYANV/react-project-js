import * as React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const DatePickerComponent = ({name, field, onChange}) => {

  return ( 
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={name}
        name={name}
        id={name}
        {...field}
        minDate={new Date()}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

DatePickerComponent.prototype ={
    id: PropTypes.string,
    name: PropTypes.string,
    field: PropTypes.object,
    onchange: PropTypes.func,
}
DatePickerComponent.defaultProps = {
    id: "",
    name: "",
    field: {},
    onChange: () => {}
}

export default DatePickerComponent;