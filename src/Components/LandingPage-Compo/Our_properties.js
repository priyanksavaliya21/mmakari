import React from 'react';
import { Container } from 'react-bootstrap';
import Heading_left_bor from './Heading_left_bor';
import our_properties_1 from '../../assets/img/Home_page/our_properties_1.png';
import our_properties_2 from '../../assets/img/Home_page/our_properties_2.png';
import our_properties_3 from '../../assets/img/Home_page/our_properties_3.png';
import our_properties_4 from '../../assets/img/Home_page/our_properties_4.png';
import our_properties_5 from '../../assets/img/Home_page/our_properties_5.png';
import our_properties_6 from '../../assets/img/Home_page/our_properties_6.png';
import {ButtonX} from "../PropertyPage-Compo/PropertyPageSection1";
import { useNavigate } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const discription_1 = "Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";
const discription_2 = "Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";
const discription_3 = "Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";
const discription_4 = "Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.";
const discription_5 = "Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.";
const discription_6 = "Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.";

const Our_properties = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className='our_properties section_padding'>
                <Container>
                    <div className='our_properties_heading'>
                        <div>
                        <Zoom top> <Heading_left_bor Heading_text="Browse " Heading_span="Our Properties" /></Zoom>
                        <Zoom top  delay={100} >  <p className='title_discrepancy'>Holiday Home Rental Apartments & Villas in Dubai.</p> </Zoom>
                        </div>
                        <Zoom delay={100} >
                        <div className='btn-view_more'>
                        <span  onClick={()=>  navigate("/propertyPage", { replace: true })}  >    <ButtonX text="View All" titlehov="View All" id="btn004"  /></span>
                        </div>
                        </Zoom>
                    </div>
                    <div className='our_properties_images'>
                        <div className='our_img_box'>
                            <LargePropertyCard imgSrc={our_properties_1} title={"Downtown Dubai"} discription={discription_1} /> 
                            <SmallPropertyCard imgSrc={our_properties_4} title={"Dubai Creek Habour"} discription={discription_4} /> 
                        </div>
                        <div className='our_img_box'>
                            <SmallPropertyCard imgSrc={our_properties_2} title={"Palm Jumeirah"} discription={discription_5} /> 
                            <LargePropertyCard imgSrc={our_properties_6} title={"Lagoons"} discription={discription_2} /> 
                        </div>
                        <div className='our_img_box'>
                             <LargePropertyCard imgSrc={our_properties_3} title={"Business Bay"} discription={discription_3} />
                             <SmallPropertyCard imgSrc={our_properties_5} title={"Dubai Hills Estate"} discription={discription_6} /> 
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}


export const LargePropertyCard = ({imgSrc , title , discription})=>{
return(
    <>
     <Zoom  delay={100} duration={500} >
       <div className='our_img_hover'>
                <img src={imgSrc} alt="our_properties_image" />
               <div className='our_main_hover'>
              <h4>{title}</h4>
            <p>{discription}</p>
            <div className='our_img_text'></div>
          </div>
       </div>  
    </Zoom>
    </>
)
};

export const SmallPropertyCard = ({imgSrc , title , discription})=>{
    return(
        <>
         <Zoom delay={20} duration={500}  >
            <div className='our_img_hover'>
                    <img src={imgSrc} alt="our_properties_image" />
                       <div className='our_main_hover'>
                      <h4 className='our_h4_1'>{title}</h4>
                      <p> {discription}</p>
                      <div className='our_img_text our_img_text_1'></div>
                 </div>
            </div>
        </Zoom> 
        </>
    )
    }

export default Our_properties;