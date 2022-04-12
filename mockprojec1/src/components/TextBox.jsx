import React from "react";
const textbox = {
  borderRadius: "5px",
  borderWidth: "thin",
  paddingLeft: "10px",
  width: "-webkit-fill-available",
  height: "-webkit-fill-available",
};
function TextBox() {
  return (
    <div style={{ width: 309 }}>
      <input type="text" placeholder="Tìm kiếm..." style={textbox} />
    </div>
  );
}

export default TextBox;
