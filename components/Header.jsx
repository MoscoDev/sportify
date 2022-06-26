import Image from "next/image";
import React from "react";
import style from "../styles/Header.module.css";

function Header() {
  return (
    <div className={style.headersection}>
      <div className={style.overlay}>
        <div className={style.imageContainer}>
          <div className={style.logo}>
            <picture>
              <img src="/logo.efdde25b.png" alt="sportify logo" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
