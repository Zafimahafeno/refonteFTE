import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';


function App()
 {
  return (
    <BrowserRouter>
     
      <Home/>
    </BrowserRouter>
  )
  
 }

 export default App;


