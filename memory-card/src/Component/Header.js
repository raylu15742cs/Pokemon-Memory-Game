import React from "react";
import Tracker from "./Tracker"
// this will file will handle header


function Header () {
     return (
       <div className="header">
         <div className="leftheader">
           <h1>Pokemon Memory Game</h1>
           <p>
             Get points by clicking on an image but don't click on any more than
             once!
           </p>
         </div>
         <div className="rightHeader">
           <Tracker />
         </div>
       </div>
     )
}

export default Header;