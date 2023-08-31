import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import {HiMenuAlt1} from 'react-icons/hi';
import * as AiIcons from 'react-icons/ai';
import './sidebar.css'; // Assurez-vous que le chemin du fichier CSS est correct

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className={`sidebar ${sidebar ? 'active' : ''}`}>
          <Link to='#' className={`menu-bars ${sidebar ? 'active' : ''}`} onClick={showSidebar}>
              <HiMenuAlt1/>
              <p>Menu</p>
          </Link>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <div className='navbar-toggle'>
              <Link to='#' className='menu-bars' onClick={showSidebar}>
                <AiIcons.AiOutlineClose  />
              </Link>
            </div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        </div>
        
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
