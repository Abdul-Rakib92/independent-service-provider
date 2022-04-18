import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png';
import Loading from "../../Shared/Loading/Loading";


const ShareLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;

    if(loading){
        return <Loading></Loading>
    }
    
    if (error){
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user){
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-item-center'>
                <div style={{height: '1px'}} className='bg-dark w-50 mt-3'></div>
                <p className='mb-5 px-2'>or</p>
                <div style={{height: '1px'}} className='bg-dark w-50 mt-3'></div>
            </div>
            {errorElement}
            
            <button onClick={() => signInWithGoogle()} className='d-block my-2 w-50 mx-auto p-2 rounded-pill'>
                <img style={{width: '60px'}} className='px-2' src={google} alt="" />
                <span className='fs-5'>Continue With Google</span>
            </button>
            
        </div>
    );
};

export default ShareLogin;