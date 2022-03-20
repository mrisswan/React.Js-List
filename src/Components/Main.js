import List from './Pages/List';
import {Routes, Route} from 'react-router-dom';
import Gallery from './Pages/Gallery';

const List = () => (
    <Routes>
        <Route path = "/list" element = {<List/>} />
        <Route path="/gallery" element={Gallery} />
        <Route exact path ="/beranda" element = {<Beranda/>} />
        <Route path = "/tentangsaya" element = {<TentangSaya/>} />
        <Route path = "/karya" element = {<Karya/>} />
        <Route path = "/kontak" element = {<Kontak/>} />
    </Routes>
)