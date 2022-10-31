import React, { useState , useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { PosterSec } from "../Components/PropertyPage-Compo/PosterSec";
import { Heading } from '../Components/PropertyPage-Compo/Heading';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Entire_blog_card } from '../Components/LandingPage-Compo/Entire_market_sec';
import blog_heading_icon from '../assets/img/Latest_news_blog/blog_heading_icon.svg';
import share_icon from '../assets/img/Latest_news_blog/share_icon.svg';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch  } from "react-redux";
import {FilterDataBlog} from "../action/index";
import { Loader } from "../Components/LandingPage-Compo/WhatappBtn";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Latest_news_blog = () => {
    const {blogid} = useParams();
    const  blogdata = useSelector((state) => state.layer1.Blogpage);
    const dispatch = useDispatch();
    const [runload , setload]= useState(false);

    useEffect(() => {

        if ( blogdata === null) {
          setload(false)
        }
          setload(true)  
          dispatch(FilterDataBlog(blogid))
      
       },[blogid ,blogdata , dispatch])

    return runload ? <LatestNewsBlogInner blogdata={blogdata}/> : <Loader /> ;
}

const LatestNewsBlogInner = ({blogdata}) => {
     // console.log(blogdata);
    const {blogid} = useParams();
      // this is for last section
    const Entire_market_data = useSelector((state) => state.layer1.Entire_market_data);
   

    //like
    const [givelike, setlike] = useState(0);
    const like = () => {
        if (givelike === 0) {
            setlike(!givelike)
            setlike(1)
        } else {
            setlike()
            setlike(0)
        }
    };
    return (
        <>
            <div className='main_wrapper Latest_news_blog_wrapper' Blog-no={blogdata.id} >
                <PosterSec lighttext="Latest " boldtext="news" />
                <section className='Latest_news_blog'>
                    <Container>
                        <div className='blog_img_sec'>
                            <div className='blog_heading_text'>
                            <Fade top  delay={50}  duration={1000}>
                                <p>{blogdata.item_date}</p>
                            </Fade>
                            <Fade top  delay={100}  duration={1000}>
                                <h2>{blogdata.item_description}</h2>
                            </Fade>
                            <Fade top  delay={150}  duration={1000}>
                                <div className='blog_heading_icon'>
                                    <img src={blog_heading_icon} alt="blog_heading_icon" />
                                    <span>{blogdata.detils.item_content}</span>
                                </div>
                            </Fade>
                            </div>
                            <Zoom top  delay={150}  duration={1000} >
                            <div className='blog_main_img'>
                                <img src={blogdata.detils.item_image} alt={`page_no_${blogid}_poster`} />
                            </div>
                            </Zoom>
                            <div className='blog_main_description'>
                                <div className='blog_paragraphs'>
                                <Fade top  delay={10} duration={300}  > <span>L</span> </Fade>
                                <Fade top  delay={10}  duration={300}>   <p>{blogdata.detils.item_description.item_paragraph_1}</p>  </Fade>
                                <Fade top  delay={10}  duration={300}>   <p>{blogdata.detils.item_description.item_paragraph_2}</p></Fade>
                                <Fade top  delay={10}  duration={300}>  <p>{blogdata.detils.item_description.item_paragraph_3}</p></Fade>
                                <Fade top  delay={10}  duration={300}>  <p>{blogdata.detils.item_description.item_paragraph_4}</p></Fade>
                                </div>
                                <div className='Related_tags'>
                                <Zoom> <span>Related tags :</span> </Zoom>
                                    <ul>
                                       <Zoom  delay={50}  duration={1000}> <li><a href="#0">Education</a></li> </Zoom>
                                       <Zoom  delay={50}  duration={1000}>  <li><a href="#0">Events</a></li></Zoom>
                                       <Zoom  delay={50}  duration={1000}> <li><a href="#0">Expo 2020 Dubai</a></li></Zoom>
                                       <Zoom  delay={50}  duration={1000}> <li><a href="#0">Government</a></li></Zoom>
                                       <Zoom  delay={50}  duration={1000}> <li><a href="#0">health</a></li></Zoom>
                                       <Zoom  delay={50}  duration={1000}>  <li><a href="#0">international</a></li></Zoom>
                                       <Zoom  delay={50}  duration={1000}>  <li><a href="#0">Lifestyle</a></li></Zoom>
                                    </ul>
                                </div>
                                <div className='social_media_icons'>
                                    <div className='like_blog'>
                                    <Zoom  delay={50}  duration={1000}>  
                                     <div className='like_flex'>
                                            <a href="#0" className="like" onClick={like}>
                                                {givelike ? (
                                                    <FavoriteIcon className="filled" />
                                                ) : (
                                                    <FavoriteBorderIcon className="outline" />
                                                )}
                                            </a>
                                            <span>{givelike} Likes</span>
                                    </div>
                                        </Zoom>
                                        <Zoom  delay={50}  duration={1000}> <a href="#0"><img src={share_icon} alt="share_icon" /></a></Zoom>
                                    </div>
                                    
                                    <div className='social_icon_blog'>
                                        <ul>
                                        <Fade top   delay={100}  duration={1000}>
                                            <li>
                                                <a href="#0">
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_193_1042)">
                                                            <path d="M14 14.4727H16.5L17.5 10.4645H14V8.46043C14 7.42833 14 6.45636 16 6.45636H17.5V3.0895C17.174 3.04642 15.943 2.94922 14.643 2.94922C11.928 2.94922 10 4.6096 10 7.6588V10.4645H7V14.4727H10V22.99H14V14.4727Z" fill="#BCBCBC" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_193_1042">
                                                                <rect width="24" height="24.0489" fill="white" transform="translate(0 0.945312)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </li>
                                            </Fade>
                                            <Fade top   delay={100}  duration={1000}>
                                            <li>
                                                <a href="#0">
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_193_1045)">
                                                            <path d="M22.1623 6.61306C21.3989 6.95145 20.5893 7.17368 19.7603 7.27241C20.634 6.74877 21.288 5.92468 21.6003 4.95369C20.7803 5.44268 19.8813 5.78538 18.9443 5.97076C18.3149 5.29596 17.4807 4.84844 16.5713 4.69775C15.6618 4.54707 14.7282 4.70166 13.9156 5.13751C13.1029 5.57336 12.4567 6.26604 12.0774 7.10786C11.6981 7.94969 11.607 8.89348 11.8183 9.79254C10.1554 9.70902 8.52863 9.27601 7.04358 8.52161C5.55854 7.76722 4.24842 6.70831 3.1983 5.41362C2.82659 6.05338 2.63125 6.78063 2.6323 7.52091C2.6323 8.97387 3.3703 10.2575 4.4923 11.009C3.82831 10.9881 3.17893 10.8084 2.5983 10.4849V10.537C2.5985 11.5047 2.93267 12.4425 3.54414 13.1915C4.15562 13.9405 5.00678 14.4545 5.9533 14.6464C5.33691 14.8138 4.6906 14.8385 4.0633 14.7186C4.33016 15.5515 4.8503 16.2799 5.55089 16.8019C6.25147 17.3239 7.09743 17.6132 7.9703 17.6295C7.10278 18.3122 6.10947 18.8169 5.04718 19.1147C3.98488 19.4125 2.87442 19.4975 1.7793 19.365C3.69099 20.597 5.91639 21.251 8.1893 21.2488C15.8823 21.2488 20.0893 14.8629 20.0893 9.32458C20.0893 9.14422 20.0843 8.96184 20.0763 8.78348C20.8952 8.19044 21.6019 7.4558 22.1633 6.61407L22.1623 6.61306Z" fill="#BCBCBC" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_193_1045">
                                                                <rect width="24" height="24.0489" fill="white" transform="translate(0 0.945312)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </li>
                                            </Fade>
                                            <Fade top   delay={150}  duration={1000}>
                                            <li>
                                                <a href="#0">
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_193_1048)">
                                                            <path d="M6.94043 5.95528C6.94016 6.48679 6.7292 6.99643 6.35394 7.37208C5.97868 7.74773 5.46986 7.95862 4.93943 7.95835C4.409 7.95809 3.90039 7.74669 3.52551 7.37066C3.15062 6.99464 2.94016 6.48479 2.94043 5.95327C2.9407 5.42176 3.15166 4.91212 3.52692 4.53647C3.90218 4.16082 4.411 3.94993 4.94143 3.9502C5.47186 3.95046 5.98047 4.16186 6.35535 4.53789C6.73024 4.91391 6.9407 5.42376 6.94043 5.95528V5.95528ZM7.00043 9.44237H3.00043V21.9879H7.00043V9.44237ZM13.3204 9.44237H9.34043V21.9879H13.2804V15.4045C13.2804 11.737 18.0504 11.3964 18.0504 15.4045V21.9879H22.0004V14.0417C22.0004 7.85915 14.9404 8.08962 13.2804 11.1258L13.3204 9.44237V9.44237Z" fill="#BCBCBC" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_193_1048">
                                                                <rect width="24" height="24.0489" fill="white" transform="translate(0 0.945312)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </li>
                                            </Fade>
                                            <Fade top   delay={200}  duration={1000}>
                                            <li>
                                                <a href="#0">
                                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_193_1057)">
                                                            <path d="M3.064 8.47046C3.89601 6.81032 5.17237 5.41475 6.75043 4.43972C8.32849 3.46469 10.1461 2.94863 12 2.94922C14.695 2.94922 16.959 3.94124 18.69 5.55953L15.823 8.43338C14.786 7.44036 13.468 6.93433 12 6.93433C9.395 6.93433 7.19 8.69792 6.405 11.0657C6.205 11.667 6.091 12.3083 6.091 12.9696C6.091 13.631 6.205 14.2723 6.405 14.8735C7.191 17.2423 9.395 19.0049 12 19.0049C13.345 19.0049 14.49 18.6492 15.386 18.0479C15.9054 17.7053 16.3501 17.2606 16.6932 16.7408C17.0363 16.221 17.2706 15.6369 17.382 15.0238H12V11.1479H21.418C21.536 11.8032 21.6 12.4866 21.6 13.1971C21.6 16.2493 20.51 18.8185 18.618 20.5621C16.964 22.0932 14.7 22.99 12 22.99C10.6866 22.9905 9.38604 22.7317 8.17254 22.2283C6.95905 21.7249 5.85645 20.9869 4.92776 20.0563C3.99907 19.1257 3.2625 18.0208 2.76013 16.8049C2.25777 15.5889 1.99948 14.2857 2 12.9696C2 11.3523 2.386 9.82321 3.064 8.47046Z" fill="#BCBCBC" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_193_1057">
                                                                <rect width="24" height="24.0489" fill="white" transform="translate(0 0.945312)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </li>
                                            </Fade>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <Heading title1="Other Related" boldPart=" News Articles" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        <div>
                            <Row>
                                {
                                    Entire_market_data.slice(0, 3).map((data, index) => {
                                        return (
                                            <Col md={4} sm={6} key={index} className="spacing_blog">
                                                <Entire_blog_card item={data} />
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </div>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default Latest_news_blog;