import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <>
        <Meta title={"Signup"}></Meta>
        <BreadCrumb title="Signup"></BreadCrumb>
        <div className='login-wrapper-2 home-wrapper-2 py-5'>
                <div className='container-xl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Sign Up</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                <div className='mt-1'>
                                <input type='text' name='name' placeholder='Name' className='form-control'></input>
                                </div>
                                <div className='mt-1'>
                                <input type='e-mail' name='e-mail' placeholder='E-mail' className='form-control'></input>
                                </div>
                                <div className='mt-1'>
                                <input type='tel' name='mobile' placeholder='Mobile Number ' className='form-control'></input>
                                </div>
                                <div>
                                <input type='password' name='password' placeholder='Password' className='form-control'></input>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-center mt-3 align-items-center gap-15'>
                                        <button type='submit' className='button border-0'>SignUp</button>
                                       
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

export default Signup
