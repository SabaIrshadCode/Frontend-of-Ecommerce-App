import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
const Forgotpassword = () => {
  return (
    <>
        <Meta title={"Forgot Password"}></Meta>
        <BreadCrumb title="Forgot Password"></BreadCrumb>
        <div className='login-wrapper-2 home-wrapper-2 py-5'>
                <div className='container-xl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Reset Your Password</h3>
                                <p className='text-center mt-2 mb-3'>
                                    We will send you an e-mail to reset your password.
                                </p>
                                <form action='' className='d-flex flex-column gap-15'>
                                <div className='mt-1'>
                                <input type='email' name='e-mail' placeholder='e-mail' className='form-control'></input>
                                </div>
                        
                                <div>
                                    <div className='d-flex justify-content-center flex-column mt-3 align-items-center gap-15'>
                                        <button className='button border-0' type='submit '>Submit</button>
                                        <Link to="/login">Cancel</Link>
                                        <Link to="/reset-password">Reset Password</Link>
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

export default Forgotpassword
