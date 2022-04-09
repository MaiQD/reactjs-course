import React from 'react';

function Dropdown({array}) {
    
    const style = {
        width: 150,
        borderRadius: '5px',
        padding: "10px 2px 10px 0px"
    }
    return (
        <div>
            <select style={style}>
                {array.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default Dropdown;