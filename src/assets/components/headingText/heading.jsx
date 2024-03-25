import "./heading.css";

const Heading = ({ title, titlePrimary }) => {
  return (
    <h2 className="Heading-text">
      {title} <span>{titlePrimary}</span>
    </h2>
  );
};

export default Heading;
