import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Home.module.css'

export const Home = () => {
  return (
    <section className={styles.section1}>
    <div  className={styles.container}>
       <h1> Bienvenidos </h1>
       <div className={styles.containerDo}>
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
    </div>
    </section>
  )
}

export default Home
