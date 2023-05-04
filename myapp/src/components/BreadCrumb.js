import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
    const { title } = props;

  return (
    <div className='breadcrum py-4  '>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-center mb-0'> <Link to="/" className="text-dark"> Home &nbsp; </Link> /  &nbsp; { title }</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumb