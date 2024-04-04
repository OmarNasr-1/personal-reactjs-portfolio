import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
                            <div className="item">
                                <img src={meter1} alt="meter1" />
                                <h4>HTML5</h4>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="meter2" />
                                <h4>CSS3</h4>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="meter3" />
                                <h4>BootStrap5</h4>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="meter2" />
                                <h4>JavaScript</h4>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="meter2" />
                                <h4>React js</h4>
                            </div>
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
