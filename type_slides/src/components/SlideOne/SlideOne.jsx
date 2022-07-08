import React, { useState } from 'react'
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
    <section className='container'>
        <span onClick={prevImg}>
        {"<"}
        </span>
        {
            slides.map((index) => (
                <div>
                    <img src={index.img} alt="" />
                </div>
            ))
        }
        <span onClick={nextImg}>
        {">"}
        </span>
    </section>
  )
}

export default SlideOne