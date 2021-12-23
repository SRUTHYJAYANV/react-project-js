import React from 'react';
import PropTypes from "prop-types";
import Input from '@mui/material/Input';


const InputComponent = ({id, name, type, placeholder, required, field}) => {
    return (
            <Input 
                className={`primary-input`} 
                type={type}
                id={id}
                placeholder={placeholder}
                {...field}
                name={name}
                required={required}
                />
    );
}


InputComponent.prototype ={
    placeholder: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    field: PropTypes.object,
}
InputComponent.defaultProps = {
    placeholder: "",
    type: null,
    id: "",
    name: "",
    required: false,
    field: {}
}
export default InputComponent;
