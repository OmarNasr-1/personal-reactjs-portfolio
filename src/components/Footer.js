import { Container, Row, Col } from "react-bootstrap";
import { Newsletter } from "./Newsletter";
import logo from "../assets/img/footer-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/icons8-whatsapp.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter/>
          <Col size={12} sm={6} >
            <img src={logo}  alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a target="_blank" href="https://www.linkedin.com/in/omarnasr-1/"><img src={navIcon1} alt="" /></a>
                <a target="_blank"  href="https://github.com/OmarNasr-1"><img src={navIcon2} alt="" /></a>
                <a target="_blank" href="https://www.instagram.com/omar._nasr/"><img src={navIcon3} alt="" /></a>
                <a  title="whatsapp" target="_blank" href="https://wa.me/01158952209"><img className="text-light" src={navIcon4} alt="" /></a>

              </div>
            <p>Made By Omar Nasr | 2024 </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
