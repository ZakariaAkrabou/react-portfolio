import "./about.css";
import CV from "../../mycv.pdf";

import Heading from "../../components/headingText/heading";
import Card from "../../UI/card";
import Tools from "../../components/tools/tools";
import Services from "../../components/specialization/service";
// data
import { experience } from "../../data/Data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  
  return (
    <>
      <section className="About">
        <Heading title={"About"} titlePrimary={"me"}></Heading>

        <div className="container about-container">
          <div className="about-left">
            <h3>{`I'm Zakaria Akrabou`}</h3>
            <p>
              As a junior full stack developer, I possess a broad range of
              technical skills and knowledge that allow me to develop and
              maintain both the front-end and back-end of a web application. My
              expertise includes knowledge of various programming languages,
              databases, and frameworks, which enable me to create web
              applications that are not only functional but also scalable and
              robust.
            </p>
            
            <a href={CV} download className="btn-nav">
              Download CV
              <span>
                <FontAwesomeIcon icon={faDownload} />
              </span>
            </a>
          </div>

          <div className="about-right">
            {experience.map(({ id, no, title }) => {
              return (
                <Card key={id} className={"expernce-card"}>
                  <h1>
                    <span>{no}</span>
                  </h1>
                  <p>{title}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Tools />
      <Services />
    </>
  );
};

export default About;
