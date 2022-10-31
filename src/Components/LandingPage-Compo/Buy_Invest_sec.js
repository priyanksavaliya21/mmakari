import React from 'react';
import { Container } from 'react-bootstrap';
import {Heading} from "../PropertyPage-Compo/Heading";
import Slider from "react-slick";
import Row from "react-bootstrap/Row";
import { useSelector} from "react-redux";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SampleNextArrow = (props) => {
    const {onClick } = props;
    return (
        <div className="slick-arrow slick-next" onClick={onClick}>
            <div className='custom_arrow custom_arrow_next'>
                <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5027 8.84203L16.2447 2.58245L17.8943 0.932373L26.9687 10.009L17.8943 19.0856L16.2447 17.4355L22.5027 11.1759H15.4023H0.302002V8.84203H22.5027Z" fill="#021540" />
                </svg>
            </div>
        </div>
    );
}
const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className={"slick-arrow slick-prev"} onClick={onClick}>
            <div className='custom_arrow custom_arrow_prev '>
                <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.49733 8.84203L10.7553 2.58245L9.10567 0.932373L0.0313339 10.009L9.10567 19.0856L10.7553 17.4355L4.49733 11.1759H11.5977H26.698V8.84203H4.49733Z" fill="#021540" />
                </svg>
            </div>
        </div>
    );
}
const Buy_Invest_sec = () => {
    const Buy_InvestData = useSelector((state) => state.layer1.Buy_invest_data);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <>
            <section className='buy_Invest_sec section_padding'>
                <Container>
                    <div className='buy_Invest_sec_head isotop_section_head'><Heading title1="Buy/Invest in Your" boldPart="Dream Home In Dubai" text="Forever Evolving Nation, And a Rising City." /></div>
                    <Row>
                    <div className='buy_Invest_slider'>
                        <Slider {...settings}>
                            {
                                Buy_InvestData.map((Data ,index) => {
                                    return (
                                        <Zoom  top duration={700} >
                                        <div className='dream_home_box'  key={index} >
                                             <Fade top  delay={50}>
                                            <img src={Data.slider_image} alt="buy slider img" /> 
                                            </Fade>
                                            <div className='dream_home_box_text'>
                                            <Fade top delay={100} > <h3>{Data.item_heading}</h3></Fade>
                                            <Fade top delay={150}> <p>{Data.item_description}</p></Fade>
                                            </div>
                                        </div>
                                        </Zoom>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Buy_Invest_sec;