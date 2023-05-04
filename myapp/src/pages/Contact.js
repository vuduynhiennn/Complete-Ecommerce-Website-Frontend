import React from 'react'
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi';

function Contact() {
  return (
    <>
        <Meta title={"Contact Us"} />
        <BreadCrumb title="Contact Us"/>
        <div className='contact-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
              </div>

              <div className='col-12'>
                <div className='contact-inner-wrapper d-flex justify-content-between'>
                  <div>
                    <h3 className='contact-title mb-4'>Contact </h3>
                    <form action='' className='d-flex flex-column gap-15'>
                      <div>
                        <input className='form-control' type='text' placeholder='Name'/>
                      </div>
                      <div>
                        <input className='form-control' type='email' placeholder='Email'/>
                      </div>
                      <div>
                        <input className='form-control' type='text' placeholder='Mobile Number' />
                      </div>
                      <div>
                        <textarea cols="30" rows="4" className="w-100 form-control" placeholder='Comments'>

                        </textarea>
                      </div>
                      <button className='button border-0'>Submit</button>
                    </form>
                  </div>
                  <div>
                    <h3 className='contact-title mb-4'>Get in touch with us</h3>
                    <div>
                      <ul className='ps-0'>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <AiOutlineHome className='fs-5'/>
                          <address className='mb-0'>193 Vinh Hung, Hoang Mai, Ha Noi, Viet Nam, Trai Dat, He Mat Troi</address>
                        </li>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <BiPhoneCall className='fs-5'/>
                          <address className='mb-0'>031 415 926</address>

                        </li>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <AiOutlineMail className='fs-5'/>
                          <address className='mb-0'>aiiuko@gmail.com</address>

                        </li>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <BiInfoCircle className='fs-5'/>
                          <address className='mb-0'>Monday - Friday 10AM - 8PM</address>
                        </li>
                      </ul>
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

export default Contact