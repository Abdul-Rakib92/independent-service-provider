import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import ShareLogin from "../ShareLogin/ShareLogin";

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let form = location.state?.from?.pathname || "/";
  
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

     if(user) {
        navigate(form, { replace: true });
        
     }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
        
    }

    const navigateRegister = event => {
        navigate('/register')
    }

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-2">Please Login</h2>

      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" className="rounded-pill" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" className="rounded-pill" placeholder="Password" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        
        <Button className="rounded-pill w-25 mb-3" variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <p>New to Muscle Stone? <Link to="/register" className="text-decoration-none text-primary pe-auto" onClick={navigateRegister}> Please Register</Link></p>

      <ShareLogin></ShareLogin>

    </div>
  );
};

export default Login;
