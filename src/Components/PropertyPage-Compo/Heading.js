import React from 'react';
import Zoom from 'react-reveal/Zoom';

export const Heading = (props) => {
  return (
    <div className="heading_for_propertypage">
      <Zoom top delay={10} >
         <h2 className='head_part-1'> {props.title1}<span className='bold_part'> {props.boldPart} </span></h2>
         </Zoom>
         <Zoom top  delay={60} >
         <p className='head_part-2'>{props.text} </p>
         </Zoom>
    </div>
  )
}
