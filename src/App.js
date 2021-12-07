import React, {useEffect, useState} from 'react';
import NameItem from './components/NameItem';
import './App.css';

function App() {
    const [activeName, setActiveName] = useState('');



    useEffect(() => {
        console.log('We gaan beginnen!')
    },[]);
  return (
    <>
        <div className="container">

            <h1>Het laatste rondje is gegeven door: <span className="header-name">{activeName}</span></h1>
            <ul>
                <NameItem activeName={activeName} setActiveName={setActiveName} name="Henk" />
                <NameItem activeName={activeName} setActiveName={setActiveName} name="Piet" />
                <NameItem activeName={activeName} setActiveName={setActiveName} name="Jan" />
            </ul>
        </div>
    </>
  );
}

export default App;
