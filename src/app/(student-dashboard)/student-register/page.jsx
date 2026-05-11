import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Icons
import { FaGoogle, FaApple } from "react-icons/fa";

// Images
import Logo from "../../../../public/image/logo2.png"

// Styles
import studentRegistrationCss from "./styles/student-registration.module.css"

const StudentRegistration = () => {
  return (
    <>
      <div>
        <div className={studentRegistrationCss.studentLogin}>
          <div className="container">
            <div className={studentRegistrationCss.student_login_outter}>
              <div className={studentRegistrationCss.student_login_inner}>
                <div className={studentRegistrationCss.student_login_main}>
                  <div className='text-center'>
                    <Image src={Logo} layout='responsive' alt=''></Image>
                    <h1 className='mb-5'>Registration Student</h1>
                  </div>

                  <form action="">
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="">First Name</label>
                        <input type="text" className='form-control form-control-lg mb-4' placeholder='Write name here' />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Last Name</label>
                        <input type="text" className='form-control form-control-lg mb-4' placeholder='Write name here' />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Email</label>
                        <input type="email" className='form-control form-control-lg mb-4' placeholder='Email' />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Phone Number</label>
                        <input type="tel" className='form-control form-control-lg mb-4' placeholder='Phone Number' />
                      </div>
                      <div className="col-lg-12 mb-4">
                        <label htmlFor="">Select Gender</label>
                        <div className='mt-2'>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                            <label className="form-check-label" for="flexCheckDefault">
                              Male
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                              Female
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <label htmlFor="">Password</label>
                        <input type="password" className='form-control form-control-lg mb-4' placeholder='Password' />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" className='form-control form-control-lg mb-4' placeholder='Confirm Password' />
                      </div>
                    </div>

                    <div className='mt-5'>
                      <button className='btn btn-lg' id={studentRegistrationCss.loginBtn}>Sign Up</button>
                    </div>
                  </form>

                </div>

                <div className="col-lg-12 mt-4">
                  <div className='mt-2'>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">
                        <p className=''>I wish to benefit from the advice and offers from permisgo to obtain my license</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">
                        <p className=''>By clicking Sign up, you agree to our <Link href="" className={studentRegistrationCss.termPrivacyLink}>Terms & Condition</Link> and <Link href="" className={studentRegistrationCss.termPrivacyLink}>Privecy Policy</Link></p>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h4>Sign Up</h4>
                  <p>Or continue with</p>

                  <div className="text-center mt-4">
                    <p>OR</p>
                    <div className='d-flex justify-content-center align-items-center gap-4'>
                      <div>
                        <Link href="">
                          <FaGoogle className={studentRegistrationCss.login_social_icon} />
                        </Link>
                      </div>
                      <div>
                        <Link href="">
                          <FaApple className={studentRegistrationCss.login_social_icon} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center" id={studentRegistrationCss.login_register_link}>
                    <p>
                      Already have an account?
                      <Link href="/student-login"> Log in</Link>
                    </p>
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

export default StudentRegistration