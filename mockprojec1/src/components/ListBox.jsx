import React from 'react';

function ListBox({array}) {
    return (
        <div>
          {array.map(item => <li key={item}>{item}</li>)}  
        </div>
    );
}

export default ListBox;