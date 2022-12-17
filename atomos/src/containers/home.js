import logo from '../assets/main-logo.png';
// import nameLogo from '../assets/name-logo.jpeg';
import fb from "../assets/fb.png";
import React from 'react';
// import { Button } from "react-responsive-button";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
// import "react-responsive-button/dist/index.css";
import style from "../style/Home.module.css";
function HomeScreen() {
  const navigate = useNavigate();
  const registerUser = () => {
    navigate("/register");
  }

  return (
    <div className={style.main}>
      {/* <h1>Home</h1> */}
      <img src={logo} className={style.logo} alt="atomos-logo" />
      {/* <img src={nameLogo} className={style.nameLogo} alt="name-logo" /> */}
      {/* <div className="button-wrapper">
            <Button style={{ boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.5)" }}>
              Button with shadow
            </Button>
          </div> */}
      <Button variant="dark" size='lg' onClick={registerUser}>Register</Button>

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
