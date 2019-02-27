import React from 'react';
import Slider from 'react-slick';
import MyButton from '../utils/button';

const HomeSlider = (props) => {

    const slides = [
        {
            img:'/images/featured/featured_home.jpg',
            lineOne:'Channel Islands',
            lineTwo:'Custom shop',
            linkTitle:'Shop now',
            linkTo:'/shop'
        },
        {
            img:'/images/featured/featured_home_2.jpg',
            lineOne:'Sale items',
            lineTwo:'Sweet deals~',
            linkTitle:'View offers',
            linkTo:'/shop'
        }

    ]

    const settings = {
        dots: false,
        invinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arroq: false
    }

    const generateSlides = () =>(
        slides ? 
            slides.map((item,i)=>(
                <div key={i}>
                    <div className="featured_image"
                        style={{
                            background:`url(${item.img})`,
                            height:`${window.innerHeight}px`
                        }}
                    >
                    <div className="featured_action">

                    </div>

                    </div>
                </div>
            ))
        :null    
    )

    return (
        <div className="featued_container">
            <Slider {...settings}>
                { generateSlides()}
            </Slider>
            
        </div>
    );
};

export default HomeSlider;