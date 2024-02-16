import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactImageZoom from 'react-image-zoom';
import ReactStars from "react-rating-stars-component";
import Color from '../components/Color';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { TbGitCompare } from "react-icons/tb"
const SingleProduct = () => {
  const props = { width: 400, height: 250, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" };
  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"}></Meta>
      <BreadCrumb title="Product Name"></BreadCrumb>
      <div className='main-product-wrapper mx-5 py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <div><ReactImageZoom {...props} /></div>
              </div>
              <div className='other-product-images d-flex flex-wrap gap-15'>
                <div>
                  <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg' alt="watch" className='img-fluid'></img>
                </div>
                <div>
                  <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg' alt="watch" className='img-fluid'></img>
                </div>
                <div>
                  <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg' alt="watch" className='img-fluid'></img>
                </div>
                <div>
                  <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg' alt="watch" className='img-fluid'></img>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='.main-product-details'>
                <div>
                  <h4 className='title border-bottom'>Kids Headphones Bulk 10 Pack Multi Colored For Students </h4>
                </div>
                <div className='border-bottom py-3'>
                  <p className='price'>$ 100</p>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className='mb-0' >Based on 2 Reviews</p>
                  </div>
                  <a href='#review'>Write a Review</a>
                </div>
                <div className='border-bottom py-3'>
                  <div className='d-flex gap-10 align-items-center py-2'>
                    <h3 className='product-heading'>Type : </h3><p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center py-2'>
                    <h3 className='product-heading'>Brand : </h3><p className='product-data'>Havells</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center py-2'>
                    <h3 className='product-heading'>Categories : </h3><p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center py-2'>
                    <h3 className='product-heading'>Tags : </h3><p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Color: </h3>
                    <Color />
                  </div>
                  <div className='d-flex gap-15 align-items-center flex-row mt-2 mb-3'>
                    <h3 className='product-heading'>Quantity : </h3>
                    <div>
                      <input
                        type='number'
                        name=''
                        min={1}
                        max={10}
                        className='form-control'
                        style={{ width: "70px" }}
                        id=''></input>
                    </div>
                    <div className='d-flex align-items-center gap-30 '>
                      <Link to="/cart" type='submit' className='button border-0'>Add to Cart</Link>
                      <Link to="/checkout" className='button signup'>Buy It Now</Link>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                  <div>
                    <Link to="/compare-products">Add to Compare</Link>
                    <TbGitCompare className='fs-5 me-2'></TbGitCompare>
                  </div>
                  <div>
                    <Link to='/wishlist'>Add to Wishlist</Link>
                    <AiOutlineHeart className='fs-5 me-2'></AiOutlineHeart>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='description-wrapper mx-5 py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <h4>Description</h4>
              <div>
                <p className='bg-white p-3'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, quaerat. Voluptas odit, accusamus exercitationem suscipit et vel? Enim, laudantium necessitatibus.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, quaerat. Voluptas odit, accusamus exercitationem suscipit et vel? Enim, laudantium necessitatibus.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='reviews-wrapper mx-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <h3 id="review">Reviews</h3>
              <div className='review-inner-wrapper'>
                <div className='review-head d-flex justify-content-between align-items-end'>
                  <div>
                    <h4 className='mb-2'>Customer Reviews</h4>
                    <div className='d-flex gap-10 align-items-center'>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className='mb-0' >Based on 2 Reviews</p>
                    </div>
                  </div>
                  {
                    orderedProduct && (
                      <div>
                        <a className='text-dark text-decoration-underline' href='#'>Write a Review</a>
                      </div>
                    )
                  }
                </div>
                <div className='review-form py-4'>
                  <h4>Write a Review </h4>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=''
                        id=''
                        cols={30}
                        rows={10}
                        className='w-100 form-control'
                        placeholder='Comments'
                      ></textarea>
                    </div>
                    <div className='d-flex justify-content-end '>
                      <button className='button border-0'>Submit Review </button>
                    </div>
                  </form>
                </div>
                <div className='reviews mt-4'>
                  <div className='review'>
                    <div className='d-flex gap-10 align-items-center'>
                      <h6 className='mb-0'>Saba Irshad</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, quaerat. Voluptas odit, accusamus exercitationem suscipit et vel? Enim, laudantium necessitatibus.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quas!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >
      <section className='featured-wrapper mx-5 py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard />

          </div>
        </div>


      </section>
    </>
  )
}

export default SingleProduct

