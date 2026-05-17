import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Styles
import studentForgetPassCss from "./styles/student-forget-password.module.css"

// Images
import Logo from "../../../../public/image/logo2.png"

// Icons
import { FaArrowLeftLong } from "react-icons/fa6";


const StudentForgetPass = () => {
  return (
    <>
        <div className={studentForgetPassCss.studentLogin}>
            <div className="container">
                <div className={studentForgetPassCss.student_login_outter}>
                    <div className={studentForgetPassCss.student_login_inner}>
                        <div className={studentForgetPassCss.student_login_main}>
                            <div className='text-center'>
                                <Image src={Logo} layout='responsive' alt=''></Image>
                                <h1 className='mb-5'>Forgot your Password</h1>
                                <p>Enter your email to reset it!</p>
                            </div>

                            <form action="">
                                <label htmlFor="">Email</label>
                                <input type="email" className='form-control form-control-lg mb-4' placeholder='Enter your email' />

                                <div className='mt-5'>
                                    <button className='btn btn-lg' id={studentForgetPassCss.loginBtn}>Confirm</button>
                                </div>
                            </form>

                            <div className="mt-4 text-center" id={studentForgetPassCss.login_register_link}>
                                <p>
                                    <FaArrowLeftLong /> Return back to
                                    <Link href="/student-login"> Login Page</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default StudentForgetPass