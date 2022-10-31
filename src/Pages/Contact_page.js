import React, { useState } from 'react';
import { PosterSec } from "../Components/PropertyPage-Compo/PosterSec";
import { Container } from 'react-bootstrap';
import Heading_left_bor from '../Components/LandingPage-Compo/Heading_left_bor';
import Get_in_Touch_icon_1 from '../assets/img/Contact_page/Get_in_Touch_icon_1.png';
import Get_in_Touch_icon_2 from '../assets/img/Contact_page/Get_in_Touch_icon_2.png';
import Get_in_Touch_icon_3 from '../assets/img/Contact_page/Get_in_Touch_icon_3.png';
import Get_in_Touch_icon_4 from '../assets/img/Contact_page/Get_in_Touch_icon_4.png';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ButtonX } from "../Components/PropertyPage-Compo/PropertyPageSection1";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useFormik } from 'formik';
import { SignUpSchema } from '../schemas/Contact_form_data';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Contact_page = () => {
    const initialValues = {
        name: "",
        email: "",
        drop: "",
        message: "", 
    };
    const [toggledrop, settoggledrop] = useState();
    const droptoggle = () => {
        settoggledrop(!toggledrop);
        const headermenu = document.querySelector(".main_block");
        headermenu.classList.toggle("sroll_blog");
    };
    
    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: SignUpSchema,
        onSubmit: async (values, action) => {
            const { drop, email, message, name } = values;
            const res = await fetch("https://mmkari-5f304-default-rtdb.asia-southeast1.firebasedatabase.app/contact_us.json", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify({
                    drop,
                    email,
                    message,
                    name,
                })
            }).then((response) => response)
                .then((data) => {
                     console.log(data);
                    if(data.status === 200){
                        action.resetForm();
                        const messege = document.querySelector(".contact_sec .form-messege"); 
                        messege.classList.add("show"); 
                        setTimeout(function () {
                          messege.classList.remove("show");
                        }, 4000); 
                  }else{
                            const messege = document.querySelector(".contact_sec .form-messege2"); 
                            messege.classList.add("show"); 
                            setTimeout(function () {
                            messege.classList.remove("show");
                            }, 4000); 
                  }
                }).catch((erorr) => console.log(erorr));
        },
    });


    return (
        <>
            <div>
                <PosterSec lighttext="Contact " boldtext="us" />
                <section className='contact_sec'>
                    <Container>
                        <div className='contact_row'>
                            <div className='form_col'>
                            <Zoom>
                                <form onSubmit={handleSubmit}  >
                                <Fade top  delay={200}  duration={1000} >
                                    <div className='form_inputs'>
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder='Full name'
                                            name='name'
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && touched.name ? <p className='form_errors'>{errors.name}</p> : null}
                                    </div>
                                     </Fade>
                                    <Fade top  delay={400}  duration={1000}  >    
                                     <div className='form_inputs'>
                                        <label htmlFor="Email">Email Address</label>
                                        <input
                                            type="Email"
                                            id="Email"
                                            placeholder='xyz@abc.com'
                                            name='email'
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && touched.email ? <p className='form_errors'>{errors.email}</p> : null}
                                    </div>
                                     </Fade>
                                    <Fade top  delay={400}  duration={1000}  >   
                                       <div className='form_inputs'>
                                        <label htmlFor="007" >Regarding</label>
                                        <div onClick={droptoggle} id="click" > 
                                            <FormControl sx={{ m: 1, minWidth: 120 }}  >
                                                <Select
                                                    name="drop"
                                                    value={values.drop}
                                                    onChange={handleChange}
                                                    displayEmpty
                                                    id="007"
                                                    inputProps={{ 'aria-label': 'Without label' }} 
                                                >
                                                    <MenuItem value="">
                                                        <span>General Enquiry</span>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                                <FormHelperText>Without label</FormHelperText>
                                            </FormControl>
                                        </div>
                                        {errors.drop && touched.drop ? <p className='form_errors'>{errors.drop}</p> : null}
                                    </div>
                                     </Fade>
                                    <Fade top  delay={400}  duration={1000}  >   
                                       <div className='form_inputs'>
                                        <label htmlFor="Message">Message</label>
                                        <textarea
                                            rows="4"
                                            cols="50"
                                            id="Message"
                                            name="message"
                                            form="usrform"
                                            placeholder='Write Your Message Here...'
                                            value={values.message}
                                            onChange={handleChange}
                                        ></textarea>
                                        {errors.message && touched.message ? <p className='form_errors'>{errors.message}</p> : null}
                                    </div>
                                     </Fade>
                                  <Fade top  delay={400}  duration={1000}  > <ButtonX text="Submit" id="btn00100" type="submit" /></Fade>
                                    <span className="form-messege">Your Form has been submitted successfully <><ThumbUpAltIcon className="iconx" /></> </span> 
                                    <span className="form-messege2">Unable to Submit Form: Please Try Again !!<><ThumbUpAltIcon className="iconx2" /></> </span>  
                                </form>
                                 </Zoom>
                            </div>
                            <div className='get_in_touch_col'>
                                <div>
                                <Fade top>   <Heading_left_bor Heading_text="Get in " Heading_span="Touch" />   </Fade>
                                <Fade top  delay={100}  duration={1000}  > <p className='title_discrepancy'>Holiday Home Rental Apartments & Villas in Dubai</p> </Fade>
                                </div>
                                <div className='get_in_touch_icons'>
                                <Fade top  delay={100}  duration={1000}  >   
                                     <div className='get_icons_item'>
                                        <div className='get_icon'>
                                           <a href="https://goo.gl/maps/fGMss8vUN7bikZ5T8" target="blank" > <img src={Get_in_Touch_icon_1} alt="Get_in_Touch_icon" /></a>
                                        </div>
                                        <div>
                                            <h6>Reach Us</h6>
                                            <a href="https://goo.gl/maps/fGMss8vUN7bikZ5T8" target="blank" >  <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p></a>
                                        </div>
                                    </div>
                                    </Fade>
                                    <Fade top  delay={150}  duration={1000}  >   
                                    <div className='get_icons_item'>
                                        <div className='get_icon'>
                                        <a href="mailto:priyanksavaliyainvints@gmail.com">    <img src={Get_in_Touch_icon_2} alt="Get_in_Touch_icon" /> </a>
                                        </div>
                                        <div>
                                            <h6>Drop a mail</h6>
                                            <a href="mailto:priyanksavaliyainvints@gmail.com">  <p>abc@xyz.com</p> </a>
                                        </div>
                                    </div>
                                    </Fade>
                                    <Fade top  delay={200}  duration={1000}  >   
                                    <div className='get_icons_item'>
                                        <div className='get_icon'>
                                        <a href="tel:2358254259">   <img src={Get_in_Touch_icon_3} alt="Get_in_Touch_icon" /></a>
                                        </div>
                                        <div>
                                            <h6>Call Us</h6>
                                            <a href="tel:2358254259"><p>235 258 147 1</p></a>
                                        </div>
                                    </div>
                                    </Fade>
                                    <Fade top  delay={250}  duration={1000}  >   
                                    <div className='get_icons_item'>
                                        <div className='get_icon'>
                                        <a href="tel:2358254259"> <img src={Get_in_Touch_icon_4} alt="Get_in_Touch_icon" /></a>
                                        </div>
                                        <div>
                                            <h6>Leave us a message</h6>
                                           <a href="tel:2358254259"> <p>2358 254 259</p></a>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default Contact_page;