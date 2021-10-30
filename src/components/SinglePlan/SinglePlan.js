import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ExtraHeader from "../Header/ExtraHeader";

const SinglePlan = () => {
  const [singlePlan, setSinglePlan] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://vast-beach-32401.herokuapp.com/singleplan/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSinglePlan(data);
      });
  }, [id]);
  return (
    <div className='container'>
      <ExtraHeader>
        <h1> Our Tour Plan </h1>
        <p>Please see all our offers and choose yours</p>
      </ExtraHeader>
      <div className='mt-5'>
        <img src={singlePlan.img} alt='' className='img-fluid' />
        <h1 className='text-center'>{singlePlan.name}</h1>
        <p>{singlePlan.Description}</p>
      </div>
    </div>
  );
};

export default SinglePlan;
