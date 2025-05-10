import { Container, Row, Col, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projectsData"; 
import { useState } from "react";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  // Combine all projects into a single array
  const allProjects = [...projects.native, ...projects.reactjs];
  
  // State to track the number of visible projects
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  // Function to load more projects
  const loadMoreProjects = () => {
    setVisibleProjects(prevVisible => prevVisible + 6);
  };

  // Slice the array to only show the current visible set
  const currentlyVisibleProjects = allProjects.slice(0, visibleProjects);
  
  // Check if we've shown all projects
  const hasMoreProjects = visibleProjects < allProjects.length;

  return (
    <>
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="display-3">Projects</h2>
                <div id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Row>
                    {
                      currentlyVisibleProjects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                  
                  {/* Show More Button */}
                  {hasMoreProjects && (
                    <div className="text-center mt-5">
                      <Button 
                        className="load-more-btn"
                        onClick={loadMoreProjects}
                        style={{
                          backgroundColor: "transparent",
                          color: "#fff",
                          border: "1px solid #fff",
                          padding: "10px 35px",
                          borderRadius: "30px",
                          fontSize: "18px",
                          fontWeight: "600",
                          transition: "0.3s ease-in-out"
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = "rgba(74, 47, 189, 0.5)";
                          e.target.style.borderColor = "rgba(74, 47, 189, 0.8)";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = "transparent";
                          e.target.style.borderColor = "#fff";
                        }}
                      >
                        Show More
                      </Button>
                    </div>
                  )}
                </div>
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
