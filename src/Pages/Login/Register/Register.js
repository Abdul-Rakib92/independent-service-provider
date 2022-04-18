import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import ShareLogin from "../ShareLogin/ShareLogin";
import "./Register.css";

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
      navigate('/home');
      
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
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

        <input type="submit" className="rounded-pill btn btn-primary w-25" value="Register" />
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
