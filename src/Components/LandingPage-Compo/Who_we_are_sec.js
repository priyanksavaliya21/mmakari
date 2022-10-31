import React from "react";
import { Container } from "react-bootstrap";
import Heading_left_bor from "./Heading_left_bor";
import Mask_group_1 from "../../assets/img/Home_page/Mask_group_1.png";
import Mask_group_3 from "../../assets/img/Home_page/Mask_group_3.png";
import Mask_group_4 from "../../assets/img/Home_page/Mask_group_4.png";
import Mask_group_2 from "../../assets/img/Home_page/Mask_group_2.png";
import Mask_group_5 from "../../assets/img/Home_page/Mask_group_5.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const Who_we_are_sec = () => {
  return (
    <>
      <section className="Who_we_are_sec section_padding" id="Who_we_are_sec">
        <Container>
          <div className="Who_we_are_row">
            <div className="who_we_text">
              <Fade top delay={100} duration={1500}>
                <Heading_left_bor Heading_text="Who" Heading_span=" we are?" />
              </Fade>
              <Fade top delay={150} duration={1500}>
                <p className="web_text_p">
                  From Dubai to Beverly Hills to London, Mmakari Gibson Real
                  Estate is a leading International Real Estate Company shaping
                  the World of Real Estate Transactions with Confidence,
                  Motivation and Charisma. Founded by Gibson Christian Kumangtum
                  (A Realtor and an Investor), The Company operates on the
                  morals and values passed down from a Meemaw to her Grandson.
                  The Three Pillars of Mmakari Gibson Real Estate are Hard work,
                  Honesty and Transparency in handling Real Estate Transactions.
                </p>
              </Fade>
              <div className="who_we_imges">
                <Zoom top delay={10} duration={1000}>
                  <img src={Mask_group_3} alt="image" />
                </Zoom>
                <Zoom top delay={10} duration={1000}>
                  <img src={Mask_group_4} alt="image" />
                </Zoom>
              </div>
            </div>
            <div className="who_we_img">
              <Zoom top delay={10} duration={1000}>
                <img src={Mask_group_1} alt="image" />
              </Zoom>
              <Fade top delay={200} duration={1500}>
                <p className="web_text_p">
                  With <span>100+ Local and International Affiliations,</span>
                  we serve our clients from UAE and across several Middle
                  Eastern regions to Africa, to Europe and America. Look closely
                  wherever you are, and you are sure to see our Footprints
                  everywhere.
                </p>
              </Fade>
              <div className="who_we_out_img">
                <Zoom top delay={10} duration={1000}>
                  <img src={Mask_group_2} alt="image" />
                </Zoom>
                <Zoom top delay={10} duration={1000}>
                  <img src={Mask_group_5} alt="image" />
                </Zoom>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Who_we_are_sec;
