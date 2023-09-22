import React from "react";
import './App.css';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import Jeu from "./pages/jeu/Jeu";
import Reservation from "./pages/reservation/Reservation";
import Programme from "./pages/programme/Programme";
import Contact from "./pages/contact/contact";
import Darkhome from './pages/home/Darkhome';
import Masterclass from './components/masterclass/masterclass'
import Sidebar from './components/Sidebar/sidebar';
// import contact from './pages/home/Home';



function App()
 {
  return (
    <BrowserRouter>
     
     <Routes>
        <Route path='/' element={<Darkhome/>}></Route>
        <Route path='/Programme' element={<Programme/>}></Route>
        <Route path='/Reservation' element={<Reservation/>}></Route>
        <Route path='/Jeu' element={<Jeu/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    </BrowserRouter>
  )
  
 }

 export default App;


