import React from 'react';

const person = (props) => {
    return ( 
    <div>
        <p>{props.children}</p>
    </div>
    )
};

export default person;