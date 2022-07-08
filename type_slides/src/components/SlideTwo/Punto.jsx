import React from 'react';
import styles from './SlideTwo.module.css';


export const Punto = ({elemento, slides, onclick}) => {
  return (
    <div className={styles.puntoContainer}>
    {slides.map((slide, index) => (
        <span
        key={index}
        className={elemento === index ? "punto pactivado" : "punto"}
        onClick={() => onclick(index)}
        ></span>
    ))}
</div>
  )
}

export default Punto
