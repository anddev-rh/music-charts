import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/chart.module.css'

import { result} from './algorithm'
import { output } from "./api/algorithmGrades";

const Home: NextPage = () => {
  console.log(output);

  return (
    <div className={styles.chart}>
      <h3>Verse</h3>
      <div className={styles.system}>
        <div className={styles.measure}>
          <div className={styles.metric}>
            <p>4/4</p>
          </div>
          <p>C</p>
        </div>
        <div className={styles.measure}>
          <p>G</p>
        </div>
        <div className={styles.measure}>
          <p>Am</p>
          <p>Am6</p>
        </div>
        <div className={styles.measure}>
          <p>F</p>
        </div>
      </div>

      <div className={styles.system}>
        <div className={styles.measure}>

          <p>C</p>
        </div>
        <div className={styles.measure}>
          <p>G</p>
        </div>
        <div className={styles.measure}>
          <p>Am</p>
          <p>Am6</p>
        </div>
        <div className={styles.measure}>
          <p>F</p>
        </div>
      </div>
    </div>
  )
}

export default Home
