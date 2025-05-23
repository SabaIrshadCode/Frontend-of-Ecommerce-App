import React from 'react'

import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { MdDelete } from "react-icons/md";
import watch from "../images/watch.jpg"
import { Link } from 'react-router-dom';
const Cart = () => {
  return (
    <>
      <Meta title={"Cart"}></Meta>
      <BreadCrumb title="Cart"></BreadCrumb>
      <section className='cart-wrapper home-wrapper-2 py-5'>
        <div className='container-xl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='cart-header py-3 d-flex justify-content-between align-content-center'>
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>
                    <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                      <div className='cart-col-1 d-flex align-items-center'>
                         <div>
                            <img src={watch} className='image-fluid' alt='product-img'></img>
                         </div>
                         <div>
                            <p>abcd</p>
                            <p>Size: abc</p>
                            <p>Color: abc</p>
                         </div>
                      </div>
                      <div className='cart-col-2'>
                        <h5 className='price'>$ 100</h5>
                      </div>
                      <div className='cart-col-3 d-flex align-items-center gap-15'>
                        <div>
                            <input 
                            className='form-control' 
                            type='number' 
                            min={1}
                            max={10}
                            name=''
                             id=''
                             ></input>
                        </div>
                        <div>
                        <MdDelete className='text-danger' />
                        </div>
                      </div>
                      <div className='cart-col-4'>
                      <h5 className='price'>$ 100</h5>
                      </div>
                    </div>
                    
                    <div className='col-12 py-2 mt-4'>
                      <div className='d-flex justify-content-between align-items-baseline'>
                      <Link to="/product" className="button">Continue to Shopping</Link>
                      <div className='d-flex flex-column align-items-end'>
                        <h4>SubTotal : $1000</h4>
                        <p>Taxes and Shipping claculated at checkout</p>
                        <Link to="/checkout" className='button'>Checkout</Link>
                      </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Cart
