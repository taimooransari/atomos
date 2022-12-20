import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import style from "../style/Faqs.module.css";
import { IconContext } from 'react-icons';
import { MdEmail as Email } from 'react-icons/md';
import { BsFacebook as Fb } from 'react-icons/bs';
import { AiFillInstagram as Ig } from "react-icons/ai";
import { BsFillTelephoneFill as Phone } from 'react-icons/bs';


function faqs() {
  return (
    <div className={style.main}>
  <div className={style.section}>
    <h1 className={style.heading}>Frequently Asked Questions</h1>
    <Accordion className={style.accordion}>
      <Accordion.Item eventKey="0">
        <Accordion.Header className={style.accordionHead}>What is ATOMOS?</Accordion.Header>
        <Accordion.Body className={style.accordionBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className={style.accordionHead}>How does it work?</Accordion.Header>
        <Accordion.Body className={style.accordionBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
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
  );
}

export default faqs