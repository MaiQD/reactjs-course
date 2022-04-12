import React from 'react';

function ListBoxItem({ name, age, number }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white", marginTop: "15px", borderRadius: "10px", textAlign: "left", paddingLeft: "15px", padding: "5px 0px 5px 15px"
        }}>
            <b>{name}</b>
            <span style={{ fontSize: 12 }}>{age} tuổi</span>
            <span style={{ fontSize: 12 }}>{number}</span>
        </div>
    );
}

export default ListBoxItem;