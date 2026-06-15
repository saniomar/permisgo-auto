import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

// Image
import trustpilot from  "../../../../public/image/trustpilot-Logo.png"
import request2_1 from  "../../../../public/image/request2-1.png"
import request2_2 from  "../../../../public/image/request2-2.png"
import requestHero from  "../../../../public/image/request-hero.png"

import requestSchoolCss from "./styles/request-for-school-partner.module.css"

// Icon
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const requestForSchoolPartner = () => {
  return (
    <>
      <section>
        <div className={requestSchoolCss.request_hero}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <h1>Grow Your Driving School with PermisGo</h1>
                <p>Join a network of 300+ partner schools across France and unlock powerful tools, increased visibility, and exclusive benefits to scale your business.</p>
                <Link href="" className='btn btn-lg'>Apply for Partnership</Link>
              </div>
              <div className="col-lg-6 col-md-6">
                <Image src={requestHero} layout='responsive' alt=''></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={requestSchoolCss.partnership_second}>
          <div className="container-fluid">
            <div className="text-center">
              <h2>A partnership for your school ?</h2>
            </div>

            <div className="row align-items-end">
              <div className="col-lg-2">
                <Image src={request2_1} layout='responsive' alt='' className={requestSchoolCss.partnership_second_first_img}></Image>
              </div>
              <div className="col-lg-8">
                <div className={requestSchoolCss.benifit_box}>
                  <div className="text-center">
                    <h4>Exclusive Benefits</h4>
                    <ul>
                      <li><div>Discounts on Driving Licence Packages</div></li>
                      <li><div>Uncapped Earning Opportunities</div></li>
                      <li><div>Competitions & Prize Draws</div></li>
                      <li><div>Campus Tours with Goodies & Entertainment</div></li>
                      <li><div>Partner program (Connect with partners that support student life)</div></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <Image src={request2_2} layout='responsive' alt='' className={requestSchoolCss.partnership_second_sec_img}></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={requestSchoolCss.partnership_form}>
          <div className="container-fluid">
            <div className="text-center">
              <h2>Request for School Partnership</h2>
              <p>Fill out this form with necessary information</p>
            </div>
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <div className={requestSchoolCss.partnership_form_box}>
                  <h4>School Information</h4>

                  <div className="mt-3">
                    <form action="">
                      <div className="row">
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="">School Name</label>
                          <input type="text" className='form-control form-control-lg' placeholder='Write name here' />
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="">Type of School</label>
                          <select name="" id="" className='form-select form-select-lg'>
                            <option value="">-- Select School --</option>
                          </select>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="">Phone Number</label>
                          <input type="tel" className='form-control form-control-lg' placeholder='Write name here' />
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="">Email Address</label>
                          <input type="email" className='form-control form-control-lg' placeholder='Write name here' />
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="">City</label>
                          <input type="text" className='form-control form-control-lg' placeholder='Write name here' />
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="">Address</label>
                          <input type="text" className='form-control form-control-lg' placeholder='Write name here' />
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="">Number of Students</label>
                          <select name="" id="" className='form-select form-select-lg'>
                            <option value="">-- Select Student Number --</option>
                          </select>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="">Type of Association</label>
                          <select name="" id="" className='form-select form-select-lg'>
                            <option value="">-- Select Association --</option>
                          </select>
                        </div>
                        <div className="col-lg-6 mb-4">
                          <p>Is there another driving school on your campus?</p>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked />
                            <label className="form-check-label" for="inlineCheckbox1">Yes</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                            <label className="form-check-label" for="inlineCheckbox2">No</label>
                          </div>
                        </div>
                      </div>
                      <button className='btn btn-lg mt-4'>Submit</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={requestSchoolCss.request_section_four}>
          <div className="container-fluid">
            <div className="text-center">
              <h2>The students' favorite driving school!</h2>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                <iframe width="100%" height="500" className='rounded-4' src="https://www.youtube.com/embed/v3YLlDYHpXg?si=BSV3elC2FONWf7_F" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
              <div className="col-lg-5 col-md-6">
                <h4 className='mb-4'>Our partners recommend us!</h4>
                <div className={requestSchoolCss.school_partner_trastpilot}>
                  <div className="text-center">
                    <h3>Trustpilot Ratings</h3>
                    <Image src={trustpilot} layout='responsive' alt=''></Image>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStarHalfAlt /></li>
                    </ul>
                    <p className='mb-0'>04 out of 05</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={requestSchoolCss.request_section_five}>
          <div className="container-fluid">
            <div id={requestSchoolCss.request_section_five_inner}>
              <div className="text-center">
                <h3>Start Your Driving Journey Today</h3>
                <Link className="btn btn-lg" href="/login-to-my-partner-area">Apply for Partnership</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default requestForSchoolPartner

