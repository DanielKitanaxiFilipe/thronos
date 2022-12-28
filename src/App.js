import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './style/global.scss'
import Home from './pages/Home';
import Menu from './components/Menu';
import Dashbord from './pages/Dashbord';
import Documents from './pages/Documents';
import Residents from './pages/Residents';
import Announcements from './pages/Announcements';
import { All } from './pages/Complaint/Chains/All';
import { Chat } from './pages/Complaint/Chains/Chat';

function App() {
  return (<>
  <Router>
    <main className='d-flex'>
    <Menu/>
        <Routes>
          <Route path="/dashbord" element={<Dashbord/>}/>
          <Route path="/documents" element={<Documents/>}/>
          <Route path="/residents" element={<Residents/>}/>
          {/*Complaint*/}
          <Route path="/all" element={<All/>}/>
          <Route path="/chat" element={<Chat/>}/>
          {/*Complaint*/}
          <Route path="/announcements" element={<Announcements/>}/>
        </Routes>
    </main>
  </Router>
  </>);
}

export default App;
