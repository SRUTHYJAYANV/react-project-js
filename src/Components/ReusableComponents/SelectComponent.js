import React from 'react';
import PropTypes from "prop-types";
import {Select, MenuItem} from '@mui/material';

const SelectComponent = ({id, name, field, options}) => {
    return ( 
        <Select
        className={`primary-input`}
        id= {id} 
        name={name} 
        {...field}
      >
        {options.map(option => {
            return(
                <MenuItem value={option.value} key={option.value}>{option.name}</MenuItem>
            )
        })}
      </Select>
     );
}
 
SelectComponent.prototype ={
    id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.object,
    field: PropTypes.object,
}
SelectComponent.defaultProps = {
    id: "",
    name: "",
    options: {},
    field: {}
}

export default SelectComponent;