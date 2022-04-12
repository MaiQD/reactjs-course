import React from "react";
import Dropdown from "../components/Dropdown";
import ListBox from "../components/ListBox";
import TextBox from "../components/TextBox";

function HomePage() {
  const array = ["Smith", "Harry", "Lucy", "Ron"];
  return (
    <div
      style={{
        margin: "auto",
        width: 629,
        height: 477,
        backgroundColor: "#E3F6F5",
        borderRadius: "15px",
      }}
    >
      <h1>Project 1 - DatMQ1</h1>
      <div style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: 527,
            height: 40,
            margin: "auto",
          }}
        >
          <TextBox />
          <Dropdown array={array} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: 527,
            height: 40,
            margin: "auto",
          }}
        >
          <ListBox array={array} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
