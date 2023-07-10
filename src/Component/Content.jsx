import React, { useState } from 'react';
const Content = () => {
    const [text, setText] = useState('');

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleClick = (text) => {
        return text;


    };

    return (
        <div>
            <textarea onChange={handleInputChange}></textarea>
            <button onClick={handleClick}>Submit</button>
            <p>{text}</p>
        </div>
    );
};
export default Content;