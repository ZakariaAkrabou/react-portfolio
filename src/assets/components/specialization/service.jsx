import "./service.css";
import Card from "../../UI/card";
import Heading from "../headingText/heading";
import { services } from '../../data/Data'; // Assuming 'services' is the correct named export

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <section>
      <Heading title={'My'} titlePrimary={'Specialization'}/>
        <div className="container services-container">
            {services.map(({id,icon,name,des})=>{
                return(
                    <Card key={id} className={'services-card'}>
                        <span><FontAwesomeIcon icon={icon}/></span>
                        <h3>{name}</h3>
                        <p>{des}</p>
                    </Card>
                );
            })}
        </div>
    </section>
  );
};

export default Services;
