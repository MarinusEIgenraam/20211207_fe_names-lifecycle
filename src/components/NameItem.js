import React, {useEffect, useState} from 'react';
import './NameItem.css';

function NameItem({ activeName,setActiveName,name }) {
    const [colorNumber, setColorNumber] = useState();

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        setColorNumber(color);
    }

    function clickHandler() {
        setActiveName(name);
        console.log(name)
        console.log(colorNumber)
    }

    function kleurHandler() {
        getRandomColor();

    }

    useEffect(() => {
        console.log(`${name} is in de DOM geplaatst`);

    },[]);

    useEffect(() => {
        if (activeName == name) {

            console.log(`${name} wil graag een biertje bestellen`)
        }
    },[activeName]);

    return (
        <div   className="doos" style={{
                backgroundColor:`${colorNumber}`}}>
            <li>
                <h3>{name}</h3>
                <button onClick={clickHandler} type="button">
                    Geef een rondje!
                </button>
                <button onClick={kleurHandler} type="button">
                    Geef een kleurtje!
                </button>
            </li>
        </div>

);
}

export default NameItem;