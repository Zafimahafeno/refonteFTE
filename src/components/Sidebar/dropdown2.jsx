import React,{useState} from "react";
import './Dropdown.css';
import {Link} from 'react-router-dom';



const Dropdown2 = () =>{
    const [click, setClick] = useState(false);
    const handleClick = () => setClick (!click);

    return(
        <>
           <ul onClick={handleClick} 
            className={ click? 'dropdown-menu clicked' : 'dropdown-menu'}>
                <li>
                <Link
                  to="/Reservation"
                  className="dropdown-link"
                  onClick={setClick}
                >
                  Resérvation 
                </Link>
              </li>
              <li>
                <Link
                  to="/Partenariat"
                  className="dropdown-link"
                  onClick={setClick}
                >
                  Partenariat
                </Link>
              </li>

           </ul>
        </>
    )

}
export default Dropdown2;