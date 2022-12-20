import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import style from "../style/Faqs.module.css";


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
    </div>
  );
}

export default faqs