import React from "react";
import './App.css';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import Jeu from "./pages/jeu/Jeu";
import Reservation from "./pages/reservation/Reservation";
import Programme from "./pages/programme/Programme";
import Darkhome from './pages/home/Darkhome';
import Hackathon from "./pages/jeu/Hackathon";
import Partenariat from "./pages/partenaire/Partenaire";





function App()
 {
  return (
    <BrowserRouter>
     
     <Routes>
        <Route path='/' element={<Darkhome/>}></Route>
        <Route path='/Programme' element={<Programme/>}></Route>
        <Route path='/Reservation' element={<Reservation/>}></Route>
        <Route path='/Jeu' element={<Jeu/>}></Route>
        <Route path='/Hackathon' element={<Hackathon/>}></Route>
        <Route path='/Partenariat' element={<Partenariat/>}></Route>
        </Routes>
    </BrowserRouter>
  )
  
 }

 export default App;


