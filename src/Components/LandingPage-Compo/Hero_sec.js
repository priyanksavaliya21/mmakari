import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import hero_bg_img from '../../assets/img/Home_page/hero_bg_img.png';
import hero_bg_img_1 from '../../assets/img/Home_page/hero_bg_img_1.png';
import hero_bg_img_2 from '../../assets/img/Home_page/hero_bg_img_2.png';
const Hero_sec = () => {
    const Settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <div className='cm_arrow left_arrow'><WestIcon /></div>,
        nextArrow: <div className='cm_arrow right_arrow'><EastIcon /></div>,
    };
    return (
        <>
            <div className='hero_main_wrapper'>
                <div className='hero_slider_main'>
                    <Slider {...Settings} >
                        <div className='hero_slider_img'>
                            <LazyLoadImage src={hero_bg_img} effect="blur" alt="hero bg img" />
                        </div>
                        <div>
                            <LazyLoadImage src={hero_bg_img_1} effect="blur" alt="hero bg img" />
                        </div>
                        <div>
                            <LazyLoadImage src={hero_bg_img_2} effect="blur" alt="hero bg img" />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Hero_sec;