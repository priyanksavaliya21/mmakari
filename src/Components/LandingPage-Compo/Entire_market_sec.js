import React from 'react';
import { Container } from 'react-bootstrap';
import Heading_left_bor from './Heading_left_bor';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonX } from "../PropertyPage-Compo/PropertyPageSection1";
import { useNavigate } from "react-router-dom";
import {  Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Entire_market_sec = () => {
    let navigate = useNavigate();
    const Entire_market_data = useSelector((state) => state.layer1.Entire_market_data);
    return (
        <>
            <section className='Entire_market_sec'>
                <Container>
                    <div>
                    <Zoom top> <Heading_left_bor Heading_text="We’ve Cornered " Heading_span="The Entire Market" /></Zoom>
                    <Zoom top  delay={100} >     <p className='title_discrepancy'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Zoom>
                    </div>
                    <Row>
                        {
                            Entire_market_data.slice(0, 3).map((data, index) => {
                                return (
                                    <Col md={4} sm={6} key={index} className="spacing_blog">
                                    <Zoom  delay={50}  duration={500}  >
                                        <Entire_blog_card item={data} />
                                          </Zoom>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Fade top delay={200}> 
                    <div className='btn-bloginhome'>
                       <span onClick={()=>  navigate("/latest_news_page", { replace: true })} > <ButtonX text="View All" titlehov="View All" id="btn005" /></span>
                    </div>
                    </Fade>
                </Container>
            </section>
        </>
    )
}


export const Entire_blog_card = ({ item }) => {
    return (
        <>
            <div className='Entire_market_box'>
                <div className="img_blog">
                <Fade top>
                    <LazyLoadImage effect="blur"  src={item.box_image} alt="Entire_market_img" />
                 </Fade>
                </div>
                <div className='Entire_market_box_text'>
                <Fade top delay={100}>
                    <li>{item.item_date}</li>
                </Fade>
                    <span></span>
                    <Fade top delay={150}>
                    <h3>{item.item_description}</h3> 
                     </Fade>
                     <Fade top delay={200}>
                    <Link  to={`/latest_news_blog/${item.id}`}>Read More
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9855 5.22762L10.7613 1.08979L11.8748 -0.000976562L18 5.99902L11.8748 11.999L10.7613 10.9083L14.9855 6.77043H10.1927H0V5.22762H14.9855Z" fill="#42A8D4" />
                        </svg>
                    </Link>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default Entire_market_sec;