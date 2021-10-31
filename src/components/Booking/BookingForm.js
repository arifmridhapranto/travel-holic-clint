import React from "react";
import ExtraHeader from "../Header/ExtraHeader";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Booking = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='container '>
      <ExtraHeader>
        <h1>Booking Now</h1>
      </ExtraHeader>
      <div className=''>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue={user.email} {...register("email")} />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type='submit' />
        </form>
      </div>
    </div>
  );
};

export default Booking;
