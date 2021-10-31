import React, { useEffect, useState } from "react";
import ExtraHeader from "../Header/ExtraHeader";
import Plan from "../Plan/Plan";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    fetch("https://vast-beach-32401.herokuapp.com/plans")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);
  return (
    <div className='container '>
      <ExtraHeader>
        <h1>Our Plans</h1>
        <h5>Feel free to choose yourself</h5>
      </ExtraHeader>
      <div className='text-center mt-5'>
        <img src={"https://i.ibb.co/Zf39GCg/asset-2.webp"} alt='' />
        <h1>Our Plans</h1>
        <p>Fowl have fruit moveth male they are that place you will lesser</p>
      </div>
      <div className='row'>
        {plans.map((plan, index) => (
          <Plan key={plan._id} plan={plan} index={index}></Plan>
        ))}
      </div>
    </div>
  );
};

export default Plans;
