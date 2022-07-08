import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './SlideOne.css'

export const SlideOne = ({slides}) => {
 const [elemento, setElemento] = useState(0);
 const length = slides?.length
   
 const prevImg = () => {
    setElemento(elemento === 0 ? length -1 : elemento -1);
 }

 const nextImg = () => {
    setElemento(elemento === length - 1 ? 0 : elemento + 1);
 }

  return (
    <div>
        <Link to='/' >
            Volver
        </Link>
    <section className='container'>
        <span onClick={prevImg} className="botonIzquierdo">
        {"<"}
        </span>
        {
            slides.map((slide,index) => (
                
                <div
                className={index === elemento ? "slide abierto" : " slide "}
                >
                    { index === elemento && (
                        <img src={slide.img} alt="" className='image'/>
                        )
                    }
                </div>
            ))
        }
        <span onClick={nextImg} className="botonDerecho">
        {">"}
        </span>
    </section>
    </div>
  )
}

export default SlideOne