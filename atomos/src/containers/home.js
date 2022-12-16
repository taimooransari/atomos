import logo from '../assets/main-logo.jpeg';
import nameLogo from '../assets/name-logo.jpeg';
import fb from "../assets/fb.png";
import React from 'react';
import style from "../style/Home.module.css";
function HomeScreen() {
  return (
    <div className={style.main}>
      {/* <h1>Home</h1> */}
      <img src={logo} className={style.logo} alt="atomos-logo" />
      <img src={nameLogo} className={style.nameLogo} alt="name-logo" />
      <div className={style.bottomLinks}>

        <img src={fb} className={style.bottomIcon} alt="fb-logo" />
        <img src={fb} className={style.bottomIcon} alt="fb-logo" />
        <img src={fb} className={style.bottomIcon} alt="fb-logo" />
        <img src={fb} className={style.bottomIcon} alt="fb-logo" />
      </div>
    </div>
  );
}

export default HomeScreen;
