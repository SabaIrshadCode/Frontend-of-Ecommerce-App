import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import blog from "../images/blog-1.jpg"
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
const Blog = () => {
    return (
        <>
            <Meta title={"Blogs"}></Meta>
            <BreadCrumb title="Blogs"></BreadCrumb>
            <div className='blog-wrapper-2 home-wrapper-2 py-5'>
                <div className='container-xl'>

                    <div className='row'>
                    <div className='col-12 home-wrapper-2'>

                        <div className='blog-card'>
                            <div className='card-image'>
                                <img src={blog} className='img-fluid' alt="" />
                            </div>
                            <div className='blog-content'>
                                <p className='date'>2 Jan, 2024</p>
                                <h5 className='title'>A beautiful sunday morning renaissance</h5>
                                <p className='desc'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, quaerat. Voluptas odit, accusamus exercitationem suscipit et vel? Enim, laudantium necessitatibus.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quas!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, quaerat. Voluptas odit, accusamus exercitationem suscipit et vel? Enim, laudantium necessitatibus.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quas!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, quaerat. Voluptas odit, accusamus exercitationem suscipit et vel? Enim, laudantium necessitatibus.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quas!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, quaerat. Voluptas odit, accusamus exercitationem suscipit et vel? Enim, laudantium necessitatibus.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quas!
                                </p>

                            </div>
                        </div>


                    </div>

                </div>


            </div>
        </div >
            
        </>
    )
}

export default Blog
