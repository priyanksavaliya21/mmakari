import React, { useState , useEffect } from 'react';
import logo from '../../assets/img/Home_page/logo.svg';
import { Container } from 'react-bootstrap';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {  NavLink} from "react-router-dom";
const Header = () => {
    const [toggleClass, settoggleClass] = useState(false);
    const toggle = () => {
        settoggleClass(!toggleClass);
        document.documentElement.classList.toggle("cm_overflow");
    };
    let activeStyle = {
        fontWeight : "600" ,
        color : "#ffc800"
    };

      const [scroll, setScroll] = useState(false);
      useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
      }, []);

   let targetx = document.querySelectorAll(".menu_cls");
    targetx.forEach((item)=>{
                item.addEventListener("click", function() {
                    settoggleClass(false); 
                    document.documentElement.classList.remove("cm_overflow");   
        });
   })

 


    return (
        <>
            {/* Header Start */}
            <div className={`in_header_wrapper ${toggleClass === true ? "open_menu" : ""}`}>
                <header   className={ `sticky ${  scroll ? "bg-blue" : null}`} >
                    <Container>
                        <div className="in_header_block">
                            <div className="logo_hold">
                            <NavLink to="/" >  <img src={logo} alt="logo" className="img-fluid" /></NavLink>
                            </div>
                            <div className="menu_block">
                                <div className="menu_list">
                                    <ul className="navbar_nav">
                                        <li className="nav-btn">
                                        <NavLink  to="/" className="scroll_trigger menu_cls" style={({ isActive }) =>   isActive ? activeStyle : undefined  } >Home</NavLink>
                                        </li>
                                        <li className="nav-btn buy_drop_li">
                                            <a href="#0">
                                                Buy<KeyboardArrowDownIcon />
                                            </a>
                                            <ul className='buy_drop_box'>
                                                <li>
                                                <NavLink  to="#0" className="menu_cls" >Downtown Dubai </NavLink> 
                                                </li>
                                                <li>
                                                <NavLink  to="#0"  className="menu_cls" >  Palm Jumeirah</NavLink> 
                                                </li>
                                                <li>
                                                <NavLink   to="#0"  className="menu_cls" > Business Bay</NavLink> 
                                                </li>
                                                <li>
                                                <NavLink   to="#0"  className="menu_cls" >  Lagoons</NavLink> 
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-btn buy_drop_li">
                                            <a href="#0" className="scroll_trigger">
                                                Rent<KeyboardArrowDownIcon />
                                            </a>
                                            <ul className='buy_drop_box'>
                                                <li>
                                                <NavLink   to="#0"  className="menu_cls" >Dubai Creek Habour</NavLink> 
                                                </li>
                                                <li>
                                                <NavLink   to="#0"  className="menu_cls" >Dubai Hills Estate</NavLink> 
                                                </li>
                                                <li>
                                                <NavLink   to="#0"  className="menu_cls" >Al Arub</NavLink> 
                                                </li>
                                                <li>
                                                <NavLink   to="#0"  className="menu_cls" >Dubai Marina</NavLink> 
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-btn">
                                        <NavLink  to="/propertyPage"  className="scroll_trigger menu_cls" style={({ isActive }) =>   isActive ? activeStyle : undefined  }    > 
                                                 Sell
                                                 </NavLink> 
                                        </li>
                                        <li className="nav-btn">
                                        <NavLink  to="/listyourproperty" style={({ isActive }) =>   isActive ? activeStyle : undefined  }  className="scroll_trigger menu_cls" > 
                                                List Your Property
                                                </NavLink> 
                                        </li>
                                        <div className='header_btn header_btn_mobil'>
                                        <NavLink  to="/latest_news_page"  className={"menu_cls"}  >Latest News
                                                <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.2527 12.8334L16.9947 6.57545L18.6443 4.92578L27.7187 14.0001L18.6443 23.0744L16.9947 21.4248L23.2527 15.1668H16.1523H1.052V12.8334H23.2527Z" fill="#021540" />
                                                </svg>
                                           </NavLink>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className='header_btn header_btn_desktop'>
                                <NavLink to="/latest_news_page" className={"menu_cls"} >Latest News
                                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.2527 12.8334L16.9947 6.57545L18.6443 4.92578L27.7187 14.0001L18.6443 23.0744L16.9947 21.4248L23.2527 15.1668H16.1523H1.052V12.8334H23.2527Z" fill="#021540" />
                                    </svg>
                                </NavLink>
                            </div>
                            <div className="menu_toggle_btn" onClick={toggle}>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                            </div>
                        </div>
                    </Container>
                </header>
            </div>
            {/* Header Close  */}
        </>
    );
};

export default Header;