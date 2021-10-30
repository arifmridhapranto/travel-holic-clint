import React from "react";
import AboutSection1 from "../components/AboutSections/AboutSection1";
import ExtraSection2 from "../components/ExtraSection/ExtraSection2";
import ExtraHeader from "../components/Header/ExtraHeader";

const AboutUs = () => {
  return (
    <div className='container'>
      <ExtraHeader>
        <h1>About Us</h1>
        <p>
          Air seed winged lights saw kind whales in sixth best a dont seas dron
          image so fish all tree on
        </p>
      </ExtraHeader>
      <AboutSection1></AboutSection1>
      <ExtraSection2></ExtraSection2>
    </div>
  );
};

export default AboutUs;
