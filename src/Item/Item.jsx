import React from 'react'
import star from "../img/star-fill.svg"
import bicho from "../img/bicho.jpg"
import "./item.css"

function Item() {
    const type_room = ["SUPER HOST","Private room","Entire house"]
    const descrip = ["Entire apartment"]
  return (
    <>
    <div className='mainContainer'>
        <section className='containerOne'>
            <img src={bicho} alt="photos"  width="395px" height="269px" className='imagen'/>
        </section>
        <section className='containerTwo'>
            <div>{type_room[0]}</div>
            <div>{descrip[0]}</div>
            <div>beds 2 </div>
        <section className='containerThree'>
            <div>
                <img src={star} alt="Star" />
            </div>
            <div>
                <p>rate</p>
            </div>
        </section>
        </section>
        <section className='containerFour'>
            <p>Description here bla bla bla </p>
        </section>
    </div>
    </>
  )
}

export default Item