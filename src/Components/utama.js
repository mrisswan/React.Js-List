import React from "react";
//import {Switch, Route} from "react-router-dom";
import {Routes, Route} from 'react-router-dom';

import Beranda from "./beranda";
import TentangSaya from "./tentangsaya"
import Karya from "./karya";
import Kontak from "./kontak";
import List from "./Pages/List";
import Gallery from "./Pages/Gallery";

const Utama = () => (
    <Routes>
        <Route path = "/list" element = {<List/>} />
        <Route exact path ="/beranda" element = {<Beranda/>} />
        <Route path = "/tentangsaya" element = {<TentangSaya/>} />
        <Route path = "/karya" element = {<Karya/>} />
        <Route path = "/kontak" element = {<Kontak/>} />
        <Route path = "/gallery" element = {<Gallery/>} />
    </Routes>
)
export default Utama