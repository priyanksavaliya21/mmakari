import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

const Hero_sec_text = () => {
    const [active, setactive] = useState("list2");

    const [filldata, setfilldata] = useState();
    const submitSearch = (e)=>{
        //console.log(e);
       // console.log(filldata);
        e.preventDefault();
    }
    return (
        <div className='hero_text_main' id="for_buy_link">
           <Fade top  delay={100} duration={1500}> <h1>Find Yourself <span>a Better Place</span></h1> </Fade> 
           <Fade top  delay={150} duration={1500}> <p>this is where you can find a dream place for you of various types, all over the Dubai at affordable prices.</p></Fade> 
           <Fade top  delay={200} duration={1500}>  <ul className='hero_text_list'>
                <li><a href="#0" onClick={() => setactive("list1")} className={active === "list1" ? "teb_list" : undefined}>Buy</a></li>
                <li><a href="#0" onClick={() => setactive("list2")} className={active === "list2" ? "teb_list" : undefined}>Rent</a></li>
                <li><a href="#0" onClick={() => setactive("list3")} className={active === "list3" ? "teb_list" : undefined}>Sell</a></li>
            </ul>
            <Fade top  delay={100} duration={1500}>
            </Fade> 
            <form className='hero_text_input' onSubmit={submitSearch} >
                <input type="search" name="search" id="searchbar" placeholder='Search by area'
                 value={filldata}
                 onChange={(e)=> setfilldata(e.target.value.toString().toLowerCase())}
                 />
                <button>Search
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.0123 13.3337L16.7543 7.07569L18.404 5.42603L27.4783 14.5004L18.404 23.5747L16.7543 21.925L23.0123 15.667H15.912H0.811646V13.3337H23.0123Z" fill="white" />
                    </svg>
                </button>
            </form>
            </Fade> 
        </div>
    )
}

export default Hero_sec_text;