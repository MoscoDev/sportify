import React from 'react'
import style from "../styles/Header.module.css";
// import styles from "../styles/Container.module.css";

function Header() {
  return (
   
      <div className={style.headersection}>
        <div className={style.overlay}>
          <div className={style.imageContainer}>
            <div className="logo">
              <img src="/logo.efdde25b.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Header