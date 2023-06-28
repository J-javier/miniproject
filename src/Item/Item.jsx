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
            <div className='type'>{type_room[0]}</div>
            <div className='grey'>{descrip[0]}</div>
            <div className='grey'>beds 2 </div>
        <section className='containerThree'>
            <div className='rango'>
                <img src={star} alt="Star" />
            </div>
            <div>
                <p className='rango'>rate</p>
            </div>
        </section>
        </section>
        <section className='containerFour'>
            <p className='greyTwo'>Description here bla bla bla </p>
        </section>
    </div>
    </>
  )
}

export default Item