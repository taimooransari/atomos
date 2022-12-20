import React from 'react';
import style from "../style/Home.module.css";
import Instructions from '../components/instructions';


function RegisterScreen() {
  return (
    <div className="Home">
      {/* <h1>Register</h1> */}

      <div className={style.registerbuttons}>
        <Instructions />
        <a href="registration.html" target="blank" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">REGISTER NOW!</a>
      </div>
    </div>
  );
}

export default RegisterScreen;
