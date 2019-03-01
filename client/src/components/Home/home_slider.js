import React from 'react';
import Slider from 'react-slick';
import MyButton from '../utils/button';

const HomeSlider = (props) => {

    const slides = [
        {
            img:'/images/featured/featured_home_2.jpg',
            lineOne:'Channel Islands',
            lineTwo:'Custom shop',
            linkTitle:'Shop now',
            linkTo:'/shop'
        },
        {
            img:'/images/featured/featured_home_3.jpg',
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
        arrows: false
    }

    const generateSlides = () =>(
        slides ? 
            slides.map((item,i)=>(
                <div key={i}>
                    <div className="featured_image"
                        style={{
                            background:`url(${item.img})`,
                            height:`${window.innerHeight}px`,
                            backgroundSize:`cover`,
                            position:`relative`,
                            backgroundPosition: `center left`
                        }}
                    >
                    <div className="featured_action"
                        style={{
                            position: `absolute`,
                            top: `45%`,
                            left: `8%`
                        }}>
                        <div className="tag title"
                            style={{
                                background:`#82828287`,
                                color:`#ffffff`,
                                padding:`0px 20px`,
                                textTransform:`uppercase`,
                                display: `table`,
                                fontSize:`70px`,
                                fontWeight:`700`
                            }}
                        >{item.lineOne}</div>
                        <div className="tag low_title"
                            style={{
                                background:`#82828287`,
                                color:`#ffffff`,
                                padding:`0px 20px`,
                                textTransform:`uppercase`,
                                display:`table`,
                                fontSize:`50px`,
                                fontWeight:`300`,
                                marginTop:`10px`
                            }}
                        >{item.lineTwo}</div>
                        <div>
                            <MyButton
                                type="default"
                                title={item.linkTitle}
                                linkTo={item.linkTo}
                                addStyles={{
                                    margin:'10px 0 0 0'
                                }}
                            />
                        </div>
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