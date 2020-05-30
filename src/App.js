import React, {useState} from 'react';
import NameList from "./components/NameList"
import babyNamesData from './data/babyNamesData.json'
import SearchInput from './components/SearchInput'

import './App.css';
import SelectGender from './components/SelectGender';
import FavoriteNames from './components/FavoriteNames';

const  App = () => {

  babyNamesData.sort((a, b) => a.name.localeCompare(b.name))

  const [search, setSearch] = useState("");

  const [selectGender, setSelectGender] = useState("");

  const [favoriteNames, setFavoriteNames] = useState([]);

  let filtedData = babyNamesData




  if(selectGender === "f" || selectGender === "m"){ filtedData = babyNamesData.filter(baby => baby.sex === selectGender)}
  if(search){ filtedData = babyNamesData.filter(baby => baby.name.toLowerCase().includes(search.toLowerCase()))}


  if(search && (selectGender === "f" || selectGender === "m")){
    filtedData = babyNamesData.filter(baby => baby.sex === selectGender).filter(baby => baby.name.toLowerCase().includes(search.toLowerCase()))
  }

  if(favoriteNames){filtedData = filtedData.filter(  name => favoriteNames.indexOf( name ) < 0 )}





  return (
    <div className="App">
      <SearchInput setSearch = {setSearch}/>
      <SelectGender selectGender={selectGender} setSelectGender = {setSelectGender} />
      <FavoriteNames favoriteNames={favoriteNames} setFavoriteNames={setFavoriteNames}/>
      <div className="NameList">
        <NameList data = {filtedData} favoriteNames={favoriteNames} setFavoriteNames={setFavoriteNames}/>
      </div>
    </div>
  )
}


export default App;
