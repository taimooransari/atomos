import atomosLogo from '../assets/atomos.png';
import atomosNameLogo from '../assets/atomos-name.png';
import csecLogo from '../assets/csec.png';
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
          <img src={atomosNameLogo} className={style.nameLogo} alt="name-atomos" />
          <p className={style.desc}>ATOMOS is Habib University's flagship Science Olympiad that is back with a new twist. ATOMOS covers a wide variety of subjects which are not just limited to the field of science. This event is structured to have individual modules having their background from one or multiple streams which include but are not limited to the Natural Sciences, Mathematics, Arts, Logic, Engineering, and Programming. The 3-day event is planned to take place on February 3rd, 4th and 5th.</p>
        </div>

        <div className={style.subSection}>

          <img src={csecLogo} className={style.logo} alt="cses-logo" />
          <img src={csecNameLogo} className={style.nameLogo} alt="name-cses" />
          <p className={style.desc}>Computer Science and Engineering Club (CSEC) Is Habib University’s leading student-led club providing students with a platform to become potent contributors to Pakistan’s Science and Research output by harmonizing scientific research within the university, facilitating the student body in their research, streamlining and synchronizing research content and facilities by disambiguation and reduction of the divide between different branches of science.</p>
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
