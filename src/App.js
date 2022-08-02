import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Person from './Components/Person';
import Home from './Components/Home';

function App() {
  /*Creación de las rutas: Home y /:id*/
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Person/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
