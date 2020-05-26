import React from 'react';
import NameList from "./components/NameList"
import babyNamesData from './data/babyNamesData.json'

import './App.css';

const  App = () => {
  babyNamesData.sort((a, b) => a.name.localeCompare(b.name))


  return (
    <div className="App">
      <div className="NameList">
        <NameList data = {babyNamesData}/>
      </div>
    </div>
  )
}


export default App;
