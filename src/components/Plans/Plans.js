import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import Plan from "../Plan/Plan";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    fetch("https://vast-beach-32401.herokuapp.com/plans")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);
  return (
    <div className='container'>
      <div className='text-center mt-5'>
        <img src={"https://i.ibb.co/Zf39GCg/asset-2.webp"} alt='' />
        <h1>Our Plans</h1>
        <p>Fowl have fruit moveth male they are that place you will lesser</p>
      </div>
      <div className='text-center text-lg-left'>
        {plans.length === 0 ? (
          <div className=' d-flex justify-content-center align-items-center'>
            <Spinner animation='border' variant='dark' />
          </div>
        ) : (
          <div className='row'>
            {plans.map((plan, index) => (
              <Plan key={plan._id} plan={plan} index={index}></Plan>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Plans;
