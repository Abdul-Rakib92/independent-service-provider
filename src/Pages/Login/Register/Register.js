import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import ShareLogin from "../ShareLogin/ShareLogin";
import "./Register.css";

const Register = () => {
  const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if(loading || updating){
    return <Loading></Loading>
}


  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);

    await updateProfile({displayName: name});
    navigate("/home");
  };
  
  return (
    <div className="form-register">
      <h2 className="text-primary mb-5 mt-5">Please Register</h2>

      <form onSubmit={handleRegister}>
        <input type="text" className="rounded-pill" name="name" id="" placeholder="Your Name" />

        <input
          type="email"
          className="rounded-pill"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />

        <input
          type="password"
          className="rounded-pill"
          name="password"
          id=""
          placeholder="Password"
          required
        />

        <input onClick={() => setAgree(!agree)} type="checkbox" name="condition" id="condition" />

        <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          Accept Muscle Stone Terms and Conditions
        </label>

        <input disabled={!agree} type="submit" className="rounded-pill btn btn-primary w-25 mx-auto mt-3" value="Register" />
      </form>
      <p>
        Already have an account? 
        <Link
          to="/login"
          className="text-decoration-none text-primary pe-auto"
          onClick={navigateLogin}>

          Please Login
        </Link>
      </p>
      <ShareLogin></ShareLogin>
    </div>
  );
};

export default Register;
