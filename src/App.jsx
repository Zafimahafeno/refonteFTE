import React from "react";
import './App.css';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import Jeu from "./pages/jeu/Jeu";
import Reservation from "./pages/reservation/Reservation";
import Programme from "./pages/programme/Programme";
import Darkhome from './pages/home/Darkhome';
<<<<<<< HEAD
// import Masterclass from './components/masterclass/masterclass'
// import Sidebar from './components/Sidebar/sidebar';
import ReservationMasterClass from "./pages/reservation/ReservationMasterClass";
// import contact from './pages/home/Home';
=======
import Hackathon from "./pages/jeu/Hackathon";
import Partenariat from "./pages/partenaire/Partenaire";


>>>>>>> e45f4ef13f9dc236df580be24f14abc728c6fba8



function App()
 {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Darkhome/>}></Route>
        <Route path='/Programme' element={<Programme/>}></Route>
        <Route path='/Reservation' element={<ReservationMasterClass/>}></Route>
        <Route path='/Jeu' element={<Jeu/>}></Route>
<<<<<<< HEAD
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/test' element={<Reservation/>}></Route>
      </Routes>
=======
        <Route path='/Hackathon' element={<Hackathon/>}></Route>
        <Route path='/Partenariat' element={<Partenariat/>}></Route>
        </Routes>
>>>>>>> e45f4ef13f9dc236df580be24f14abc728c6fba8
    </BrowserRouter>
  )
  
 }

 export default App;