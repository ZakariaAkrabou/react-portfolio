import './review.css';

import Card from "../../UI/card";
import Heading from "../../components/headingText/heading";

// data
import { testimonials } from '../../data/Data';

// swipper
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';


const Review = () => {
    return (
        <section>
            <Heading titlePrimary={'Reviews'}></Heading> 

            <div className="container review-container">
            <Swiper className='review-wrapper' slidesPerView={1} spaceBetween={10}>
                {testimonials.map(({id,img,name,des})=>{
                    return(
                        <SwiperSlide key={id}>
                           <Card className={'review'}>
                                <img src={img} alt=""></img>
                                <h4>{name}</h4>
                                <p>{des}</p>
                            </Card>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            </div>

        </section>
    );
}

export default Review;
