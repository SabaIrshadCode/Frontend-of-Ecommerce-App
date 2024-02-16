import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee"
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard';
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Home = () => {
  return (
    <>
     <Meta title={"DeviceDOM"}></Meta>
        <BreadCrumb title="DeviceDOM"></BreadCrumb>
      <section className='home-wrapper-1 py-4'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative '>
                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center '>
                <div className='small-banner position-relative'>
                  <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>BEST SALE</h4>
                    <h5>Laptops Max</h5>
                    <p>From $1699.00 <br /> or $64.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>New Arrival</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From $599.00 <br /> or $49.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>15% OFF</h4>
                    <h5>Smartwatch7</h5>
                    <p>Shop the latest band <br />styles and colors.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>Free Engraving</h4>
                    <h5>AirPods Max</h5>
                    <p>High fidelity playback, <br />and ultra-low distortion</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <div className='.services d-flex align-items-center justify-content-between gap-15'>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service.png" alt="" />
                  <div>
                    <h6 className='mb-0'>Free Shipping</h6>
                    <small className="mb-0">From all orders over $5</small>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-02.png" alt="" />
                  <div>
                    <h6 className='mb-0'>Daily Surprise Offers</h6>
                    <small className="mb-0">Save upto 25% off</small>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-03.png" alt="" />
                  <div>
                    <h6 className='mb-0'>Support 24/7</h6>
                    <small className="mb-0">Show with an expert </small>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-04.png" alt="" />
                  <div>
                    <h6 className='mb-0'>Affordable Prices</h6>
                    <small className="mb-0">Get Factory Default Prices</small>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-05.png" alt="" />
                  <div>
                    <h6 className='mb-0'>Secure Payments</h6>
                    <small className="mb-0">100% Protected Payment</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Watches</h6>
                    <small>10 Items</small>
                  </div>
                  <img src="images/watch.jpg " alt="watch" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <small>10 Items</small>
                  </div>
                  <img src="images/camera.jpg " alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <small>10 Items</small>
                  </div>
                  <img src="images/tv.jpg " alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <small>10 Items</small>
                  </div>
                  <img src="images/headphone.jpg " alt="camera" />
                </div>
                <div className='d-flex  align-items-center'> 
                  <div>
                    <h6>Mobile Phones</h6>
                    <small>10 Items</small>
                  </div>
                  <img src="images/tab.jpg" alt="camera" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Speaker</h6>
                    <small>10 Items</small>
                  </div>
                  <img src="images/speaker.jpg " alt="camera" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Laptop</h6>
                    <small>10 Items</small>
                  </div>
                  <img src="images/laptop.jpg " alt="camera" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Earports</h6>
                    <small>10 Items</small>
                  </div>
                  <img src="images/acc.jpg " alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

          </div>
        </div>


      </section> */}
      <section className='marque-wrapper py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marque-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-23'>
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-23'>
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-23'>
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-23'>
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-23'>
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-23'>
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-23'>
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-23'>
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
            <BlogCard />
            
          </div>
        </div>
      </section>

    </>
  )
}

export default Home
