import React from "react";
import ExtraHeader from "../components/Header/ExtraHeader";
import Plans from "../components/Plans/Plans";

const OurPlans = () => {
  return (
    <div className='container'>
      <ExtraHeader>
        <h1>Choose Your Own Destination</h1>
      </ExtraHeader>
      <Plans></Plans>
    </div>
  );
};

export default OurPlans;
