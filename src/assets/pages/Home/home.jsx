import { useEffect, useState } from "react";
import HeaderImage from "../../images/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [typedName, setTypedName] = useState("");
  const [role] = useState("Full-Stack Developer");

  useEffect(() => {
    const name = "Zakaria Akrabou";
    let index = 0;
    let direction = 0.9;

    const typeText = () => {
      const text = `Hi, I'm ${name}`;
      if (index === text.length) {
        direction = -1;
      } else if (index === 0 && direction === -1) {
        direction = 1;
      }

      setTypedName(text.slice(0, index));

      index += direction;
    };

    const interval = setInterval(typeText, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <div className="container container-lg header-container">
        <img src={HeaderImage} alt="hero" />
        <div className="header-right">
          <h1>
            <span>{typedName}</span>
            <br />
            {role}
          </h1>
          <p>
            a junior fullstack developer with a deep passion for coding and a
            love for building innovative web applications.
          </p>
          <Link className="btn-nav" to={"/about"}>
            About Me
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Home;
