import React from 'react';
import ListBoxItem from './ListBoxItem';
function ListBox({array}) {
    return (
        <div style={{width:309, marginTop:15}}>
          {array.map(item => <ListBoxItem name={item} age={15} number={"0213123123"} />)}  
        </div>
    );
}

export default ListBox;