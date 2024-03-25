import "./project.css";
import Card from "../../UI/card";
import Heading from "../../components/headingText/heading";
import { portfolio } from "../../data/Data";
import Review from "../../components/reviews/review";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <Heading title={"Recent"} titlePrimary={"Work"}></Heading>

        <div className="container project-container">
          {portfolio.map(({ id, img, name, des, github }) => {
            return (
              <Card key={id} className={"project"}>
                <img src={img} alt="image" />
                <h3>
                  <b>{name}</b>
                </h3>
                <p>{des}</p>
                <a href={github}>Github</a>
              </Card>
            );
          })}
        </div>
      </section>

      <Review> </Review>
    </>
  );
};

export default Projects;
