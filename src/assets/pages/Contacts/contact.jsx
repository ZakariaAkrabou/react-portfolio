import "./contact.css";

import Heading from "../../components/headingText/heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <section>
        <Heading title={"Contact"} titlePrimary={"Me"}></Heading>
        <div className="container contact-container">
          <form action="#">
            <input type="text" name="subject" required placeholder="Subject" />
            <input type="text" name="name" required placeholder="Name" />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
            />
            <textarea name="message" id="message" rows="6"></textarea>
            <button type="submit" className="btn-nav">
              Send
              <span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
            </button>
          </form>
        </div>
      </section>
   
      <footer>&copy; Copyright 2024 || Made by Zakaria Akrabou.</footer>
    </>
  );
};

export default Contact;
