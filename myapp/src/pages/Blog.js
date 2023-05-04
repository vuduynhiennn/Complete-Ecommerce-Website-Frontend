import React from 'react'
import Meta from "../components/Meta"
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'
function Blogs() {
  return (
    <>
        <Meta title={"Blogs"} />
        <BreadCrumb title="Blogs"/>
        <div className='blog-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                    <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Blog tags
                            </h3>
                            <div>
                                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Pc</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">PS 5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='row'>
                            <div className='col-6 mb-3'>
                                <BlogCard />
                            </div>
                            <div className='col-6 mb-3'>
                                <BlogCard />
                            </div>
                             <div className='col-6 mb-3'>
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blogs