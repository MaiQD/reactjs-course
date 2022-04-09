import React from 'react';
const textbox =  {
    padding: "5px 2px 5px 0px"
}
function TextBox() {
    return (
        <div>
            <input type="text" style={textbox} />
        </div>
    );
}

export default TextBox;