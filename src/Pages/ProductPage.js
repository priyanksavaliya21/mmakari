import React, { useEffect,  useState, useMemo } from "react";
import{ PosterSec} from "../Components/PropertyPage-Compo/PosterSec";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import loc from "../assets/img/productPage/loc.png";
import mail from "../assets/img/productPage/mail.png";
import call from "../assets/img/productPage/phone.png";
import whatapp from "../assets/img/productPage/whatapp.png";
import avtar from "../assets/img/productPage/avtar.png";
import { Heading } from "../Components/PropertyPage-Compo/Heading";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {ProductReview} from "../Components/ProductPage-Compo/ProductReview";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import ShakaPlayer from "shaka-player-react";
import { Card } from "../Components/PropertyPage-Compo/PropertyPageSection1";
import { useParams } from "react-router-dom";
import { Loader } from "../Components/LandingPage-Compo/WhatappBtn";
import {
  GoogleMap,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import LightBox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { useSelector, useDispatch } from "react-redux";
import {Filterdataproduct} from "../action/index";
import { LazyLoadImage } from 'react-lazy-load-image-component';
 
 
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <svg
        width="30"
        height="21"
        viewBox="0 0 30 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.7601 9.08463L17.8744 2.2166L19.6895 0.406128L29.6741 10.365L19.6895 20.3239L17.8744 18.5134L24.7601 11.6454H16.9475H0.33252V9.08463H24.7601Z"
          fill="#42A8D4"
        />
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={"slick-arrow slick-prev"} onClick={onClick}>
      <svg
        width="30"
        height="21"
        viewBox="0 0 30 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.7601 9.08463L17.8744 2.2166L19.6895 0.406128L29.6741 10.365L19.6895 20.3239L17.8744 18.5134L24.7601 11.6454H16.9475H0.33252V9.08463H24.7601Z"
          fill="#42A8D4"
        />
      </svg>
    </div>
  );
};

 //higer order component
const ProductPage = ()=>{
  const {pageid} = useParams();
  const  pagedata = useSelector((state) => state.layer1.Filldata);
  const dispatch = useDispatch();
  const [runload , setload]= useState(false);

  useEffect(() => {

    if ( pagedata === null) {
      setload(false)
    }
      setload(true)  
      dispatch(Filterdataproduct(pageid))
  
   },[pageid , pagedata , dispatch]);
  
  return runload ? <Innersection productdata={pagedata} /> : <Loader /> ;
}

//-----------------------------------------------------------------------------
const Innersection = ({productdata}) => {
 
  const Recommendation = useSelector((state) => state.layer1.Cards);
  const [first] = useState(Recommendation);

  //like
  const [givelike, setlike] = useState(false);
  const like = () => {
    setlike(!givelike);
  };

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    pauseOnDotsHover: true,
  };
  const settings2 = {
    dots: false,
    infinite : false ,
    peed: 500,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: false,
    prevArrow:false ,
    autoplay: true ,
    pauseOnDotsHover: true,
    slidesToShow :6 ,
    swipeToSlide : true ,
    focusOnSelect : true ,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
         
        }
      }
    ]
  };
  
  // const object1 = productdata.productpage.PropertyDetailInfo;
  // console.log(Object.keys(object1));
  return (
    <>
      <div className="main_wrapper productpage_wrapper" >
      <PosterSec lighttext="Available" boldtext="Property" />
      <section className="ProductPage-section1">
        <div className="container ">
         <Zoom top delay={10}  duration={700} >
          <div className="topCard">
          <Fade top delay={100}  duration={1200}> 
            <div className="top-1">
            <h2 className="theme_product">{productdata.properttheme}</h2> 
              <h2 className="price_tag"> {productdata.productpage.PropertyDetailInfo.Price}</h2> 
            </div>
            </Fade>
            <Fade top delay={150}  duration={1200}>
            <div className="top-2">
              <div className="top-2_left">
                <ul className="rating_star">
                {productdata.productpage.ratingProduct.map((src , index)=>{
                        return(
                          <>
                          <li key={index} >
                           <img src={src} alt={`star${index}`} />
                          </li>
                          </>
                      )
                })}
                </ul>
                <div className="rating_text">{productdata.productpage.reviewText} Review</div>
              </div>
              <ul className="top-2_right">
              {productdata.productpage.ButtonsDetils.map((btntext , index)=>{
                return(
                  <>
                  <li key={index} >{btntext}</li>
                  </>
                )
              })}
              </ul>
            </div>
            </Fade>
          </div> 
          </Zoom>
          <Zoom  delay={50}  duration={1200}> 
          <div className="Property_Slider">
            <Slider
              {...settings}
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
            >
                  {productdata.productpage.BigSiliderimg.map((src , index)=>{
                       return(
                       <>
                       <Fade top  delay={50}  duration={1200} >
                       <div className="slider_photo" key={index} >
                          <LazyLoadImage effect="blur" src={src} alt={`poster${index}`} />
                        </div>
                        </Fade>
                       </>
                       )
                  })}
             
            </Slider>
          </div>
          </Zoom>
        </div>
      </section>
      <section className="Property-Page-section-2">
        <Container>
        <Zoom  delay={50}  duration={1200}> 
          <div className="target_slider margin_spacing_row">
            <Slider
             {...settings2}
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
            >
               {productdata.productpage.BigSiliderimg.map((src,index)=>{
                       return(
                       <>  <Fade top  delay={50}  duration={1200} >
                       <div className="slider_img_spacing" key={index} >
                            <LazyLoadImage
                             effect="blur"
                            src={`${productdata.productpage.smallSliderimg}${index}`} 
                            alt={`img_details_bg${index}`}
                            className="img_detailsx"
                            />
                       </div>
                       </Fade>
                       </>
                       )
                  })}
            </Slider>
          </div>
          </Zoom>
          <div className="Property_info">
            <div className="Property_info_head">
            <Fade delay={150}  duration={1000} >    <h2>{productdata.properttheme}</h2> </Fade>
            <Fade  delay={150} duration={1000} >  
              <div className="location_info">
                <div className="location_logo_info">
                  <img src={loc} alt="location" className="location_info" />
                </div>
                <h3>{productdata.productpage.locality}</h3>
              </div>
              </Fade>
            </div>
            <div className="Description">
            <Fade top  delay={150}  duration={1000} >  <h3 className="title_info">Description</h3></Fade>
            <Fade top  delay={150}  duration={1000} >   <p className="Description_text">   {productdata.productpage.Description}   </p></Fade>
            </div>
            <div className="Pro_details_Cardx">
              <Row className="flex_props">
                <div className="left_info">
                <Fade top  delay={150}  duration={1000} >  <h3 className="title_info">Property Detail</h3> </Fade>
                <Zoom  delay={50}  duration={1200}> 
                  <div className="details_info_card">
                    <ul className="details_part1">
                    <Fade top  delay={200}  duration={1000} > 
                      <li>
                        <p>Property ID </p> <p>{productdata.productpage.PropertyDetailInfo.PropertyID}</p>
                      </li>
                      </Fade>
                      <Fade top  delay={200}  duration={1000} > 
                      <li>
                        <p>Home Area </p> <p>{productdata.productpage.PropertyDetailInfo.HomeArea}</p>
                      </li>
                      </Fade>
                      <Fade top  delay={200}  duration={1000} > 
                      <li>
                        <p>Rooms </p> <p>{productdata.productpage.PropertyDetailInfo.Rooms}</p>
                      </li>
                      </Fade>
                      <Fade top  delay={200}  duration={1000} > 
                      <li>
                        <p>Baths </p> <p>{productdata.productpage.PropertyDetailInfo.Baths}</p>
                      </li>
                      </Fade>
                      <Fade top  delay={200}  duration={1000} > 
                      <li className="mb-0">
                        <p>Year built </p> <p>{productdata.productpage.PropertyDetailInfo.YearBuilt}</p>
                      </li>
                      </Fade>
                    </ul>
                    <ul className="details_part2">
                    <Fade top  delay={200}  duration={1000} > 
                      <li>
                        <p>Lot Area </p> <p> {productdata.productpage.PropertyDetailInfo.LotArea}</p>
                      </li>
                      </Fade>
                      <Fade top  delay={200}  duration={1000} > 
                      <li>
                        <p>Lot dimensions</p> <p>{productdata.productpage.PropertyDetailInfo.LotDimensions}</p>
                      </li>
                      </Fade>
                      <Fade top  delay={200}  duration={1000} > 
                      <li>
                        <p>Beds </p> <p>{productdata.productpage.PropertyDetailInfo.Beds}</p>
                      </li>
                      </Fade>
                      <Fade top  delay={200}  duration={1000} > 
                      <li>
                        <p>Price </p><p>{productdata.productpage.PropertyDetailInfo.Price}</p>
                      </li>
                      </Fade>
                      <Fade top  delay={200}  duration={1000} > 
                      <li className="mb-0">
                        <p>Property Status</p> <p>{productdata.productpage.PropertyDetailInfo.PropertyStatus}</p>
                      </li>
                      </Fade>
                    </ul>
                  </div>
                  </Zoom>
                </div>
                <div className="right_info">
                <Zoom  delay={50}  duration={1200}> 
                  <div className="property_contact_card">
                    <ul>
                    <Fade top  delay={200}  duration={1000} >
                      <li>
                        <a href="mailto:support@gmail.com" className="left_logo">
                          <img src={mail} alt="mail" />
                        </a>
                        <a href="mailto:support@gmail.com" className="sub_details">
                          <p className="title_contact">Drop a mail</p>
                          <p className="title_contact_sub">abc@xyz.com</p>
                        </a>
                      </li>
                      </Fade>
                      <Fade top  delay={200}  duration={1000} >
                      <li>
                        <a href="tel:2352581471" className="left_logo">
                          <img src={call} alt="call" />
                        </a>
                        <a href="tel:2352581471" className="sub_details">
                          <p className="title_contact">Call Us</p>
                          <p className="title_contact_sub">235 258 147 1</p>
                        </a>
                      </li>
                      </Fade>
                      <Fade top  delay={200}  duration={1000} >
                      <li>
                        <a href="https://web.whatsapp.com/" target={"blank"} className="left_logo">
                          <img src={whatapp} alt="whatapp" />
                        </a>
                        <a href="https://web.whatsapp.com/"  target={"blank"} className="sub_details">
                          <p className="title_contact">Leave us a message</p>
                          <p className="title_contact_sub">2358 254 259</p>
                        </a>
                      </li>
                      </Fade>
                      <Fade top  delay={200}  duration={1000} >
                      <li className="mb-lg-0">
                        <a href="#0" className="left_logo">
                          <img src={avtar} alt="avtar" />
                        </a>
                        <a href="#0" className="sub_details">
                          <p  className="avtar_text">
                            Christian Gibson usually responds within 5 minutes
                          </p>
                        </a>
                        <a href="#0" className="like" onClick={like}>
                          {givelike ? (
                            <FavoriteIcon className="filled" />
                          ) : (
                            <FavoriteBorderIcon className="outline" />
                          )}
                        </a>
                      </li>
                      </Fade>
                    </ul>
                  </div>
                  </Zoom>
                </div>
              </Row>
            </div>
            <div className="extra_stuff"> 
              <Accordion> 
                <Zoom  delay={50}  duration={1000}>        
                <Accordion.Item eventKey="0">
                  <Accordion.Header >Property Video</Accordion.Header>
                  <Accordion.Body>
                  <Zoom  delay={50}  duration={1200}>
                    <div className="Property_video">
                      <ShakaPlayer
                        src={productdata.productpage.PropertyDetailInfo.PropertyVideo}
                        muted={true}
                      />
                    </div>
                    </Zoom>
                  </Accordion.Body>
                </Accordion.Item>
                </Zoom>
                <Zoom  delay={50}  duration={1000}>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Location</Accordion.Header>
                  <Accordion.Body>
                  <Zoom  delay={50}  duration={1200}>
                    <div className="Property_map">
                      <Mymap locationData={productdata.productpage.PropertyDetailInfo.googlemap} />
                    </div>
                    </Zoom>
                  </Accordion.Body>
                </Accordion.Item>
                </Zoom>
                <Zoom delay={50}  duration={1000}>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Gallery</Accordion.Header>
                  <Accordion.Body>
                    <div className="Property_Galllay">
                      <Row>
                        <Gallery GalleryData={productdata.productpage.PropertyDetailInfo.gallary} />
                      </Row>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                </Zoom>
                <Zoom  delay={50}  duration={1000}>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Write Review</Accordion.Header>
                  <Accordion.Body>
                    <ProductReview productdata={productdata} />
                  </Accordion.Body>
                </Accordion.Item>
                </Zoom>
              </Accordion>
            </div>
          </div>
        </Container>
      </section>
      <section className="Property-Page-section-3">
        <Container>
          <div className="Property-Page-section-3_head">
            <Heading
              title1="Photo"
              boldPart="gallery"
              text="Holiday Home Rental Apartments & Villas in Dubai."
            />
          </div>
          <div className="gallary">
            <div className="top_gallary">
              <div className="top_left_gallary">
              <Zoom  delay={50}  duration={1000}> <img src={productdata.productpage.PropertyDetailInfo.PhotoGallary[0]} alt="item1" /> </Zoom>
              </div>
              <div className="top_right_gallery">
              <Zoom  delay={50}  duration={1000}><img src={productdata.productpage.PropertyDetailInfo.PhotoGallary[1]} alt="item2" /></Zoom>
                <div className="inner_gallery">
                  <div className="left_inner">
                  <Zoom  delay={50}  duration={1000}> <img src={productdata.productpage.PropertyDetailInfo.PhotoGallary[2]} alt="item5" /></Zoom>
                  </div>
                  <div className="right_inner">
                  <Zoom  delay={50}  duration={1000}> <img  src={productdata.productpage.PropertyDetailInfo.PhotoGallary[3]} alt="item6" /></Zoom>
                  </div>
                </div>
              </div>
            </div>
            <div className="Bottom_gallary">
              <div className="bottom_left_block">
              <Zoom  delay={50}  duration={1000}> <img  src={productdata.productpage.PropertyDetailInfo.PhotoGallary[4]} alt="item4" /></Zoom>
               
              </div>
              <div className="bottom_right_block">
              <Zoom  delay={50}  duration={1000}> <img  src={productdata.productpage.PropertyDetailInfo.PhotoGallary[5]} alt="item1" /></Zoom>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="Property-Page-section-4">
        <Container>
          <div className="Property-Page-section-4_head">
            <Heading title1="Featured" boldPart="Property" />
          </div>
          <Row>
            {first.slice(0, 3).map((data) => {
              return (
                <>
                  <Col lg={4} md={6}  className="spacing" key={data.id} >
                  <Zoom>
                    <Card item={data} />
                    </Zoom>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </section>
      </div>
    </>
  );
};


 //lightbox gallary-------------------------------------------------------------------------
const Gallery = ({GalleryData}) => {
  const [showLight, setShowLight] = useState(null);
  const target_React_Revel = document.querySelector('.extra_stuff .accordion .react-reveal:nth-child(3)');
  const showLightBox = (index) => {
    setShowLight({
      startIndex: index,
    });
    target_React_Revel.classList.add("offZoom");
  };

  const hideLightBox = () => {
    setShowLight(null);
    target_React_Revel.classList.remove("offZoom");
  };
  return (
    <>
      {GalleryData.map((image, index) => (
        <>
          <Col md={4} sm={6} key={index} className="spacing_gallary_collaps">
          <Zoom>
            <div className="collaps_gallary">
              <img
                src={image.src}
                alt={"GallaryForCollections"}
                onClick={() => showLightBox(index)}
              />
            </div>
            </Zoom>
          </Col>
        </>
      ))}
      {showLight ? (
        <LightBox
          images={GalleryData.map((img) => ({ url: img.src, title: img.caption }))}
          startIndex={showLight.startIndex}
          onClose={hideLightBox}
        />
      ) : null}
    </>
  );
};



const Mymap = ({locationData}) => {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBp0sW--COqJGmaKOlj6_reRQW619tvRmA",
    libraries: ["places"],
  });

   

  if (!isLoaded) return <p>loading Map....................................</p>;
  return <Map MarkerData={locationData} />;
};

const Map = ({MarkerData}) => {

  const center = useMemo(() =>{
    return MarkerData;
  },[MarkerData]);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <GoogleMap zoom={12} center={center} mapContainerStyle={containerStyle}>
        <Marker position={center} />
      </GoogleMap>
    </>
  );
};


export { ProductPage };
