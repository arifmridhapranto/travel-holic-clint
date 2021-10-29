import React from "react";
import ExtraSection from "../components/ExtraSection/ExtraSection";
import Banner from "../components/Header/Banner";
import Plans from "../components/Plans/Plans";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ExtraSection></ExtraSection>
      <Plans></Plans>
    </div>
  );
};

export default Home;
