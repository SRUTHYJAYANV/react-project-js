import React from 'react';
import PropTypes from "prop-types";
import Button from '@mui/material/Button';

const ButtonComponent = ({ name, type, disabled, onClick, variant }) => {
    return (
        <Button
            type={type}
            className={`CustomButton regular-btn`}
            disabled={disabled}
            onClick={onClick}
            variant={variant}
        >
            {name}
        </Button>
    );
};

ButtonComponent.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    variant: PropTypes.string
};

ButtonComponent.defaultProps = {
    name: "",
    type: null,
    disabled: false,
    onClick: () => {},
    variant: "contained"
};

export default ButtonComponent;