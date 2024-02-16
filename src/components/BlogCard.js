import React from 'react'
import { Link } from 'react-router-dom'
import blog from "../images/blog-1.jpg"
function BlogCard() {
  return (
    <div className='col-3'>
      <div className='blog-card'>
        <div className='card-image'>
            <img src={blog} className='img-fluid' alt=""/>
        </div>
        <div className='blog-content'>
            <p className='date'>2 Jan, 2024</p>
            <h5 className='title'>A beautiful sunday morning renaissance</h5>
            <p className='desc'>
               Lorem ipsum dolor sit amet constecteur adipisicing elit. Atque
               quaerat accusamus officia
            </p>
            <Link to="/blogs" className='button'>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
