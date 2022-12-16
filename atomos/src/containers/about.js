import atomosLogo from '../assets/main-logo.jpeg';
import atomosNameLogo from '../assets/name-logo.jpeg';
import csecLogo from '../assets/csec.jpeg';
import csecNameLogo from '../assets/csec-name.png';

import fb from "../assets/fb.png";
import React from 'react';
import style from "../style/About.module.css";

function AboutScreen() {
  return (
    <div className={style.main}>
      <div className={style.section}>
        <h2 className={style.heading}>About us</h2>
        <div className={style.subSection}>

          <img src={atomosLogo} className={style.logo} alt="atomos-logo" />
          <img src={atomosNameLogo} className={style.nameLogo} alt="name-logo" />
          <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi ac lorem et nulla cursus accumsan a id sapien. Mauris in
            condimentum magna. Proin suscipit risus sed vestibulum cursus.
            Sed in mollis nisl. Donec at lorem tortor. Proin felis purus,
            bibendum eget semper quis, sodales non mauris. Donec sit amet tortor eu
            turpis pharetra luctus eget aliquam nulla. Ut facilisis ligula erat, at
            bibendum metus iaculis et. Ut blandit vitae velit fermentum fringilla.
            Mauris a metus blandit, finibus arcu id, vehicula sem. Fusce vestibulum dignissim
            turpis a condimentum. Sed tincidunt pellentesque metus, non malesuada enim tempor in.
            Duis eget lectus eget sapien tincidunt placerat non nec velit</p>
        </div>

        <div className={style.subSection}>

          <img src={csecLogo} className={style.logo} alt="atomos-logo" />
          <img src={csecNameLogo} className={style.nameLogo} alt="name-logo" />
          <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi ac lorem et nulla cursus accumsan a id sapien. Mauris in
            condimentum magna. Proin suscipit risus sed vestibulum cursus.
            Sed in mollis nisl. Donec at lorem tortor. Proin felis purus,
            bibendum eget semper quis, sodales non mauris. Donec sit amet tortor eu
            turpis pharetra luctus eget aliquam nulla. Ut facilisis ligula erat, at
            bibendum metus iaculis et. Ut blandit vitae velit fermentum fringilla.
            Mauris a metus blandit, finibus arcu id, vehicula sem. Fusce vestibulum dignissim
            turpis a condimentum. Sed tincidunt pellentesque metus, non malesuada enim tempor in.
            Duis eget lectus eget sapien tincidunt placerat non nec velit</p>
        </div>



      </div>
      <div className={style.bottomLinks}>

        <img src={fb} className={style.bottomIcon} alt="fb-logo" />
        <img src={fb} className={style.bottomIcon} alt="fb-logo" />
        <img src={fb} className={style.bottomIcon} alt="fb-logo" />
        <img src={fb} className={style.bottomIcon} alt="fb-logo" />
      </div>
    </div>
  );
}

export default AboutScreen;
