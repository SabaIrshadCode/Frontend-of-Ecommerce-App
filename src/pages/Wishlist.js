import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"}></Meta>
            <BreadCrumb title="Wishlist"></BreadCrumb>
            <div className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='container-xl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src="images/cross.svg" alt='cross'
                                    className='position-absolute cross image-fluid'></img>
                                <div className='wishlist-card-image'>
                                    <img className='img-fluid w-100' src='images/watch.jpg' alt='watch'></img>
                                </div>
                                <div className='bg-white px-2 px-3'>
                                <h5 className='title'>
                                    Honor T1 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                                  </h5>
                                  <h6 className='price mb-3 mt-3'>$100</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist
