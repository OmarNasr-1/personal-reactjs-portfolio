import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projectsData"; 

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

 

  return (
    <>
    
    <section className="project" id="projects">
    
      <Container>
        <Row>
          <Col size={12} >
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="display-3">Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">nativ</Nav.Link>
                    </Nav.Item>
                  
                     <Nav.Item>
                      <Nav.Link eventKey="second">React</Nav.Link>
                    </Nav.Item> 
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">


                    <Row>
                        {
                          projects.native.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                             
                            )
                          })
                        }
                      </Row>

                   





                    </Tab.Pane>
                    <Tab.Pane eventKey="second">

                    {
                          projects.reactjs.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                             
                            )
                          })
                        }


                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="third">
                      <Row>
                    {projects.map((project, index) => (
  <div key={index}>
    
  </div>
))}
</Row>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <img className="background-image-right" alt="gg" src={colorSharp2}></img>
      </Container>
    </section>
    </>
  )
}
