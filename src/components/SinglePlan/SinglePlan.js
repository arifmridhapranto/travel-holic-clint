import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import ExtraHeader from "../Header/ExtraHeader";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Spinner from "react-bootstrap/Spinner";

const SinglePlan = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [singlePlan, setSinglePlan] = useState({});
  useEffect(() => {
    fetch(`https://vast-beach-32401.herokuapp.com/singleplan/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSinglePlan(data);
      });
  }, [id]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://vast-beach-32401.herokuapp.com/addbooking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("your Plan is Added.");
        }
      });
  };

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
        <div className='text-center'>
          <h1>Book this Plan</h1>
          {singlePlan.name ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <input defaultValue={singlePlan.name} {...register("name")} />
              <input defaultValue={user.email} {...register("email")} />

              {/* include validation with required or other standard HTML validation rules */}
              <input
                defaultValue='pending'
                {...register("status", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <input type='submit' />
            </form>
          ) : (
            <div>
              <Spinner animation='grow' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePlan;
