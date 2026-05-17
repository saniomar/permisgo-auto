import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// styles
import studentLoginCss from "./styles/student-login.module.css"

// Icon
import { FaGoogle, FaApple } from "react-icons/fa";


// Images
import Logo from "../../../../public/image/logo2.png"

const StudentLogin = () => {
  return (
    <>
      <div className={studentLoginCss.studentLogin}>
        <div className="container">
          <div className={studentLoginCss.student_login_outter}>
            <div className={studentLoginCss.student_login_inner}>
              <div className={studentLoginCss.student_login_main}>
                <div className='text-center'>
                  <Image src={Logo} layout='responsive' alt=''></Image>
                  <h1 className='mb-5'>Student Login</h1>
                </div>
                <form action="">
                  <label htmlFor="">Username</label>
                  <input type="text" className='form-control form-control-lg mb-4' placeholder='Write name here' />
                  <label htmlFor="">Password</label>
                  <input type="password" className='form-control form-control-lg mb-4' placeholder='Password' />

                  <div className="mt-4 text-start" id={studentLoginCss.student_forget_link}>
                    <Link href="/student-forget-password"><p>Forget Password</p></Link>
                  </div>

                  <div className='mt-5'>
                    <button className='btn btn-lg' id={studentLoginCss.loginBtn}>Log in</button>
                  </div>
                </form>

                <div className="text-center mt-4">
                  <p>OR</p>
                  <div className='d-flex justify-content-center align-items-center gap-4'>
                    <div>
                      <Link href="">
                        <FaGoogle className={studentLoginCss.login_social_icon} />
                      </Link>
                    </div>
                    <div>
                      <Link href="">
                        <FaApple className={studentLoginCss.login_social_icon} />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center" id={studentLoginCss.login_register_link}>
                  <p>
                    Don't have account?
                    <Link href="/student-register"> Register Now</Link>
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

export default StudentLogin
