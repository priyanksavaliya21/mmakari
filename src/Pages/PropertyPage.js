import React from 'react' ;
import { Heading } from '../Components/PropertyPage-Compo/Heading';
import { PropertyPageSection1 } from '../Components/PropertyPage-Compo/PropertyPageSection1';
import{ PosterSec} from "../Components/PropertyPage-Compo/PosterSec";
 const PropertyPage = () => {
  return (
    <>
     <div className='main_wrapper propertypage_wrapper'>
        <PosterSec lighttext="Available " boldtext="Property"  />
        <section className="property-section" >
                <Heading title1="what’s hot" boldPart=" in dubai" text="Take a sneak pic of new developments in dubai." />
                <PropertyPageSection1 />
        </section>
     </div>
    </>
  )
}

export {PropertyPage};