import React from 'react';

const Message = ({ state }) => {

    if (!state.message || state.message === '') return null;
    
    return (
    <div>
        <h2>Message</h2>
        <span>{ state.message } </span>
    </div>);
 };

export default Message;
