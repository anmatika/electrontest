import React from 'react';

const Error = ({ state }) => {

    if (!state.error || state.error === '') return null;
    
    return (
    <div>
        <h2>Error</h2>
        <span>{ state.error } </span>
    </div>);
 };

export default Error;