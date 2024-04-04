
import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {

  return (
      <Col  lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col   md={12}   >
              <div className="edu">
              <h4 className="mt-3">Education: </h4>
              <p> Graduated from "Modern Academy for Computer Science and Technology" (Sept 2018 – Nov2022)</p>
              </div>
              <div className="edu">
              <h4 className="mt-3">Certificates: </h4>
              <p>Full Stack web development in (mearn stack) from  "Route" Egyption IT-Training Center</p>
              </div>
            </Col>
            
          </Row>
        </div>
      </Col>
  )
}
