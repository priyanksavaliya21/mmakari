import React,{ useState } from 'react';
import Team_profile from './Team_profile';
import { Container } from 'react-bootstrap';
import Heading_left_bor from './Heading_left_bor';
import Our_Team_1 from '../../assets/img/Home_page/Our_Team_1.png';
import Our_Team_2 from '../../assets/img/Home_page/Our_Team_2.png';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
const Meet_our_team = () => {

    const [active, setactive] = useState("Know_list1");

    return (
        <>
            <section className='Meet_our_team_sec section_padding'>
                <Container>
                     <Fade top  delay={10} duration={300} >
                    <Heading_left_bor Heading_text="Meet " Heading_span="Our Team" />
                    </Fade>
                    <div className='Meet_our_team_min'>
                        <Team_profile 
                            Our_Team_image = {Our_Team_1}
                            titleh4 = "Gibson Christian Kumangtum"
                            titlespan = "CEO & Founder"
                            titleh3 = "Confident, Motivated, and Charismatic"
                            titlep = "Christian Gibson is keen to develop and maintain detailed Real Estate Businesses across the globe, be it Residential or Commercial by reducing Redundancy, improving Accuracy and Efficiency in Real Estate Transactions while achieving organizational objectives. He is an excellent professional who loves hands on approach to everything and thrives in handling the most complex projects in the world with ability to multitask and work efficiently in diversify environments usually by prioritizing and appropriately delegating responsibilities to meet deadlines. His favourite quote in life is by Bill Gates “Your most unhappy customers are your greatest source of learning”."
                        />
                        <Team_profile 
                            Our_Team_image = {Our_Team_2}
                            titleh4 = "Nishanth Kumar"
                            titlespan = "General Manager"
                            titleh3 = {null}
                            titlep = "As a UAE long time Resident, Nishanth witnessed the Nation/City’s great transformation – from a boarded up and desolate Downtown to a bustling Metropolitan city that retains its unique feel. His intimate knowledge of this region coupled with his vast experiences of having lived here all of his life gives him the enthusiasm and a desire to make his home, your home."
                            titlep2 = "He believes that being a great Property Consultant is not only about accumulating many years of experience in the field, but takes into consideration one’s ability to learn, analyze and evaluate different Real Estate Assets, just be knowledgeable about your products, He said."
                            titlep3 = "He never ceases to learn and acquire more knowledge, Nishanth is currently pursuing another Master’s Degree yet from a world renowned Institution, in the field of Business Developments & Innovation. The world can’t have enough of his valuable skills that he employs in his day to day Real Estate negotiations, while educating home-buyers and sellers, and effectively heading the team’s Marketing Department."
                        />
                    </div>
                    <div className='Know_more_tab'>
                    <Zoom left>   <span>Know more :</span>   </Zoom>
                        <ul>
                            <Zoom delay={50} >
                            <li><a href="#0" onClick={() => setactive("Know_list1")} className={active === "Know_list1" ? "Know_list_activa" : ""}>Awards</a></li>
                            </Zoom>
                            <Zoom delay={100}>
                            <li><a href="#0" onClick={() => setactive("Know_list2")} className={active === "Know_list2" ? "Know_list_activa" : ""}>News</a></li>
                            </Zoom>
                            <Zoom delay={150}>
                            <li><a href="#0" onClick={() => setactive("Know_list3")} className={active === "Know_list3" ? "Know_list_activa" : ""}>Reviews</a></li>
                            </Zoom>
                            <Zoom delay={200} >
                            <li><a href="#0" onClick={() => setactive("Know_list4")} className={active === "Know_list4" ? "Know_list_activa" : ""}>Blogs</a></li>
                            </Zoom>
                        </ul>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Meet_our_team;