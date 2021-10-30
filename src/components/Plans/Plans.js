import React, { useEffect, useState } from "react";
import Plan from "../Plan/Plan";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    fetch("https://vast-beach-32401.herokuapp.com/plans")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);
  return (
    <div className='container mt-5'>
      <div className='text-center'>
        <img src={"https://i.ibb.co/Zf39GCg/asset-2.webp"} alt='' />
        <h1>Our Plans</h1>
        <p>Fowl have fruit moveth male they are that place you will lesser</p>
      </div>
      <div className='d-flex justify-content-around'>
        {plans.map((plan) => (
          <Plan key={plan._id} plan={plan}></Plan>
        ))}
      </div>
    </div>
  );
};

export default Plans;
