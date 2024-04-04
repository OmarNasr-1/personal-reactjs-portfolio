

import { Container, Row, Col,Alert } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();



  const [status, setStatus] = useState({});



  const sendEmail =async (e) => {
    e.preventDefault();
      emailjs
      .sendForm('service_upfvdss', 'template_wikxl49', form.current, {
        publicKey: 'gIrPESemCfICp9oUz',
      }).then(
        (r) => {
          setStatus({ succes: true, message: 'Message sent successfully'});
        },
        (error) => {
          setStatus({ succes: false, message: 'Something went wrong, please try again.'});
        },
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2 className="display-3">Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={12} className="px-1">
                      <input required type="text" name="from_name" placeholder="Full Name" />
                    </Col>
                    
                    <Col size={12} sm={12} className="px-1">
                      <input required type="email" placeholder="Email Address"    name="user_email" />
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input required type="tel"  name="phone" placeholder="Phone No." />
                    </Col>
                    <Col size={12} sm={112} className="px-1">
                      <textarea required rows="6" name="message" placeholder="Message" ></textarea>
                      <button type="submit" value="Send"><span>Send</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col className="mt-2 ms-3">
                        <Alert  className="fw-bold text-center">{status.message}</Alert>
                      </Col>
                    }
                  </Row>
                
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
