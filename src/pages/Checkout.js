import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";
import countryList from 'react-select-country-list'
const Checkout = () => {
    return (
        <>
            <div className='checkout-wrapper home-wrapper-2 py-5'>
                <div className='container-xl'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='checkout-left-data'>
                                <h3 className='website-name'>DeviceDOM</h3>
                                <nav style=  {{"--bs-breadcrumb-divider": '>'} }
                                aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/cart">Cart</Link></li>
                                        &nbsp; /
                                        <li className="breadcrumb-item"><Link to="/">Information</Link></li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active" aria-current="page">Check Out</li>
                                    </ol>
                                </nav>
                                <h4 className='title'>Contact Information</h4>
                                <p className='user-details'>Name: ABC (abcdef988@gmail.com)</p>
                                <form 
                                action=''
                                className='d-flex gap-15 flex-wrap justify-content-between'
                                >
                                   <div className='w-100'>
                                    <select name='' className='form-control form-select' id=''>
                                        <option value="" selected disabled>Select Country
                                        </option>
                                        <option>Pakistan</option>
                                        <option>China</option>
                                        <option>India</option>
                                        
                                    </select>
                                   
                                   </div> 
                                   <div className='flex-grow-1'>
                                    <input type='text' className='form-control' placeholder='First-name'></input>
                                   </div> 
                                   <div className='flex-grow-1'>
                                   <input type='text' className='form-control' placeholder='Last-name'></input>
                                   </div> 
                                   <div className='w-100'>
                                   <input type='text' className='form-control' placeholder='Address'></input>
                                   </div> 
                                   <div className='flex-grow-1'>
                                   <input type='text' className='form-control' placeholder='city'></input>
                                   </div> 
                                   <div className='flex-grow-1'>
                                   <select name='' className='form-control form-select ' id=''>
                                        <option value="" selected disabled>Select State</option>
                                        
                                    </select>
                                   </div> 
                                   <div className='flex-grow-1'>
                                   <input type='text' className='form-control' placeholder='Zip-code'></input>
                                   </div>
                                   <div className='w-100'>
                                    <div className='d-flex justify-content-between mt-4'>
                                    <div className='d-flex gap-10 align-items-center'>
                                    <IoMdArrowBack />
                                        <Link to="/cart">Return to Cart</Link>
                                    </div>

                                        <Link className='button' to="">Continue to Shipping</Link>
                                    </div>
                                   </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-5'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
