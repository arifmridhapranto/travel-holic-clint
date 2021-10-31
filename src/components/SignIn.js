import React from "react";
import { Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SignIn = () => {
  const { googleSignIn, error } = useAuth();
  const location = useLocation();
  const redirect_uri = location?.state?.from || "/home";
  const history = useHistory();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div>
      <Button variant='primary' onClick={handleGoogleSignIn}>
        Google Sign In
      </Button>

      <h1>{error}</h1>
    </div>
  );
};

export default SignIn;
