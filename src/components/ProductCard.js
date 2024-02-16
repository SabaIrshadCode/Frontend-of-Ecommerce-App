import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg"
import prodcompare from "../images/prodcompare.svg"
const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
        <div className={`${location.pathname == "/product" ? `gr-${ grid }` : "col-3"} `}>
            <div className='product-card position-relative'>
             <div className='wishlist-icon position-absolute'>
                <Link to=":id">
                    <img src={wish} alt="wishlist"></img>
                </Link>
             </div>
                <div className='product-image'>
                    <img src={watch} alt="product-image" />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>
                        Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value= "3"
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${ grid === 12 ? "d-block" : "d-none"}`}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, quaerat. Voluptas odit, accusamus exercitationem suscipit et vel?</p>
                    <p className='price'>$100</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column'>
                        <Link><img src={addcart} alt='add-cart'></img></Link>
                        <Link><img src={prodcompare} alt='prodcompare'></img></Link>
                        <Link><img src={view} alt='view'></img></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard

