import React from 'react';

const ErrorComponent = ({children}) => {
    return ( 
        <span className="error">
            {children}
        </span>
     );
}
 
export default ErrorComponent;