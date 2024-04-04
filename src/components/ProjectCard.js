import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,button }) => {
  return (
    <Col size={12} >
      <div className="proj-imgbx">
        <img  src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <button className="btn btn-outline-light   fs-5 mt-1" onClick={button.onClick}>{button.text}</button>
        </div>
      </div>
    </Col>
  )
}
