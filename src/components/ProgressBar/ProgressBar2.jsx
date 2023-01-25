import React from 'react'
import styles from "./style.module.css";

export const ProgressBar2 = ({now, label}) => {
  return (
    <div className={styles.progressContainer}>
        <span
            className={styles.bar}
            style={{width:`${now}%`}}
        >
        </span>
        <span
            className={styles.number}
        >
            {label} %
        </span>
    </div>
  )
}


