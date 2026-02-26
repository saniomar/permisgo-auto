import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Image
import Logo from "../../../public/image/logo2.png"

// Styles
import forgetStyle from "./styles/forget-password.module.css"

const forgetPassword = () => {
  return (
    <>
        <div className={forgetStyle.forgetPass_page}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" id={forgetStyle.forgetLeft}></div>
                    <div className="col-lg-6" id={forgetStyle.forgetRight}>
                        <div className="text-center">
                            <Image src={Logo} id={forgetStyle.forgetLogo} layout='responsive' alt=''></Image>
                            <div className="py-4">
                                <h2>Password Reset</h2>
                                <p>Provide the email address associated with your account to recover your password.</p>
                            </div>
                        </div>

                        <div>
                            <form action="">
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' className='form-control form-control-lg' placeholder='Email' />
                                <button className='btn btn-lg mt-4'>Reset Password</button>
                            </form>
                            
                            <div className="text-center mt-5 d-flex justify-content-center gap-3">
                                <Link href="/register" id={forgetStyle.forgetRegisBtn}>Register</Link>
                                <Link href="/login" id={forgetStyle.forgetLoginBtn}>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default forgetPassword