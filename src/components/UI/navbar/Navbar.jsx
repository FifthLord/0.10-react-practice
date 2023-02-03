import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
   return (
      <div className="navbar">
         <div className="navbar__links">
            <NavLink to="/about"> Про сайт</NavLink>
            <NavLink to="/posts"> Пости</NavLink>
         </div>
      </div>
   );
};

export default Navbar;