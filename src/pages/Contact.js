import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai"
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi"

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"}></Meta>
      <BreadCrumb title="Contact Us"></BreadCrumb>
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12 '>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.578929754147!2d71.68909917387342!3d29.38261584962726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b91aacd7f1c29%3A0xfdebb25150143d80!2sHonda%20Bahawalpur%20(Motocycle%20Showroom)!5e0!3m2!1sen!2s!4v1704652703794!5m2!1sen!2s" width="600" height="450" className='border-0' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contect-title mb-4'>Contact Us</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Name' />
                    </div>
                    <div>
                      <input type='e-mail' className='form-control' placeholder='E-mail' />
                    </div>
                    <div>
                      <input type='tel' className='form-control' placeholder='Mobile no' />
                    </div>
                    <div>
                      <textarea
                        name=''
                        id=''
                        cols={30}
                        rows={10}
                        className='w-100 form-control'
                        placeholder='Message'
                      ></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contect-title mb-4'>Get in touch with us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineHome className='fs-5' />
                        <address className='mb-0'>Hno : 123 Near City ABC , Province XYZ
                          Pin Code: 111122
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'><BiPhoneCall className='fs-5' />
                        <a href="tel:+92 3015218076">
                          +92 3015218076
                        </a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineMail className='fs-5' />
                        <a href="mailto:sabairshad988@gmail.com">
                          sabairshad988@gmail.com
                        </a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiInfoCircle className='fs-5' />
                      <p className='mb-0'>Monday - Friday - 10 AM - 8PM</p>
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
