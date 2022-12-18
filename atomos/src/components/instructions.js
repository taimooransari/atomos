import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Instructions() {
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            {/* {values.map((v, idx) => ( */}
                <Button className="me-2 mb-2" onClick={() => handleShow('sm-down')}>
                    SHOW INSTRUCTIONS
                    {/* Full screen
                    {typeof v === 'string' && `below ${v.split('-')[0]}`} */}
                </Button>
            {/* ))} */}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Instructions</Modal.Title>
                </Modal.Header>
                <Modal.Body>Instructions body content

                    <ul>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, nihil! Non, iure id autem incidunt voluptatibus eius! Ipsum sunt, odit veritatis veniam quis omnis cumque inventore quaerat quas mollitia debitis.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, nihil! Non, iure id autem incidunt voluptatibus eius! Ipsum sunt, odit veritatis veniam quis omnis cumque inventore quaerat quas mollitia debitis.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, nihil! Non, iure id autem incidunt voluptatibus eius! Ipsum sunt, odit veritatis veniam quis omnis cumque inventore quaerat quas mollitia debitis.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, nihil! Non, iure id autem incidunt voluptatibus eius! Ipsum sunt, odit veritatis veniam quis omnis cumque inventore quaerat quas mollitia debitis.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, nihil! Non, iure id autem incidunt voluptatibus eius! Ipsum sunt, odit veritatis veniam quis omnis cumque inventore quaerat quas mollitia debitis.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, nihil! Non, iure id autem incidunt voluptatibus eius! Ipsum sunt, odit veritatis veniam quis omnis cumque inventore quaerat quas mollitia debitis.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, nihil! Non, iure id autem incidunt voluptatibus eius! Ipsum sunt, odit veritatis veniam quis omnis cumque inventore quaerat quas mollitia debitis.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, nihil! Non, iure id autem incidunt voluptatibus eius! Ipsum sunt, odit veritatis veniam quis omnis cumque inventore quaerat quas mollitia debitis.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, nihil! Non, iure id autem incidunt voluptatibus eius! Ipsum sunt, odit veritatis veniam quis omnis cumque inventore quaerat quas mollitia debitis.</li>
                    </ul>

                </Modal.Body>
            </Modal>
        </>
    );
}

// render(<Instructions />);

export default Instructions;