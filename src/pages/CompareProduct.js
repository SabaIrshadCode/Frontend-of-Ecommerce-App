import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Color from '../components/Color'
const CompareProduct = () => {
    return (
        <>
            <Meta title={"Compare Products"}></Meta>
            <BreadCrumb title="Compare Products"></BreadCrumb>
           

            
            <div className='compare-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src="images/cross.svg" alt='cross'
                                    className='position-absolute cross image-fluid'></img>
                                <div className='product-card-image'>
                                    <img src="images/watch.jpg" alt='watch'></img>
                                </div>
                                <div className='compare-product-details'>
                                  <h5 className='title'>
                                    Honor T1 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                                  </h5>
                                  <h6 className='price mb-3 mt-3'>$100</h6>
                                  <div>
                                    <div className='product-detail'>
                                        <h5>Brand:</h5>
                                        <p className='mb-0'>Havels</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type:</h5>
                                        <p className='mb-0'>Watch</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availability:</h5>
                                        <p className='mb-0'>In Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Color:</h5>
                                        <Color></Color>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size:</h5>
                                        <div className='d-flex gap-10'>
                                         <p>S</p>
                                         <p>M</p>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src="images/cross.svg" alt='cross'
                                    className='position-absolute cross image-fluid'></img>
                                <div className='product-card-image'>
                                    <img src="images/watch.jpg" alt='watch'></img>
                                </div>
                                <div className='compare-product-details'>
                                  <h5 className='title'>
                                    Honor T1 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                                  </h5>
                                  <h6 className='price mb-3 mt-3'>$100</h6>
                                  <div>
                                    <div className='product-detail'>
                                        <h5>Brand:</h5>
                                        <p className='mb-0'>Havels</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type:</h5>
                                        <p className='mb-0'>Watch</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availability:</h5>
                                        <p className='mb-0'>In Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Color:</h5>
                                        <Color></Color>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size:</h5>
                                        <div className='d-flex gap-10'>
                                         <p>S</p>
                                         <p>M</p>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </>
    )
}

export default CompareProduct
