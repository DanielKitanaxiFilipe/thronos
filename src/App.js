import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './style/global.scss'
import Home from './pages/Home';
import Dashbord from './pages/Dashbord';
import Eclisiastico from './pages/Organizacao/Eclisiastico';
import Celulas from './pages/Organizacao/Celulas';
import Departamento from './pages/Organizacao/Departamento';


function App() {
  return (<>
  <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashbord" element={<Dashbord/>}/>
          <Route path="/eclisiastico" element={<Eclisiastico/>}/>
          <Route path="/celulas" element={<Celulas/>}/>
          <Route path="/departamento" element={<Departamento/>}/>
        </Routes>
  </Router>
  </>);
}

export default App;
