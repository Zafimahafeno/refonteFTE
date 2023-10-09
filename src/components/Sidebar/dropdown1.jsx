import React,{useState} from "react";
import './Dropdown.css';
import {Link} from 'react-router-dom';



const Dropdown1 = () =>{
    const [click, setClick] = useState(false);
    const handleClick = () => setClick (!click);

    return(
        <>
           <ul onClick={handleClick} 
            className={ click? 'dropdown-menu clicked' : 'dropdown-menu'}>
                <li>
                <Link
                  to="/Jeu"
                  className="dropdown-link"
                  onClick={setClick}
                >
                  Jeux 
                </Link>
              </li>
              <li>
                <Link
                  to="/Hackathon"
                  className="dropdown-link"
                  onClick={setClick}
                >
                  Hackathon
                </Link>
              </li>

           </ul>
        </>
    )

}
export default Dropdown1;