import React from 'react'
import style from "../styles/Header.module.css";

function Header() {
  return (
    <div className={style.headersection}>
        <div className={style.container}>
            <div className="d-flex flex-column align-items-center">
                <div className="logo">
                    <img src="/logo.efdde25b.png" alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header