import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import ShareLogin from "../ShareLogin/ShareLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let form = location.state?.from?.pathname || "/";
    let errorElement;
  
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if(loading || sending){
      return <Loading></Loading>
  }

     if(user) {
        navigate(form, { replace: true });
        
     }

     if (error) {
       errorElement = <p className="text-danger">Error: {error?.message}</p>
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

    const resetPassword = async () => {
      const email = emailRef.current.value;
      if (email) {
        await sendPasswordResetEmail(email);
        toast("Sent email");
      }
      else{
        toast('please enter your email address');
      }
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
        
        <Button className="rounded-pill w-25 mb-3 d-block mx-auto" variant="primary" type="submit">
          Login
        </Button>
      </Form>

      {errorElement}

      <p>New to Muscle Stone? <Link to="/register" className="text-decoration-none text-primary pe-auto" onClick={navigateRegister}> Please Register</Link></p>

      <p>Forget Password? <button
          className="text-decoration-none pe-auto btn btn-link text-primary"
          onClick={resetPassword}
        >
          Reset Password
        </button>
        </p>

      <ShareLogin></ShareLogin>
      <ToastContainer/>

    </div>
  );
};

export default Login;
