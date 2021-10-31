import React from "react";
import ExtraHeader from "../components/Header/ExtraHeader";
import SignIn from "../components/SignIn";

const Login = () => {
  return (
    <div className='container'>
      <ExtraHeader>
        <h1>Login First</h1>
      </ExtraHeader>
      <div className='text-center'>
        <SignIn></SignIn>
      </div>
    </div>
  );
};

export default Login;
