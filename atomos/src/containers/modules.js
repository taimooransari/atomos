import React from 'react';
import { IconContext } from 'react-icons';
import { MdEmail as Email } from 'react-icons/md';
import { BsFacebook as Fb } from 'react-icons/bs';
import { AiFillInstagram as Ig } from "react-icons/ai";
import { BsFillTelephoneFill as Phone } from 'react-icons/bs';
import style from '../style/Modules.module.css'

function modules() {
  return (
    <div>
      <div className={style.bottomLinks}>
        <IconContext.Provider
          value={{ color: 'black', size: '30px' }}
        >
          <div className={style.bottomIcon} >
            <a href='https://www.facebook.com/huatomos/?mibextid=ZbWKwL' target="_blank" rel='noreferrer'>
              <Fb />
            </a>

          </div>
        </IconContext.Provider>

        <IconContext.Provider
          value={{ color: 'black', size: '35px' }}
        >
          <div className={style.bottomIcon} >
            <a href='mailto:atomos@habib.edu.pk' target="_blank" rel='noreferrer'>
              <Email />
            </a>

          </div>
        </IconContext.Provider>

        <IconContext.Provider
          value={{ color: 'black', size: '35px' }}
        >
          <div className={style.bottomIcon} >
            <a href='https://www.instagram.com/huatomos/?igshid=NDk5N2NlZjQ%3D' target="_blank" rel='noreferrer'>
              <Ig />
            </a>

          </div>
        </IconContext.Provider>

        <IconContext.Provider
          value={{ color: 'black', size: '30px' }}
        >
          <div className={style.bottomIcon} >
            <a href='tel:+923222973296' target="_blank" rel='noreferrer'>
              <Phone />
            </a>

          </div>
        </IconContext.Provider>

      </div>

    </div>
  )
}

export default modules