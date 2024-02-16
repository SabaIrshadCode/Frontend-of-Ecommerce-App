import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
const Resetpassword = () => {
  return (
    <>
        <Meta title={"Reset Password"}></Meta>
        <BreadCrumb title="Reset Password"></BreadCrumb>
        <div className='login-wrapper-2 home-wrapper-2 py-5'>
                <div className='container-xl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Reset Password</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                <input type='password' name='password' placeholder='Password' className='form-control'></input>
                                </div>
                                <div>
                                <input type='password' name='confirm-password' placeholder='Confirm-Password' className='form-control'></input>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-center mt-3 align-items-center gap-15'>
                                        <button type='submit' className='button border-0'>Done</button>
                                       
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

export default Resetpassword
