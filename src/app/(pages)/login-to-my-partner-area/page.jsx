import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Styles
import loginPartnerCss from "./styles/login-partner.module.css"

// Image

// Icon

const loginPartner = () => {
  return (
    <>
      <div className={loginPartnerCss.login_partner_first}>
        <div className="container">
          <div className="text-center">
            <h1>Manage Your Partnership with PermisGo</h1>
            <p>Log in to your PermisGo partner account to manage your school, track performance, and access exclusive tools and benefits.</p>
          </div>
        </div>
      </div>

      <div className={loginPartnerCss.login_partner_form}>
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className={loginPartnerCss.outer_box}>
                <div className={loginPartnerCss.inner_box}>
                  <h4 className='mb-4'>Get to see you again</h4>
                  <form action="">
                    <label htmlFor="">Email Address</label>
                    <input type="email" placeholder='Enter your Email' name='' className='form-control form-control-lg mb-4' />

                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Enter your password' name='' className='form-control form-control-lg mb-4' />

                    <button className='btn btn-lg' id={loginPartnerCss.loginBtn}>Log In</button>
                  </form>

                  <div className="py-4 text-center">
                    <Link href="/forget-password" className={loginPartnerCss.forgetBtn}>Forgot Password?</Link>
                  </div>

                  <div className="mt-3 text-center">
                    <p>You don’t have an account?</p>
                    <Link href="/admin-register" className='btn btn-outline-dark btn-lg' id={loginPartnerCss.createAccBtn}>Create An Account</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default loginPartner