import React from "react";
import Logo from "../img/logo.svg"
import Search from "../img/search.svg"
import "./Bar.css"


function Bar() {
  return (
    <>
      <section className="container">
          <div className="contenedor1">
            <img src={Logo} alt="Logo" className="imagen"/>
          </div>
        <div className="contenedor2"  > 
            <input placeholder="find location" className="location"/>
            <input placeholder="Add guest" className="guest"/>
            <div className="search-box" >
              <img src={Search} alt="search-icon" />
            </div>  
        </div>
        
      </section>
    </>
  );
}
 
export default Bar;
