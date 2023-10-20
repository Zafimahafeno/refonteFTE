import React from "react";
import './App.css';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import Jeu from "./pages/jeu/Jeu";
import Jeux from "./pages/jeu/Jeux";
import Reservation from "./pages/reservation/Reservation";
import Programme from "./pages/programme/Programme";
import Darkhome from './pages/home/Darkhome';
import Hackathon from "./pages/jeu/Hackathon";
import Partenariat from "./pages/partenaire/Partenaire";
import PartenaireForm from "./pages/partenaire/PartenaireForm";
import Stand from "./pages/reservation/Stand";
import ParticipeHackaton from "./pages/jeu/ParticipeHackaton";
import ReservationMasterClass from "./pages/reservation/ReservationMasterClass";
import ModalPage from "./pages/reservation/modal/Modalpage";

function App()
 {
  return (
    <BrowserRouter>
     
     <Routes>
        <Route path='/' element={<Darkhome/>}></Route>
        <Route path='/Programme' element={<Programme/>}></Route>
        <Route path='/Reservation' element={<Reservation/>}></Route>
        <Route path='/Jeu' element={<Jeu/>}></Route>
        <Route path='/Jeux' element={<Jeux/>}></Route>
        <Route path='/Hackathon' element={<Hackathon/>}></Route>
        <Route path='/Partenariat' element={<Partenariat/>}></Route>
        <Route path='/PartenaireForm' element={<PartenaireForm/>}></Route>
        <Route path='/Stand' element={<Stand/>}></Route>
        <Route path='/ParticipeHackaton' element={<ParticipeHackaton/>}></Route>
        <Route path='/ReservationMasterClass' element={<ReservationMasterClass/>}></Route>
        <Route path='/ModalPage' element={<ModalPage/>}></Route>
        </Routes>
    </BrowserRouter>
  )
  
 }

 export default App;


