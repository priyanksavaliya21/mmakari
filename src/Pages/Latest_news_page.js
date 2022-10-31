import React from 'react';
import { PosterSec } from "../Components/PropertyPage-Compo/PosterSec";
import { Heading } from '../Components/PropertyPage-Compo/Heading';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonX } from "../Components/PropertyPage-Compo/PropertyPageSection1";
import { Entire_blog_card } from '../Components/LandingPage-Compo/Entire_market_sec';
import { Container } from 'react-bootstrap';
import { useSelector } from "react-redux";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
const Latest_news_page = () => {
    const Entire_market_data = useSelector((state) => state.layer1.Entire_market_data);
    const [currnum, setnum] = React.useState(6);
    const loadmore1 = () => {
        const addRest = Entire_market_data.length - 6;
        setnum(currnum + addRest)
      }
      const loadmore2 = () => {
        setnum(6)
      }
    return (
        <>
            <div className='main_wrapper latest_news_page_wrapper'>
                <PosterSec lighttext="Latest " boldtext="news" />
                <section className='latest_news_sec'>
                    <Container>
                        <Heading title1="We’ve Cornered" boldPart=" The Entire Market" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        <div>
                            <Row>
                                {
                                    Entire_market_data.slice(0, currnum).map((data, index) => {
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
                                {currnum === Entire_market_data.length ? <ButtonX text="Show Less" id="btn0010" eventclick={loadmore2} /> : <ButtonX text="View All" id="btn005" eventclick={loadmore1} />}
                            </div>
                            </Fade>
                        </div>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default Latest_news_page;