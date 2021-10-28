import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
   render() {
      return (
         <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <Link className="navbar-brand" to="/">
                  Vidly
               </Link>
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                     <NavLink className="nav-item nav-link active" to="/movies">
                        Movies
                     </NavLink>
                     <NavLink className="nav-item nav-link" to="/customers">
                        Customers
                     </NavLink>
                     <NavLink className="nav-item nav-link" to="/rentail">
                        Rentail
                     </NavLink>
                  </div>
               </div>
            </nav>
         </div>
      );
   }
}
