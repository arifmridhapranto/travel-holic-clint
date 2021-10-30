import React from "react";
import { Button } from "react-bootstrap";

const AboutSection1 = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-lg-6 col-12'>
          <img src={"https://i.ibb.co/tqkqJjD/asset-6.webp"} alt='' />
        </div>
        <div className='col-lg-6 col-12 d-flex flex-column justify-content-center'>
          <h1>Exploration is really the essence of the human spirit</h1>
          <p>
            Make she'd moved divided air. Whose tree that replenish tone hath
            own upon them it multiply was blessed is lights make gathering so
            day dominion so creeping air was made.
          </p>
          <Button className='btn bg-color2 text-white rounded-pill w-50'>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
