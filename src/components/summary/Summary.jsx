import React from 'react';
import styles from "./Summary.module.scss";
const Summary = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.heading}>SUMMARY</h2>
        <div className={styles.horizrntal_line}></div>
        <p className={styles.summary}>
            Software Engineer with experience in all levels of testing,
            including performance, functional, integration, system,
            regression, and user acceptance testing. Supportive and 
            enthusiastic team player dedicated to streamlining processes
            and efficiently resolving project issues.
        </p>

    </div>
  )
}

export default Summary;