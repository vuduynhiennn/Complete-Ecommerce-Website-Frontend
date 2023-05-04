import { Link } from 'react-router-dom';
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'

function Footer() {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter'/>
                <h2 className='mb-0 text-white'> Sign Up for Newsletter </h2>
              </div>
            </div>
            <div className='col-7'>
            <div className="input-group">
              <input type="text" 
                     className="form-control py-1" 
                     placeholder="Your email address" 
                     aria-label="Your email address" 
                     aria-describedby="basic-addon2" />
              <span className="input-group-text p-2 text-white" id="basic-addon2">
                Subcribe
              </span>
            </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                
                <address className='text-white fs-6'>193 Vinh Hung, Hoang Mai, Ha Noi</address>

                <a href='tel+94353021375' className='mt-4 text-white'>035 302 1375</a>
                <a href='mailto:nhienduyvu@gmail.com'
                   className='mt-2 d-block mb-0 text-white'
                >
                  nhienduyvu@gmail.com
                </a>

                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white'
                     href='https://linkedin.com'>
                     <BsLinkedin className="fs-4" />
                  </a>

                  <a className='text-white'
                     href='https://github.com'>
                     <BsGithub className="fs-4" />
                  </a>

                  <a className='text-white'
                     href='https://instagram.com'>
                     <BsInstagram className="fs-4" />
                  </a>

                  <a className='text-white'
                     href='https://youtube.com'>
                     <BsYoutube className="fs-4" />
                  </a>
                </div>

              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablet</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'> &copy; {new Date().getFullYear()}; Powered by Vu Duy Nhien</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;