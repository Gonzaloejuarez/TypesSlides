import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Home.module.css'

export const Home = () => {
  return (
    <div  className={styles.container}>
       <h1> Bienvenidos </h1>
        <div className={styles.gridContainer}>
            <section className={styles.firstSlide}>
                <Link to='/slideOne'className={styles.links} >
                Primer Slide
                </Link>
            </section>
            <section className={styles.secondSlide}>
                <Link to='/slideTwo'className={styles.links} >
                Segundo slide
                </Link>
            </section>
        </div>
    </div>
  )
}

export default Home
