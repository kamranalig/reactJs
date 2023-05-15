import React from 'react';
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.container}>
        <h1>KAMRAN ALI</h1>
        <span className={styles.technology}>MERN DEVELOPER</span>
        <div className={styles.detail}>
            <h6>🅱️ km775.ali@gmail.com</h6>
            <h6>📞 +923095543952</h6>
            <h6>🏠 Lahore/Pakistan</h6>
            <h6>🛂 Linkdin</h6>
            <h6>♎️ Github</h6>
        </div>
    </div>
  )
}

export default Header;