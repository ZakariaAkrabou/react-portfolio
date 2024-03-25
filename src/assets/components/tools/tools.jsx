import "./tools.css";

import Heading from "../headingText/heading";

// data
import {tools} from "../../data/Data";

const Tools = () => {
  return (
    <section className="tools">
      <Heading title={"Work"} titlePrimary={"Tools"} />
      <div className="container tools-container">
        {tools.map(({id,img})=>{
            return(
                <img src={img} alt="image" key={id}/>
            );
        })}
      </div>
    </section>
  );
};

export default Tools;
