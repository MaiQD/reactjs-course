import React from "react";

function Dropdown({ array }) {
  const style = {
    width: 150,
    borderRadius: "5px",
    height: "100%",
  };
  return (
    <div>
      <select style={style}>
        <option>Bộ lọc</option>
        {array.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
