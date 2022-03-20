import React from "react";
import Utama from "./Components/utama";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {Routes, Route} from 'react-router-dom';
import List from "./Components/Pages/List";

class App extends React.Component{
  render(){
    return(
      <div>
        <Link to="/list">List |</Link>   
        <Link to="/beranda">Beranda |</Link>
        <Link to="/tentangsaya">Tentangsaya |</Link>
        <Link to="/karya">Karya |</Link>
        <Link to="/kontak">Kontak |</Link>
        <Link to="/gallery">Gallery</Link>
        {/* <p>Utama</p> */}
        <Utama/>
      </div>
    )
  }
}
export default App;