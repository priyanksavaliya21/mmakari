import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
const Team_profile = (props) => {
    return (
        <>
            <div className='team_box_row'>
             <Zoom top>
                <img src={props.Our_Team_image} alt="Our_Team image" />
                </Zoom>
                <div className='team_box_text'>
                <Fade top  delay={10} duration={300} >
                    <h4>{props.titleh4}</h4>
                </Fade>
                <Fade top  delay={10} duration={300} >    <span>{props.titlespan}</span>   </Fade>
                {props.titleh3 ?  <Fade top  delay={10} duration={300} > <h3>{props.titleh3}</h3>  </Fade> : "" }
                <Fade top  delay={10} duration={300} >    <p className='web_text_p'>{props.titlep}</p></Fade>
                <Fade top  delay={10} duration={300} >    <p className='web_text_p'>{props.titlep2}</p></Fade>
                    <br></br>
                    <br></br>
                    <Fade top  delay={10} duration={300} >        <p className='web_text_p'>{props.titlep3}</p></Fade>
                </div>
            </div>
        </>
    )
}

export default Team_profile;