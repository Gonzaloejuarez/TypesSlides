import React,{useState, useEffect} from 'react'
import Punto from './Punto';
import {Link} from 'react-router-dom'
import { Slide } from '../../Utils/Data';
import styles from './SlideTwo.module.css'

const len = Slide.length -1

export const SlideTwo = ({slides}) => {
const [elemento, setElemento] = useState(0);
const length = slides.length

const prevButton = () => {
    setElemento(elemento === 0 ? length -1 : elemento -1)
}

const nextButton = () => {
    setElemento(elemento === length -1 ? 0 : elemento + 1)
}

useEffect(() => {
    const interval = setInterval(() => {
      setElemento(elemento === len ? 0 : elemento + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [elemento])

  return (
    <div >
        <Link to="/" className='link'>Volver</Link>
        <section className={styles.containertwo}>
        <span onClick={prevButton} className="botonIzquierdo">
            {"<"}
        </span>
        {
            slides.map((slide, index) => (
                <div
                className={index === elemento ? "slide abierto" : "slide"}
                >
                    {index === elemento &&
                        (
                            <img className='image' src={slide.img} alt="" />
                        )
                    }
                </div>
            ))
        }
        <span onClick={nextButton} className="botonDerecho">
            {">"}
        </span>
        <div className={styles.divPoint}>
            <Punto 
            elemento={elemento}
            slides={Slide}
            onclick={(elemento) => setElemento(elemento)}
            />
        </div>
        </section>
    </div>
  )
}

export default SlideTwo