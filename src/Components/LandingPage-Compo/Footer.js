import React from 'react';
import { Container } from 'react-bootstrap';
import Heading_left_bor from './Heading_left_bor';
import footer_logo from '../../assets/img/Home_page/footer_logo.svg';
import footer_post_img_1 from '../../assets/img/Home_page/footer_post_img_1.png';
import footer_post_img_2 from '../../assets/img/Home_page/footer_post_img_2.png';
import footer_post_icon from '../../assets/img/Home_page/footer_post_icon.svg';
import {ButtonX} from "../PropertyPage-Compo/PropertyPageSection1";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink} from 'react-router-hash-link';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
const Footer = () => {
    let navigate = useNavigate();
    return (
        <>
            <footer className='footer'>
                <Zoom bottom duration={600}>
                <Container>
                    <div className='footer_contact_box'>
                         <Fade top delay={400}  duration={1000} >
                            <Heading_left_bor Heading_text="Interested!" Heading_span="Do you have any project?" /> 
                         </Fade>
                        <Fade top delay={400}  duration={1500} >
                            <p className='title_discrepancy'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>  
                        </Fade>
                        <Fade top delay={500}  duration={2000}>    
                         <div className='footer_contactusbtn'>
                              <span onClick={()=>  navigate("/contactpage", { replace: true })} ><ButtonX text="CONTACT US" titlehov="CONTACT US" id="btn006"  /></span>
                        </div>
                        </Fade>
                    </div>
                </Container>
                </Zoom>
                <div className='footer_main_wrap'>
                    <Container>
                        <div className='footer_row'>
                            <div className='footer_col logo_icon'>
                            <Zoom> <Link to="/"> <img src={footer_logo} alt="footer logo" /></Link></Zoom>
                            <Zoom  delay={50} duration={1100}  >  <p>Lorem Ipsum is simply dummy text of the printing and .</p> </Zoom>
                                <ul>
                                <Zoom  delay={50} duration={1100}  > 
                                    <li>
                                        <a href="https://www.facebook.com/" target={"blank"} > 
                                            <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M40.5 21C40.5 32.3333 31.5344 41.5 20.5 41.5C9.4656 41.5 0.5 32.3333 0.5 21C0.5 9.66674 9.4656 0.5 20.5 0.5C31.5344 0.5 40.5 9.66674 40.5 21Z" stroke="#42A8D4" />
                                                <path d="M21.929 31.1919V21.9101H25.0156L25.4744 18.276H21.929V15.9612C21.929 14.9126 22.217 14.1946 23.7006 14.1946H25.5804V10.9546C24.6658 10.8551 23.7464 10.8071 22.8265 10.8107C20.0983 10.8107 18.2252 12.5004 18.2252 15.6022V18.2692H15.1587V21.9033H18.2319V31.1919H21.929Z" fill="#42A8D4" />
                                            </svg>
                                        </a>
                                    </li>
                                    </Zoom>
                                    <Zoom  delay={100} duration={1100}  > 
                                    <li>
                                        <a href="https://www.instagram.com/" target={"blank"} >
                                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M40.8184 21C40.8184 32.3333 31.8528 41.5 20.8184 41.5C9.78395 41.5 0.818359 32.3333 0.818359 21C0.818359 9.66674 9.78395 0.5 20.8184 0.5C31.8528 0.5 40.8184 9.66674 40.8184 21Z" stroke="#42A8D4" />
                                                <g clipPath="url(#clip0_97_660)">
                                                    <path d="M20.8183 11C23.5151 11 23.8515 11.01 24.9096 11.06C25.9667 11.11 26.6862 11.277 27.3195 11.525C27.9746 11.779 28.5264 12.123 29.0783 12.678C29.583 13.1779 29.9735 13.7826 30.2227 14.45C30.4679 15.087 30.6346 15.813 30.6842 16.878C30.7309 17.944 30.7438 18.283 30.7438 21C30.7438 23.717 30.7339 24.056 30.6842 25.122C30.6346 26.187 30.4679 26.912 30.2227 27.55C29.9742 28.2178 29.5836 28.8226 29.0783 29.322C28.582 29.8303 27.9818 30.2238 27.3195 30.475C26.6872 30.722 25.9667 30.89 24.9096 30.94C23.8515 30.987 23.5151 31 20.8183 31C18.1216 31 17.7851 30.99 16.727 30.94C15.67 30.89 14.9504 30.722 14.3171 30.475C13.6544 30.2245 13.0541 29.8309 12.5583 29.322C12.0535 28.8222 11.663 28.2175 11.4139 27.55C11.1678 26.913 11.002 26.187 10.9524 25.122C10.9057 24.056 10.8928 23.717 10.8928 21C10.8928 18.283 10.9027 17.944 10.9524 16.878C11.002 15.812 11.1678 15.088 11.4139 14.45C11.6623 13.7822 12.0529 13.1773 12.5583 12.678C13.0543 12.1692 13.6545 11.7757 14.3171 11.525C14.9504 11.277 15.669 11.11 16.727 11.06C17.7851 11.013 18.1216 11 20.8183 11ZM20.8183 16C19.5021 16 18.2398 16.5268 17.3091 17.4645C16.3784 18.4021 15.8556 19.6739 15.8556 21C15.8556 22.3261 16.3784 23.5979 17.3091 24.5355C18.2398 25.4732 19.5021 26 20.8183 26C22.1345 26 23.3968 25.4732 24.3275 24.5355C25.2582 23.5979 25.781 22.3261 25.781 21C25.781 19.6739 25.2582 18.4021 24.3275 17.4645C23.3968 16.5268 22.1345 16 20.8183 16ZM27.2699 15.75C27.2699 15.4185 27.1392 15.1005 26.9065 14.8661C26.6738 14.6317 26.3582 14.5 26.0292 14.5C25.7001 14.5 25.3846 14.6317 25.1519 14.8661C24.9192 15.1005 24.7885 15.4185 24.7885 15.75C24.7885 16.0815 24.9192 16.3995 25.1519 16.6339C25.3846 16.8683 25.7001 17 26.0292 17C26.3582 17 26.6738 16.8683 26.9065 16.6339C27.1392 16.3995 27.2699 16.0815 27.2699 15.75ZM20.8183 18C21.608 18 22.3654 18.3161 22.9238 18.8787C23.4822 19.4413 23.7959 20.2044 23.7959 21C23.7959 21.7956 23.4822 22.5587 22.9238 23.1213C22.3654 23.6839 21.608 24 20.8183 24C20.0286 24 19.2712 23.6839 18.7128 23.1213C18.1544 22.5587 17.8407 21.7956 17.8407 21C17.8407 20.2044 18.1544 19.4413 18.7128 18.8787C19.2712 18.3161 20.0286 18 20.8183 18Z" fill="#42A8D4" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_97_660">
                                                        <rect width="23.8212" height="24" fill="white" transform="translate(8.90771 9)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </li>
                                    </Zoom>
                                    <Zoom  delay={150} duration={1100}  > 
                                    <li>
                                        <a href="https://in.linkedin.com/" target={"blank"} >
                                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M41.1262 21C41.1262 32.3333 32.1606 41.5 21.1262 41.5C10.0918 41.5 1.12622 32.3333 1.12622 21C1.12622 9.66674 10.0918 0.5 21.1262 0.5C32.1606 0.5 41.1262 9.66674 41.1262 21Z" stroke="#42A8D4" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.4519 12.4663C11.3885 12.4949 11.2957 12.5578 11.2458 12.6059C11.0573 12.7875 11.0481 12.8625 11.0481 14.2093C11.0481 15.5138 11.058 15.6075 11.2141 15.7764C11.413 15.9916 11.4326 15.9945 12.7596 16.0084C13.4366 16.0155 14.098 16.0098 14.2294 15.9958C14.5259 15.9642 14.6925 15.8583 14.8077 15.6286C14.892 15.4605 14.8942 15.4243 14.8942 14.2336C14.8942 13.5485 14.8776 12.9529 14.8564 12.8784C14.8064 12.7028 14.6041 12.4972 14.4344 12.4497C14.2135 12.3879 11.5933 12.4024 11.4519 12.4663ZM25.4327 17.6684C24.6804 17.7226 23.8815 17.9372 23.2599 18.2519C22.7482 18.5111 22.0492 19.0423 21.5685 19.5373C21.326 19.787 21.1981 19.8337 21.1263 19.6987C21.1043 19.6573 21.0862 19.3755 21.0857 19.0691C21.0847 18.4357 21.0362 18.2646 20.8122 18.1036L20.6827 18.0105H19.2981H17.9135L17.784 18.1036C17.7128 18.1548 17.6223 18.2681 17.5829 18.3555C17.5141 18.508 17.5113 18.7395 17.5107 24.23C17.5103 27.8642 17.5239 29.9956 17.5479 30.083C17.595 30.2539 17.7991 30.4578 17.9734 30.5082C18.1569 30.5612 20.7804 30.5584 20.9206 30.505C21.0679 30.4489 21.2388 30.2817 21.3028 30.1309C21.3459 30.0294 21.3559 29.5432 21.3563 27.5153C21.3573 23.7754 21.4418 22.8997 21.878 22.1111C22.2533 21.4323 22.9522 20.9104 23.7603 20.7053C24.1423 20.6084 24.8095 20.5986 25.1458 20.6852C25.8685 20.8711 26.4466 21.4203 26.6634 22.1271C26.8508 22.7383 26.8668 23.0578 26.8908 26.6906C26.9078 29.2548 26.925 30.1209 26.9601 30.1825C27.0523 30.3446 27.2719 30.5017 27.4407 30.5264C27.5315 30.5397 28.2128 30.5453 28.9548 30.5388L30.3038 30.5269L30.4458 30.43C30.5238 30.3767 30.6231 30.2599 30.6664 30.1705C30.7446 30.0091 30.7451 29.9768 30.7295 26.0436C30.7161 22.6694 30.7046 22.0159 30.6521 21.6531C30.5644 21.0466 30.5249 20.8602 30.4119 20.5199C30.0096 19.309 29.2026 18.4881 27.9592 18.0252C27.1806 17.7354 26.2763 17.6077 25.4327 17.6684ZM11.4088 18.0462C11.3428 18.0755 11.239 18.1653 11.1781 18.2457L11.0673 18.392L11.0573 24.2042C11.0475 29.9432 11.0483 30.0185 11.1241 30.1748C11.1663 30.2619 11.2647 30.3767 11.3427 30.43L11.4846 30.5269L12.8337 30.5388C13.5756 30.5453 14.2576 30.5397 14.3492 30.5263C14.5596 30.4954 14.7997 30.2869 14.8548 30.0871C14.8804 29.9944 14.8936 27.977 14.8932 24.23C14.8926 18.7395 14.8897 18.508 14.821 18.3555C14.7816 18.2681 14.6911 18.1548 14.6199 18.1036L14.4904 18.0105L13.0096 18.0017C11.8216 17.9946 11.5051 18.0034 11.4088 18.0462Z" fill="#42A8D4" />
                                            </svg>
                                        </a>
                                    </li>
                                    </Zoom>
                                    <Zoom  delay={200} duration={1100}  > 
                                    <li>
                                        <a href="https://twitter.com/i/flow/login" target={"blank"} >
                                            <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M40.5 21C40.5 32.3333 31.5344 41.5 20.5 41.5C9.4656 41.5 0.5 32.3333 0.5 21C0.5 9.66674 9.4656 0.5 20.5 0.5C31.5344 0.5 40.5 9.66674 40.5 21Z" stroke="#42A8D4" />
                                                <path d="M30.9279 15.0137C30.3451 15.8806 29.6301 16.6195 28.7829 17.2305C28.7913 17.3944 28.7955 17.5797 28.7955 17.7862C28.7955 18.934 28.6281 20.0831 28.2935 21.2337C27.9588 22.3842 27.4476 23.4855 26.7598 24.5375C26.072 25.5895 25.2528 26.5215 24.3021 27.3335C23.3513 28.1454 22.2085 28.7928 20.8735 29.2757C19.5386 29.7586 18.1079 30 16.5815 30C14.1992 30 12.0054 29.3569 10 28.0706C10.3559 28.1102 10.6973 28.13 11.0241 28.13C13.0143 28.13 14.7919 27.517 16.3568 26.291C15.4288 26.274 14.5978 25.9884 13.8637 25.4341C13.1295 24.8798 12.6243 24.1715 12.348 23.3093C12.6211 23.3613 12.8907 23.3873 13.1566 23.3873C13.5395 23.3873 13.9162 23.3374 14.2868 23.2375C13.2966 23.0392 12.475 22.5459 11.8223 21.7578C11.1695 20.9697 10.8431 20.0601 10.8431 19.0289V18.9758C11.451 19.3124 12.0993 19.4914 12.7882 19.5129C12.2016 19.1218 11.7365 18.6118 11.3929 17.9829C11.0493 17.354 10.8775 16.6734 10.8775 15.9412C10.8775 15.1689 11.071 14.4497 11.458 13.7837C12.5349 15.1053 13.8398 16.1615 15.3727 16.9524C16.9057 17.7433 18.5502 18.1825 20.3063 18.2701C20.2314 17.958 20.1939 17.6322 20.1938 17.2929C20.1938 16.108 20.6131 15.0963 21.4517 14.2578C22.2903 13.4193 23.302 13 24.4869 13C25.7274 13 26.7723 13.4517 27.6215 14.3551C28.5919 14.1629 29.5004 13.8152 30.3472 13.3122C30.021 14.3388 29.3923 15.1309 28.4613 15.6882C29.317 15.5865 30.1392 15.3617 30.9278 15.0137H30.9279Z" fill="#42A8D4" />
                                            </svg>
                                        </a>
                                    </li>
                                    </Zoom>
                                    <Zoom  delay={250} duration={1100} > 
                                    <li>
                                        <a href="https://www.youtube.com/" target={"blank"} >
                                            <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M40.5 21C40.5 32.3333 31.5344 41.5 20.5 41.5C9.4656 41.5 0.5 32.3333 0.5 21C0.5 9.66674 9.4656 0.5 20.5 0.5C31.5344 0.5 40.5 9.66674 40.5 21Z" stroke="#42A8D4" />
                                                <path d="M29.5576 16.1869C29.4439 15.7635 29.221 15.3773 28.9111 15.067C28.6013 14.7568 28.2154 14.5333 27.792 14.4191C26.2338 14 19.9873 14 19.9873 14C19.9873 14 13.7408 14 12.1825 14.4169C11.759 14.5307 11.3729 14.7541 11.0629 15.0644C10.753 15.3747 10.5302 15.761 10.4169 16.1847C10 17.7452 10 21 10 21C10 21 10 24.2548 10.4169 25.8131C10.6465 26.6736 11.3242 27.3513 12.1825 27.5809C13.7408 28 19.9873 28 19.9873 28C19.9873 28 26.2338 28 27.792 27.5809C28.6525 27.3513 29.328 26.6736 29.5576 25.8131C29.9745 24.2548 29.9745 21 29.9745 21C29.9745 21 29.9745 17.7452 29.5576 16.1869ZM18.0032 23.9873V18.0127L23.1752 20.9777L18.0032 23.9873Z" fill="#42A8D4" />
                                            </svg>
                                        </a>
                                    </li>
                                    </Zoom>
                                </ul>
                            </div>
                            <div className='footer_col quik_links'>
                            <Fade top  delay={10} duration={1000}  > <h4>Quik Links</h4></Fade>
                                <ul>
                                <Fade top  delay={50} duration={1100}  ><li><HashLink smooth   to={'/#Who_we_are_sec'}  scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} >About Us</HashLink></li> </Fade>
                                <Fade top  delay={100} duration={1100}  > <li><HashLink smooth   to={'/#for_buy_link'}  scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} >Buy</HashLink></li> </Fade>
                                <Fade top  delay={150} duration={1100}  > <li><HashLink smooth   to={'/#for_buy_link'}  scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} >Rent</HashLink></li> </Fade>
                                <Fade top  delay={200} duration={1100}  >  <li><HashLink smooth to="/listyourproperty#product_trigger_link" >List Your Property</HashLink></li> </Fade>
                                <Fade top  delay={250} duration={1100}  >  <li><HashLink smooth to="/contactpage#product_trigger_link" >Contact Us</HashLink></li> </Fade>
                                <Fade top  delay={300} duration={1100}  > <li><HashLink smooth to="/latest_news_page#product_trigger_link" >Latest News</HashLink></li> </Fade>
                                </ul>
                            </div>
                            <div className='footer_col popular_tags'>
                            <Fade top  delay={10} duration={1000}  ><h4>Popular Tags</h4> </Fade>
                                <ul>
                                <Fade top  delay={50} duration={1100} > <li><HashLink smooth to={'/product/1#product_trigger_link'}  scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} >Beautiful</HashLink></li> </Fade>
                                <Fade top  delay={100} duration={1100} > <li><HashLink smooth to={'/product/2#product_trigger_link'}  scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} >Public</HashLink></li> </Fade>
                                <Fade top  delay={150} duration={1100} > <li><HashLink smooth to={'/product/3#product_trigger_link'}  scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} >Travel</HashLink></li> </Fade>
                                <Fade top  delay={200} duration={1100} > <li><HashLink smooth to={'/product/4#product_trigger_link'}  scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} >Entertainment</HashLink></li> </Fade>
                                <Fade top  delay={250} duration={1100} > <li><HashLink smooth to="/latest_news_page#product_trigger_link" >Blog</HashLink></li> </Fade>
                                </ul>
                            </div>
                            <div className='footer_col popular_posts'>
                            <Fade top  delay={10} duration={1100}  >   <h4>Popular Posts</h4> </Fade>
                              <div className='parent-blog_footer'>
                              <Fade top  delay={50} duration={1100} >
                                  <div className='posts_main'>
                                    <img src={footer_post_img_1} alt="footer_post_img" />
                                    <div className='footer_post_text'>
                                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                        <span><img src={footer_post_icon} alt="" /> 22 Mar 2022</span>
                                    </div>
                                </div>
                                </Fade>
                                <Fade top  delay={100} duration={1100} >
                                <div className='posts_main'>
                                    <img src={footer_post_img_2} alt="footer_post_img" />
                                    <div className='footer_post_text'>
                                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                                        <span><img src={footer_post_icon} alt="" /> 22 Mar 2022</span>
                                    </div>
                                </div>
                                </Fade>
                              </div>
                            </div>
                        </div>
                        <div className='copyright_sec'>
                        <Zoom>  <p>Copyright @ 2022. All rights reserved.</p> </Zoom>
                        </div>
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default Footer;