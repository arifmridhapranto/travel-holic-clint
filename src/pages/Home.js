import React from "react";
import ExtraSection from "../components/ExtraSection/ExtraSection";
import ExtraSection2 from "../components/ExtraSection/ExtraSection2";
import Banner from "../components/Header/Banner";
import Plans from "../components/Plans/Plans";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ExtraSection></ExtraSection>
      <Plans></Plans>
      <ExtraSection2></ExtraSection2>
    </div>
  );
};

export default Home;
