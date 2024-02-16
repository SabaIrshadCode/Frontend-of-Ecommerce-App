import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <Meta title={"Login"}></Meta>
            <BreadCrumb title="Login"></BreadCrumb>
            <div className='login-wrapper-2 home-wrapper-2 py-5'>
                <div className='container-xl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Login</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                <div className='mt-1'>
                                <input type='email' name='e-mail' placeholder='e-mail' className='form-control'></input>
                                </div>
                                <div>
                                <input type='password' name='password' placeholder='password' className='form-control'></input>
                                </div>
                                <div>
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                    <div className='d-flex justify-content-center mt-3 align-items-center gap-15'>
                                        <Link to="/product" className='button text-white border-0'>Login</Link>
                                        
                                        <Link to="/signup" className='button signup'>SignUp</Link>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
