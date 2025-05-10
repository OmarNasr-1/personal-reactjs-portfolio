import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col md={12}>
              <div className="edu">
                <h4 className="mt-3 info-title">Work Experience:</h4>
                <p className="info-content">Full Stack Developer at <a href="https://www.datac.com" target="_blank" rel="noopener noreferrer" className="exp-link">Data.com</a> (May 2024 – 2025)</p>
              </div>
              <hr className="divider" />
              
              <div className="edu">
                <h4 className="mt-3 info-title">Education:</h4>
                <p className="info-content">Graduated from "Modern Academy for Computer Science and Technology" (Sept 2018 – Nov 2022)</p>
              </div>
              <hr className="divider" />
              
              <div className="edu">
                <h4 className="mt-3 info-title">Certificates:</h4>
                <p className="info-content">Full Stack web development in (mearn stack) from "Route" Egyption IT-Training Center</p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
