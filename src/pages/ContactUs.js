import React from "react";
import ContactDescription from "../components/ContactSections/ContactDescription";
import { useForm } from "react-hook-form";
import ExtraHeader from "../components/Header/ExtraHeader";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://vast-beach-32401.herokuapp.com/contactus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("your contact is Added.we will contact you soon. Thank you");
          reset();
        }
      });
  };
  return (
    <div className='container '>
      <ExtraHeader>
        <h1>Contact US</h1>
        <p>Feel free to Contact with us</p>
      </ExtraHeader>
      <ContactDescription></ContactDescription>
      <div className='mt-5 container text-center'>
        <h1>Feel free to Contact with us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className='row mb-3 '>
            <input
              className='col-lg-5 py-3 mx-3'
              {...register("name", { required: true })}
              placeholder='Name'
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              className='col-lg-5 py-3 mx-3'
              {...register("email", { required: true })}
              placeholder='Email'
            />
          </div>
          <div className='row'>
            <input
              className='py-5'
              type='text'
              {...register("text", { required: true })}
              placeholder='Message'
            />
          </div>

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type='submit' className='btn bg-color2 mt-3' />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
