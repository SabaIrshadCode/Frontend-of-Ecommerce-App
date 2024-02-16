import React from 'react'
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram} from "react-icons/fa";
import newsletter from "../images/newsletter.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className='container-xl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src={newsletter} alt='newsletter' />
                <h2 className='mb-0 text-white'>Sign Up for News Letter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div class="input-group ">
                <input type="text"
                  class="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span
                  class="input-group-text p-2"
                  id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className='container-xl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className="text-white mb-4 ">
                Contact Us
              </h4>
              <div>
                <address className='text-white fs-6'>Hno : 123 Near City ABC ,<br /> Province XYZ <br />
                  Pin Code: 111122
                </address>
                <a href="tel:+92 3015218076"
                  className='mt-2 d-block text-white mb-2 '>
                  +92 3015218076
                </a>
                <a href="mailto:sabairshad988@gmail.com"
                  className=" d-block mb-4 text-white">
                  sabairshad988@gmail.com
                </a>
                <div className='social-icons d-flex align-items-center gap-30'>
                  <a href="https://pk.linkedin.com/">
                    <FaLinkedin className='text-white fs-4' />
                  </a>
                  <a href="https://www.instagram.com/">
                    <FaInstagram className='text-white fs-4' />
                  </a>
                  <a href="https://github.com/SabaIrshadCode">
                    <FaGithub className='text-white fs-4' />
                  </a>
                  <a href="https://www.youtube.com/">
                    <FaYoutube className='text-white fs-4' />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className='col-3'>
              <h4 className="text-white mb-4">
                Information
              </h4>
              <div className='footer-link d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms and Conditions</Link>
              </div>
            </div> */}
            <div className='col-3'>
              <h4 className="text-white mb-4">
                Account
              </h4>
              <div className='footer-link d-flex flex-column'>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link to="/contact" className="text-white py-2 mb-1">Contact</Link>

              </div>
            </div>
            {/* <div className='col-2'>
              <h4 className="text-white mb-4">
                Quick Links
              </h4>
              <div className='footer-link d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()} Powered by DeviceDOM Developers</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
