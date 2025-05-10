import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./skills.css"

import colorSharp from "../assets/img/color-sharp.png"
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { name: "React js", percentage: 85 },
    { name: "Next.js", percentage: 80 },
    { name: "JavaScript", percentage: 85 },
    { name: "TypeScript", percentage: 80 },
    { name: "Directus CMS", percentage: 75 },
    { name: "DevOps", percentage: 70 },
    { name: "Vibe Coding", percentage: 95 },
    { name: "HTML5", percentage: 90 },
    { name: "CSS3", percentage: 85 },
    { name: "BootStrap5", percentage: 80 },
    { name: "Tailwind CSS", percentage: 85 }
  ];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn shadow-lg">
                        <h1 className="display-3" >Skills</h1>
                        <p>Write well designed, testable, efficient code by using best software <br></br>
                           development practices using different web languages and techniques</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {skills.map((skill, index) => (
                                <div className="item" key={index}>
                                    <div className="skill-container" style={{
                                        position: "relative",
                                        width: "150px",
                                        height: "150px",
                                        margin: "0 auto"
                                    }}>
                                        {/* Animated border */}
                                        <div className="skill-border" style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "50%",
                                            border: "8px solid #4A2FBD",
                                            borderTopColor: "transparent",
                                            animation: "spin 1.5s linear infinite"
                                        }}></div>
                                        
                                        {/* Static content */}
                                        <div className="skill-content" style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <div className="skill-inner-circle" style={{
                                                width: "120px",
                                                height: "120px",
                                                borderRadius: "50%",
                                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backdropFilter: "blur(5px)"
                                            }}>
                                                <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
                                                    {skill.name}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="..." />
        <img className="background-image-rgihT" src={colorSharp2} alt="..." />
  
    </section>
    
  )
}
