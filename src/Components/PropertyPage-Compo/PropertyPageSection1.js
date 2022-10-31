import React, { useState , useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import plus from "../../assets/img/Vectorb.png";
import minus from "../../assets/img/Vectorx.png";
import leftaroww from "../../assets/img/leftaroww.png";
import Col from 'react-bootstrap/Col';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';



const PropertyPageSection1 = () => {
  const first = useSelector((state) => state.layer1.Cards)
  // console.log(first);

  const [currnum, setnum] = useState(6);

  const Filter_main_tabs1 = [
    { idAndFor: "radio1", name: "check1", label: "Dubai" },
    { idAndFor: "radio2", name: "check2", label: "Abudhabi" },
    { idAndFor: "radio3", name: "check3", label: "Al Arab" }
  ]
  const Filter_main_tabs2 = [
    { idAndFor: "radio4", name: "check4", label: "Studio Location" },
    { idAndFor: "radio5", name: "check5", label: "Residencial Location" },
    { idAndFor: "radio6", name: "check6", label: "lifestyle Location" }
  ]
  const Filter_main_tabs3 = [
    { idAndFor: "radio7", name: "check7", label: "buy" },
    { idAndFor: "radio8", name: "check8", label: "rent" },
    { idAndFor: "radio9", name: "check9", label: "sell" }
  ]
  const Filter_main_tabs4 = [
    { idAndFor: "radio10", name: "check10", label: "Baths" },
    { idAndFor: "radio11", name: "check11", label: "lawns" },
    { idAndFor: "radio12", name: "check12", label: "Prime Property" },
    { idAndFor: "radio13", name: "check13", label: "Beach Property" },
    { idAndFor: "radio14", name: "check14", label: "farm property" }
  ]

  const loadmore1 = () => {
    const addRest = first.length - 6;
    setnum(currnum + addRest);
  }
  const loadmore2 = () => {
    setnum(6);
  }
  return (
    <>
      <div className="Property-Page-section-1">
        <Container>
          <Row>
            <aside className="left-col" >
              <div className="Left-Block">
              <Fade top>
                <div className="filter_Search">
                  <input
                    type="search"
                    name="search"
                    className="search_filter"
                    id="search_property"
                    placeholder="Keywords..."
                  />
                </div>
                </Fade>
                <div className="Filter_block">
                <Fade top delay={400}  duration={700} > <Filter_main_tabs title="Where" data={Filter_main_tabs1} /> </Fade>
                <Fade top delay={500}  duration={800} >  <Filter_main_tabs title="PROPERTY TYPES" data={Filter_main_tabs2} /> </Fade>
                <Fade top delay={600}  duration={900} >  <Filter_main_tabs title="PROPERTY STATUS" data={Filter_main_tabs3} /> </Fade>
                <Fade top delay={700}  duration={1000} > <Filter_main_tabs title="FEATURES" data={Filter_main_tabs4} /> </Fade>
                </div>
                <div className="btn-block">
                <Fade top delay={800}  duration={1200} >  <ButtonX text="Search" id="btn001" />  </Fade>
                </div>
              </div>
            </aside>
            <div className="right-col">
              <div className="results">
              <Fade top >  <p> Showing {currnum} of {first.length} Results  </p></Fade>
              </div>
              <Row>
                {first.slice(0, currnum).map((data, index) => {
                  return (
                    <>
                      <Col md={6} className="spacing" key={index} >
                      <Zoom>
                        <Card item={data} />
                        </Zoom>
                      </Col>
                    </>
                  )
                })}
              </Row>
              <Zoom  delay={400}  duration={700}>
              <div className="Load_more_btn_block " >
                {currnum === first.length ? <ButtonX text="Show Less" id="btn003" eventclick={loadmore2} /> : <ButtonX text="Load More" id="btn002" eventclick={loadmore1} />}
              </div>
              </Zoom>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};



const Card = ({ item }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnDotsHover: true,
    focusOnSelect: true,
    draggable: true
  };

  return (
    <>
      <div className="Property_Card">
        <div className="Slider_card">
          <Slider {...settings}>
            <div className="cardtop">
              <img src={item.CardTopimg[0]} alt="property_img" className="property_img" />
            </div>
            <div className="cardtop">
              <img src={item.CardTopimg[1]} alt="property_img" className="property_img" />
            </div>
            <div className="cardtop">
              <img src={item.CardTopimg[2]} alt="property_img" className="property_img" />
            </div>
          </Slider>
        </div>
        <div className="Card_bottom">
          <button className="property_status">{item.propertystatus}</button>
          <h3 className="proerty_theme"> {item.properttheme}</h3>
          <div className="details_parent">
            <div className="details_tab">
              <div className="img_details">
                <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.8611 0.0221503C11.2311 0.146392 9.86185 0.71893 8.28182 1.93683C7.76824 2.33271 7.20166 2.62254 6.64199 2.77578C6.28683 2.87297 6.03966 2.88847 4.3972 2.91637L2.55149 2.94775L2.28307 3.08918C2.002 3.23726 1.74761 3.49033 1.59009 3.77858C1.50424 3.93562 1.49564 4.20483 1.48209 7.14609L1.46733 10.343L1.02573 10.7905C0.676468 11.1446 0.539676 11.3306 0.371295 11.6806C-0.0157756 12.4852 -0.0109768 12.4102 0.0055818 17.374L0.0202419 21.7812L0.160568 21.9932C0.389172 22.3387 0.590881 22.4064 1.39134 22.4061C2.14855 22.4059 2.29093 22.3636 2.54316 22.0638C2.73111 21.8405 2.78816 21.5939 2.78848 21.0035C2.78874 20.5651 2.80488 20.473 2.9085 20.3179C2.97432 20.2194 3.11079 20.0972 3.21173 20.0466C3.38454 19.9597 3.98465 19.9543 13.4939 19.9543C23.0031 19.9543 23.6032 19.9597 23.776 20.0466C23.877 20.0972 24.0134 20.2194 24.0792 20.3179C24.1829 20.473 24.199 20.5651 24.1993 21.0035C24.1996 21.5939 24.2566 21.8405 24.4446 22.0638C24.6968 22.3636 24.8392 22.4059 25.5964 22.4061C26.2486 22.4063 26.2939 22.3993 26.5274 22.262C26.6991 22.1611 26.8065 22.0481 26.885 21.8859C26.9972 21.6542 26.9972 21.6522 26.9823 17.1259L26.9674 12.5977L26.8436 12.2286C26.6405 11.6226 26.4154 11.256 25.9539 10.7799L25.5204 10.3326L25.5057 7.14097C25.4921 4.20457 25.4835 3.93562 25.3977 3.77858C25.2401 3.49033 24.9858 3.23726 24.7047 3.08918L24.4363 2.94775L22.5906 2.91637C20.9377 2.88826 20.7024 2.87339 20.3386 2.77394C19.7941 2.62507 19.2395 2.34768 18.7927 2.0008C17.901 1.30834 17.1204 0.836158 16.3794 0.540898C15.3241 0.120342 14.0454 -0.0681837 12.8611 0.0221503ZM14.7204 0.897172C15.9404 1.09798 16.9413 1.57544 18.24 2.57623C18.7854 2.99653 19.23 3.23547 19.8517 3.44234C20.5354 3.66984 20.9723 3.71197 22.6488 3.71197C24.3179 3.71197 24.432 3.73085 24.6195 4.0384C24.7228 4.20778 24.7259 4.29738 24.7261 7.07732C24.7263 9.78102 24.7211 9.94017 24.634 9.91338C24.1684 9.77031 23.7787 9.72517 23.0032 9.72448L22.1503 9.72369L22.1324 8.07574C22.1176 6.71108 22.1001 6.39594 22.0308 6.24238C21.9385 6.03803 21.6229 5.73634 21.4211 5.65961C21.3471 5.63145 20.1475 5.61078 18.6189 5.61126C15.9478 5.61215 15.9459 5.6122 15.7373 5.73038C15.6224 5.7954 15.4563 5.95129 15.3682 6.07674C15.2235 6.28246 15.2059 6.35133 15.1892 6.77906C15.1721 7.21359 15.1806 7.26395 15.2906 7.38107C15.4581 7.55937 15.7181 7.55431 15.8631 7.36989C15.9458 7.26479 15.9724 7.15474 15.9724 6.91817C15.9724 6.35096 15.7127 6.40143 18.6309 6.40143C20.9371 6.40143 21.1871 6.40976 21.2526 6.48854C21.3103 6.5581 21.3249 6.89107 21.3249 8.13649V9.69733L18.6487 9.71098L15.9724 9.72464V9.30662C15.9724 9.0767 15.9576 8.85015 15.9396 8.80321C15.8902 8.67444 15.6242 8.55626 15.4706 8.59481C15.2459 8.65123 15.1814 8.80575 15.1814 9.28721V9.72369H13.4959H11.8105L11.7952 8.01426L11.78 6.30482L11.6196 6.07674C11.5314 5.95129 11.3653 5.7954 11.2504 5.73038C11.0419 5.6122 11.0399 5.61215 8.36889 5.61126C6.61035 5.61073 5.64526 5.62955 5.5476 5.66636C5.46596 5.69716 5.3192 5.79804 5.22149 5.89048C4.88225 6.21158 4.87513 6.25398 4.85535 8.07574L4.83747 9.72369H4.00116C3.24353 9.72369 2.67078 9.78861 2.35374 9.91048C2.26657 9.94396 2.26145 9.78782 2.26166 7.07943C2.26182 4.29738 2.26499 4.20784 2.36829 4.0384C2.55576 3.73085 2.66988 3.71197 4.33898 3.71197C6.0154 3.71197 6.45236 3.66984 7.13601 3.44234C7.7992 3.22165 8.19671 2.99837 8.99627 2.39757C9.37949 2.10959 9.88969 1.76776 10.1301 1.63798C11.5338 0.880033 13.0902 0.628859 14.7204 0.897172ZM10.9608 6.50342C10.9948 6.56717 11.0154 7.19081 11.0154 8.16502V9.72464L8.33909 9.71098L5.66282 9.69733V8.13649C5.66282 6.89107 5.67743 6.5581 5.73517 6.48854C5.80067 6.40976 6.05063 6.40143 8.35686 6.40143C10.8233 6.40143 10.9079 6.40475 10.9608 6.50342ZM24.1091 10.5932C25.1101 10.8539 25.8896 11.6448 26.1234 12.6367C26.1818 12.8841 26.2015 13.3203 26.2021 14.3775L26.2029 15.7881H14.9441C3.75558 15.7881 3.68465 15.7888 3.57981 15.8936C3.44655 16.0269 3.44444 16.2669 3.57517 16.4283L3.67595 16.5528L14.9394 16.5663L26.2029 16.5799V19.0475C26.2029 20.8964 26.187 21.531 26.1396 21.5784C26.0527 21.6653 25.1961 21.6632 25.0833 21.5757C25.0156 21.5233 24.9943 21.3805 24.9788 20.877C24.9629 20.36 24.939 20.2056 24.848 20.0333C24.6977 19.7486 24.393 19.454 24.0988 19.3091L23.8562 19.1895H13.4939H3.13157L2.88899 19.3091C2.59479 19.454 2.29004 19.7486 2.13979 20.0333C2.04878 20.2056 2.02483 20.36 2.00896 20.877C1.99346 21.3805 1.9721 21.5233 1.90444 21.5757C1.79169 21.6632 0.935078 21.6653 0.848172 21.5784C0.800764 21.531 0.78489 20.8973 0.78489 19.0513V16.5875L1.46506 16.5701C2.04471 16.5554 2.16163 16.5379 2.25607 16.4523C2.40078 16.3212 2.40352 16.0357 2.26145 15.8936C2.16679 15.799 2.08569 15.7881 1.47044 15.7881H0.78489L0.785681 14.3775C0.786261 13.3203 0.805931 12.8841 0.864308 12.6367C1.0955 11.6561 1.87143 10.8611 2.85603 10.5959C3.2826 10.481 23.6684 10.4784 24.1091 10.5932Z" fill="#42A8D4" />
                </svg>
                <span >{item.bedrooms}</span>
              </div>
              <div className="img_details">
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.16958 0.0665688C3.65142 0.212147 3.21737 0.473116 2.81306 0.882014C2.16239 1.54012 1.91236 2.16476 1.91236 3.13224C1.91236 3.6398 1.9228 3.69525 2.0389 3.80435C2.19772 3.95354 2.40296 3.95644 2.55827 3.81173C2.62412 3.75043 2.68033 3.69503 2.68323 3.68869C2.68613 3.68234 2.70669 3.39414 2.7289 3.04824C2.76275 2.52193 2.79474 2.3658 2.92506 2.09121C3.12374 1.67263 3.59285 1.20155 4.01783 0.993795C4.31729 0.847397 4.3961 0.833397 4.92017 0.833397C5.44818 0.833397 5.52299 0.846959 5.85002 1.00194C6.52 1.31946 6.99381 1.95985 7.10833 2.70278C7.13994 2.9078 7.15886 3.50625 7.15038 4.03262L7.13501 4.98965L6.744 5.00562L6.35298 5.02158L6.33368 3.85718C6.31563 2.7695 6.30595 2.67571 6.1869 2.43361C5.68257 1.40822 4.3144 1.34806 3.70726 2.32456C3.58158 2.52669 3.58005 2.54971 3.55298 4.63418L3.52564 6.73965L3.12915 6.75573L2.73267 6.7718V6.03926C2.73267 5.27233 2.67875 4.99583 2.51179 4.90647C2.35095 4.82039 2.13958 4.84445 2.02173 4.9623C1.92122 5.06282 1.91236 5.14458 1.91236 5.9703V6.86893L1.753 6.9824C1.4526 7.19629 1.36548 7.48203 1.36548 8.25318V8.93923L1.09576 8.97117C0.58542 9.03165 0.210811 9.32046 0.0605293 9.76928C-0.0294316 10.038 -0.0168535 10.6718 0.0832246 10.9113C0.181498 11.1465 0.400193 11.3923 0.607787 11.5007L0.752381 11.5763L0.778412 13.0681C0.806904 14.7051 0.851256 15.0517 1.17681 16.1828L1.36548 16.8382V19.5885V22.3387L1.10785 22.3677C0.693865 22.4144 0.50224 22.8022 0.76392 23.0639C0.872639 23.1726 0.946193 23.1732 13.3673 23.1732H25.8612L25.9727 23.0535C26.1127 22.9033 26.1156 22.6772 25.9797 22.5094L25.8753 22.3803L23.6734 22.3529L21.4716 22.3256L21.7655 22.1889C22.927 21.6486 24.1622 20.6798 25.0428 19.6186C25.8985 18.5872 26.6408 17.1469 26.9594 15.8998C27.2115 14.9133 27.2464 14.5988 27.2729 13.0766L27.2987 11.5932L27.5453 11.387C27.8749 11.1116 27.9956 10.8327 27.9971 10.3435C27.9991 9.71459 27.8095 9.33402 27.3799 9.10439L27.1506 8.98183L21.9556 8.96707C18.3066 8.95673 16.7178 8.97002 16.617 9.0118C16.479 9.06895 16.3499 9.26364 16.3499 9.41452C16.3499 9.45417 16.4006 9.55108 16.4626 9.62988L16.5753 9.77316L21.799 9.78765C27.7682 9.80422 27.178 9.74538 27.178 10.3236C27.178 10.8129 27.2005 10.8051 25.7197 10.8246C24.5661 10.8397 24.4448 10.8504 24.3399 10.9454C24.1897 11.0813 24.1869 11.3775 24.3342 11.5248C24.4358 11.6264 24.5165 11.6342 25.4617 11.6342H26.4797L26.4517 13.0971C26.4207 14.7189 26.3605 15.1338 25.9987 16.2198C25.5441 17.5844 24.8849 18.6381 23.8186 19.7048C22.5044 21.0197 21.0877 21.7913 19.2346 22.2015C18.6762 22.3251 18.6565 22.3256 14.0256 22.3256C9.4052 22.3256 9.37387 22.3248 8.82136 22.2025C6.96379 21.791 5.55701 21.0248 4.2322 19.7033C3.16765 18.6413 2.50818 17.5873 2.05258 16.2198C1.69076 15.1338 1.63055 14.7189 1.59954 13.0971L1.57154 11.6342H4.23023C6.81602 11.6342 6.89193 11.6312 6.99829 11.5248C7.14568 11.3774 7.14278 11.0813 6.99261 10.9454C6.8829 10.8461 6.74044 10.8405 3.94651 10.8261C0.586076 10.8088 0.818607 10.8462 0.818607 10.3236C0.818607 9.75785 0.542709 9.80608 3.95679 9.7748C6.67077 9.74992 6.9482 9.73904 7.03286 9.65438C7.17865 9.50848 7.15175 9.23285 6.97702 9.08257C6.83254 8.95826 6.79836 8.95449 5.81945 8.95449H4.81079L4.81047 8.31191C4.81014 7.56007 4.763 7.351 4.53851 7.10518L4.37329 6.92433V4.84533V2.76638L4.53315 2.60653C4.84197 2.29771 5.34504 2.44159 5.46486 2.87297C5.49581 2.98442 5.52124 3.60097 5.5214 4.24316L5.52173 5.41074L5.70275 5.59176C5.92281 5.81182 6.17306 5.85972 6.93076 5.82691C7.59559 5.79809 7.77234 5.71595 7.90244 5.37541C7.98464 5.16005 7.99284 4.96684 7.96927 3.80194C7.94576 2.64344 7.92755 2.42869 7.82637 2.11855C7.52089 1.18236 6.83472 0.468303 5.92954 0.144553C5.5021 -0.00829851 4.58127 -0.0490953 4.16958 0.0665688ZM3.92486 7.65293C3.96817 7.69624 3.99048 7.92877 3.99048 8.33652V8.95449H3.08814H2.1858V8.33652C2.1858 7.92877 2.20811 7.69624 2.25142 7.65293C2.29626 7.60808 2.56133 7.5873 3.08814 7.5873C3.61494 7.5873 3.88001 7.60808 3.92486 7.65293ZM8.57559 8.62751C8.2869 8.78004 8.05037 9.09372 7.98092 9.41622C7.93963 9.60822 7.92662 11.3592 7.93837 15.1435L7.95533 20.5941L8.088 20.7353C8.16095 20.813 8.30861 20.901 8.41612 20.9308C8.68519 21.0056 14.8335 21.0038 15.1033 20.9289C15.2147 20.8979 15.3561 20.8086 15.4177 20.7304C15.5272 20.5912 15.5295 20.5268 15.5295 17.6971C15.5295 14.879 15.5268 14.8033 15.4202 14.6967C15.282 14.5585 15.0331 14.5563 14.8657 14.6917C14.7408 14.7927 14.736 14.8259 14.7192 15.7039L14.7018 16.6117L11.7388 16.5976L8.77564 16.5834L8.76158 13.0881C8.74922 10.0263 8.75787 9.57694 8.8312 9.46505L8.91487 9.3373H11.7261C14.2089 9.3373 14.5474 9.34737 14.6233 9.42322C14.698 9.49798 14.7092 9.75003 14.7092 11.3565C14.7092 12.5054 14.7309 13.2661 14.7667 13.3685C14.8206 13.5234 15.0076 13.6576 15.1693 13.6576C15.2089 13.6576 15.307 13.6059 15.3873 13.5428L15.5332 13.428L15.5177 11.3326L15.5022 9.23717L15.3381 9.00431C15.2479 8.87629 15.0656 8.71419 14.9331 8.64425L14.692 8.51699L11.7339 8.5194C8.91815 8.52169 8.76601 8.52689 8.57559 8.62751ZM16.5352 10.9419C16.3421 11.108 16.3306 11.3874 16.5109 11.5333C16.6287 11.6288 16.8067 11.6342 19.8225 11.6342C22.8384 11.6342 23.0163 11.6288 23.1342 11.5333C23.3144 11.3874 23.3029 11.108 23.1098 10.9419L22.9609 10.8139H19.8225H16.6841L16.5352 10.9419ZM14.7092 17.7865V18.142H11.7288H8.74829V17.7865V17.4311H11.7288H14.7092V17.7865ZM2.52956 18.9796C2.86594 19.4685 3.62216 20.3481 3.83845 20.5021L3.99048 20.6104V21.4816V22.3529H3.08814H2.1858V20.4297C2.1858 19.372 2.19897 18.5198 2.21511 18.5359C2.23124 18.552 2.37277 18.7517 2.52956 18.9796ZM14.7092 19.5644V20.1664L11.7424 20.1522L8.77564 20.1381L8.75978 19.6227C8.75108 19.3392 8.75644 19.0746 8.77176 19.0348C8.79434 18.9759 9.35177 18.9623 11.7544 18.9623H14.7092V19.5644ZM6.04126 22.0625L6.58814 22.3506L5.69947 22.3518L4.81079 22.3529V21.8314V21.3098L5.15259 21.5421C5.34061 21.6699 5.74048 21.9041 6.04126 22.0625Z" fill="#42A8D4" />
                </svg>
                <span >{item.bathtubs}</span>
              </div>
              <div className="img_details">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.22148 5.03238C5.12715 5.0743 5.02873 5.19399 5.01125 5.28805C5.00352 5.32962 5.00047 5.60115 5.00445 5.89147C5.01146 6.40078 5.01364 6.42203 5.0663 6.49593C5.14541 6.60695 5.24009 6.64629 5.46141 6.66011L5.65625 6.67228V8.42851V10.1847H5.46608C5.22964 10.1847 5.11752 10.2381 5.04688 10.3842C5.00429 10.4722 5 10.529 5 11.0059C5 11.4827 5.00429 11.5395 5.04688 11.6276C5.11752 11.7736 5.22964 11.827 5.46608 11.827H5.65625V13.5832V15.3394L5.46141 15.3516C5.24009 15.3654 5.14541 15.4048 5.0663 15.5158C5.01263 15.5911 5.01172 15.6021 5.01172 16.183C5.01172 16.743 5.01423 16.7771 5.06005 16.8385C5.08663 16.8741 5.13748 16.925 5.17309 16.9516C5.23445 16.9975 5.26848 17 5.82788 17C6.40822 17 6.41923 16.9991 6.49449 16.9454C6.6054 16.8662 6.6447 16.7714 6.65851 16.5499L6.67067 16.3548H8.42518H10.1797L10.1797 16.5249C10.1798 16.7264 10.2245 16.8334 10.3414 16.9116C10.4188 16.9633 10.4371 16.9648 11 16.9648C11.5629 16.9648 11.5812 16.9633 11.6586 16.9116C11.7755 16.8334 11.8202 16.7264 11.8203 16.5249L11.8203 16.3548H13.0491H14.2779L14.3264 16.293C14.4054 16.1925 14.3872 16.093 14.2796 16.0373C14.2239 16.0084 14.0213 16.0029 13.019 16.0029H11.8247L11.8167 15.7742C11.8075 15.5146 11.7676 15.4289 11.6239 15.3607C11.5053 15.3043 10.4947 15.3043 10.3761 15.3607C10.2324 15.4289 10.1925 15.5146 10.1833 15.7742L10.1753 16.0029H8.41967H6.66406L6.6635 15.868C6.66266 15.6652 6.62987 15.5589 6.54062 15.4696C6.45137 15.3803 6.34517 15.3474 6.14258 15.3466L6.00781 15.346V13.5865V11.827H6.20356C6.42753 11.827 6.51922 11.784 6.6042 11.6392C6.64909 11.5627 6.65234 11.5198 6.65234 11.0059C6.65234 10.492 6.64909 10.449 6.6042 10.3725C6.51922 10.2277 6.42753 10.1847 6.20356 10.1847H6.00781V8.4252V6.66567L6.14258 6.66511C6.34517 6.66426 6.45137 6.63144 6.54062 6.5421C6.62987 6.45277 6.66266 6.34647 6.6635 6.14367L6.66406 6.00878H6.8293C7.11896 6.00878 7.23809 5.88465 7.10766 5.71869C7.06217 5.66079 7.04677 5.65687 6.86488 5.65687H6.67067L6.65851 5.46184C6.6447 5.24031 6.6054 5.14553 6.49449 5.06635C6.42008 5.01321 6.40252 5.01154 5.85547 5.00615C5.42337 5.00188 5.2764 5.00795 5.22148 5.03238ZM10.3771 5.04734C10.2326 5.11894 10.1797 5.23134 10.1797 5.46651V5.65687H8.93595C8.10411 5.65687 7.67684 5.6651 7.64577 5.68176C7.53336 5.74198 7.54393 5.92805 7.66285 5.98227C7.70368 6.00089 8.08655 6.00878 8.95032 6.00878H10.1797V6.20472C10.1797 6.42891 10.2226 6.52068 10.3673 6.60575C10.4437 6.65068 10.4866 6.65394 11 6.65394C11.5134 6.65394 11.5563 6.65068 11.6327 6.60575C11.7774 6.52068 11.8203 6.42891 11.8203 6.20472V6.00878H13.5781H15.3359L15.3365 6.14367C15.3373 6.34647 15.3701 6.45277 15.4594 6.5421C15.5486 6.63144 15.6548 6.66426 15.8574 6.66511L15.9922 6.66567V8.4252V10.1847H15.7964C15.5725 10.1847 15.4808 10.2277 15.3958 10.3725C15.3509 10.449 15.3477 10.492 15.3477 11.0059C15.3477 11.5198 15.3509 11.5627 15.3958 11.6392C15.4808 11.784 15.5725 11.827 15.7964 11.827H15.9922V13.5865V15.346L15.8574 15.3466C15.6548 15.3474 15.5486 15.3803 15.4594 15.4696C15.3701 15.5589 15.3373 15.6652 15.3365 15.868L15.3359 16.0029H15.173C15.0834 16.0029 14.9839 16.0148 14.9519 16.0294C14.833 16.0837 14.8224 16.2697 14.9348 16.3299C14.9604 16.3436 15.0596 16.3548 15.1553 16.3548H15.3293L15.3415 16.5499C15.3553 16.7714 15.3946 16.8662 15.5055 16.9454C15.5808 16.9991 15.5918 17 16.1721 17C16.7315 17 16.7656 16.9975 16.8269 16.9516C16.8625 16.925 16.9134 16.8741 16.94 16.8385C16.9858 16.7771 16.9883 16.743 16.9883 16.183C16.9883 15.6021 16.9874 15.5911 16.9337 15.5158C16.8546 15.4048 16.7599 15.3654 16.5386 15.3516L16.3438 15.3394V13.5832V11.827H16.5339C16.7704 11.827 16.8825 11.7736 16.9531 11.6276C16.9957 11.5395 17 11.4827 17 11.0059C17 10.529 16.9957 10.4722 16.9531 10.3842C16.8825 10.2381 16.7704 10.1847 16.5339 10.1847H16.3438V8.42851V6.67228L16.5386 6.66011C16.7599 6.64629 16.8546 6.60695 16.9337 6.49593C16.9874 6.4206 16.9883 6.40957 16.9883 5.82867C16.9883 5.26872 16.9858 5.23465 16.94 5.17323C16.9134 5.1376 16.8625 5.08669 16.8269 5.06008C16.7656 5.01422 16.7315 5.01171 16.1721 5.01171C15.5918 5.01171 15.5808 5.01262 15.5055 5.06635C15.3946 5.14553 15.3553 5.24031 15.3415 5.46184L15.3293 5.65687H13.5748H11.8203V5.46651C11.8203 5.22984 11.767 5.11761 11.6211 5.0469C11.5331 5.00425 11.4764 4.99998 10.9985 5C10.5183 5.00002 10.4644 5.00413 10.3771 5.04734ZM6.30078 5.83282V6.30203H5.83203H5.36328L5.35693 5.82647L5.35058 5.3509L5.82568 5.35726L6.30078 5.36361V5.83282ZM11.4688 5.83282V6.31376H11H10.5312V5.83282V5.35188H11H11.4688V5.83282ZM16.6431 5.82696L16.6367 6.30203H16.168H15.6992L15.6928 5.85701C15.6893 5.61225 15.6916 5.39845 15.698 5.38194C15.7068 5.3589 15.8191 5.35188 16.1794 5.35188H16.6494L16.6431 5.82696ZM6.3125 11.0059V11.4751H5.83203H5.35156V11.0059V10.5366H5.83203H6.3125V11.0059ZM16.6484 11.0059V11.4751H16.168H15.6875V11.0059V10.5366H16.168H16.6484V11.0059ZM11.4688 16.1437V16.6129H11H10.5312V16.1437V15.6745H11H11.4688V16.1437ZM6.30078 16.1789V16.6481L5.82617 16.6545L5.35156 16.6608V16.195C5.35156 15.9388 5.3588 15.722 5.36766 15.7131C5.37652 15.7042 5.59011 15.6998 5.84227 15.7033L6.30078 15.7097V16.1789ZM16.6431 16.1852L16.6494 16.6608L16.1743 16.6545L15.6992 16.6481L15.6928 16.2031C15.6893 15.9583 15.6917 15.7443 15.6981 15.7275C15.7073 15.7035 15.8097 15.6983 16.1733 15.7033L16.6367 15.7097L16.6431 16.1852Z" fill="#42A8D4" />
                  <path d="M21 21.25C21.1381 21.25 21.25 21.1381 21.25 21L21.25 18.75C21.25 18.6119 21.1381 18.5 21 18.5C20.8619 18.5 20.75 18.6119 20.75 18.75L20.75 20.75L18.75 20.75C18.6119 20.75 18.5 20.8619 18.5 21C18.5 21.1381 18.6119 21.25 18.75 21.25L21 21.25ZM17.8232 18.1768L20.8232 21.1768L21.1768 20.8232L18.1768 17.8232L17.8232 18.1768Z" fill="#42A8D4" />
                  <path d="M21.25 1C21.25 0.861929 21.1381 0.75 21 0.75L18.75 0.75C18.6119 0.75 18.5 0.861929 18.5 1C18.5 1.13807 18.6119 1.25 18.75 1.25L20.75 1.25L20.75 3.25C20.75 3.38807 20.8619 3.5 21 3.5C21.1381 3.5 21.25 3.38807 21.25 3.25L21.25 1ZM18.1768 4.17678L21.1768 1.17678L20.8232 0.823223L17.8232 3.82322L18.1768 4.17678Z" fill="#42A8D4" />
                  <path d="M0.75 21C0.75 21.1381 0.861929 21.25 1 21.25L3.25 21.25C3.38807 21.25 3.5 21.1381 3.5 21C3.5 20.8619 3.38807 20.75 3.25 20.75L1.25 20.75L1.25 18.75C1.25 18.6119 1.13807 18.5 1 18.5C0.861929 18.5 0.75 18.6119 0.75 18.75L0.75 21ZM3.82322 17.8232L0.823223 20.8232L1.17678 21.1768L4.17678 18.1768L3.82322 17.8232Z" fill="#42A8D4" />
                  <path d="M1 0.75C0.861929 0.75 0.75 0.861929 0.75 1L0.75 3.25C0.75 3.38807 0.861929 3.5 1 3.5C1.13807 3.5 1.25 3.38807 1.25 3.25L1.25 1.25L3.25 1.25C3.38807 1.25 3.5 1.13807 3.5 1C3.5 0.861929 3.38807 0.75 3.25 0.75L1 0.75ZM4.17678 3.82322L1.17678 0.823223L0.823223 1.17678L3.82322 4.17678L4.17678 3.82322Z" fill="#42A8D4" />
                </svg>
                <span >{item.area}Sqft</span>
              </div>
            </div>
            <p className="price">{item.price}ADE</p>
          </div>
          <div className="location_block">
            <div className="find_spot">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_0_696)">
                  <path d="M15.956 3.22649C14.3609 1.62005 12.24 0.735352 9.98417 0.735352C7.72831 0.735352 5.60739 1.62005 4.01228 3.22649C2.41712 4.83297 1.53864 6.96882 1.53864 9.2406C1.53864 13.8364 5.85356 17.659 8.17171 19.7126C8.49385 19.998 8.77204 20.2444 8.99368 20.4529C9.27136 20.7141 9.62779 20.8448 9.98414 20.8448C10.3406 20.8448 10.6969 20.7141 10.9746 20.4529C11.1963 20.2444 11.4745 19.998 11.7966 19.7126C14.1147 17.6589 18.4297 13.8364 18.4297 9.2406C18.4296 6.96882 17.5512 4.83297 15.956 3.22649ZM11.024 18.8282C10.6948 19.1198 10.4105 19.3717 10.1761 19.5921C10.0685 19.6933 9.89982 19.6934 9.7921 19.5921C9.55774 19.3716 9.27343 19.1197 8.94423 18.8281C6.76488 16.8975 2.70826 13.3037 2.70826 9.24064C2.70826 5.20036 5.97216 1.91337 9.9841 1.91337C13.996 1.91337 17.2599 5.20036 17.2599 9.24064C17.2599 13.3037 13.2033 16.8975 11.024 18.8282Z" fill="#42A8D4" />
                  <path d="M9.98412 5.17149C7.93188 5.17149 6.26227 6.853 6.26227 8.91992C6.26227 10.9868 7.93188 12.6683 9.98412 12.6683C12.0364 12.6683 13.7059 10.9868 13.7059 8.91992C13.7059 6.853 12.0364 5.17149 9.98412 5.17149ZM9.98412 11.4902C8.57687 11.4902 7.43197 10.3372 7.43197 8.91988C7.43197 7.5026 8.57687 6.34952 9.98412 6.34952C11.3914 6.34952 12.5362 7.5026 12.5362 8.91988C12.5362 10.3372 11.3914 11.4902 9.98412 11.4902Z" fill="#42A8D4" />
                </g>
                <defs>
                  <clipPath id="clip0_0_696">
                    <rect width="19.9682" height="20.1094" fill="white" transform="translate(0 0.735352)" />
                  </clipPath>
                </defs>
              </svg>
              <p className="location_text"> {item.location}</p>
            </div>
            <Link className="more_btn" to={`/product/${item.id}`} >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.4193 14.8553H26.024L25.5959 14.4283L18.8876 7.73728L20.3488 6.2799L29.9793 15.8857L20.3488 25.4915L18.8876 24.0341L25.5959 17.3431L26.024 16.9161H25.4193H17.6068H1.24176V14.8553H25.4193Z" fill="#021540" stroke="white" strokeWidth="0.5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


const Filter_main_tabs = (props) => {
  const [show, setshow] = useState(false);

  const collaps = () => {
    setshow(!show)
  }
  const contentEl = useRef();
  const data = props.data;
  return (
    <>
      <div className="filter_main_tabs">
        <div className="filterHeadtab  " onClick={collaps} style={{ borderBottom: show ? "unset" : " 2px solid #E0E6F2" }} >
          <p>{props.title}</p> <span className="icon_plus">{show ? <img src={plus} alt="plus" /> : <img src={minus} alt="minus" />}</span>
        </div>
        <div className="subtab_wrapper" ref={contentEl} style={ show ? { height: contentEl.current.scrollHeight } : { height: "0px" } }> 
          {data.map((item,index) => {
            return (
              <Subtabs idAndFor={item.idAndFor} name={item.name} label={item.label} key={index} />
            )
          })}
        </div>
      </div>
    </>
  )
}


const Subtabs = (props) => {
  return (
    <>
      <div className="subFiltertab">
        <input type="checkbox" name="check1" id={props.idAndFor} />
        <label htmlFor={props.idAndFor} className="label_text">
          {props.label}
        </label>
      </div>
    </>
  )
}

const ButtonX = (props) => {
  return (
    <>
      <button className="btn-skeleton" id={props.id} onClick={props.eventclick}   > <span>{props.text}</span> <img src={leftaroww} className="leftaroww" alt="leftaroww" /> </button>

    </>
  )
}

export { Subtabs, PropertyPageSection1, ButtonX, Filter_main_tabs, Card }