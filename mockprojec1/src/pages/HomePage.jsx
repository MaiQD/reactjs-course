import React from 'react';
import Dropdown from '../components/Dropdown';
import ListBox from '../components/ListBox';
import TextBox from '../components/TextBox';

function HomePage() {
    const array = [
        "Smith",
        "Harry",
        "Lucy",
        "Ron"
    ]
    return (
        <div style={{width:"50vw", margin:"auto"}}>
            TextBox: <TextBox/> <hr/>
            ListBox: <ListBox array={array}/> <hr/>
            DropDown: <Dropdown array={array}/> <hr/>
        </div>
    );
}

export default HomePage;