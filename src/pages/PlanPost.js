import React from "react";
import { useForm } from "react-hook-form";
const PlanPost = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://vast-beach-32401.herokuapp.com/addplan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("your plan is Added");
          reset();
        }
      });
  };
  return (
    <div className='text-center container d-flex flex-column justify-content-center align-items-center vh-100'>
      <h1>Add A New Plan</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=' d-flex flex-column w-50'>
        <input
          {...register("name", { required: true })}
          className='mt-3'
          placeholder='Name'
        />

        <input
          {...register("img", { required: true })}
          className='mt-3'
          placeholder='Image Link'
        />
        <input
          type='number'
          {...register("price", { required: true })}
          className='mt-3'
          placeholder='price'
        />
        <input
          {...register("Description", { required: true })}
          className='mt-3'
          placeholder='Description'
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type='submit' className='w-50 mt-3' />
      </form>
    </div>
  );
};

export default PlanPost;
