import React from "react";
import Container from "react-bootstrap/Container";
import Fade from 'react-reveal/Fade';
export const PosterSec = (props) => {
  return (
    <>
      <section className="poster-section" id="product_trigger_link">
        <div className="overlay"></div>
        <Container>
          <div className="poster_text_block">
          <Fade top>
            <h2 className="poster_text">
              {props.lighttext}
              <span className="bold_postertext">{props.boldtext}</span>
            </h2>
            </Fade>
          </div>
        </Container>
      </section>
    </>
  );
};
