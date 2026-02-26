import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import loginStyle from "./styles/login.module.css"

// Image
import Logo from "../../../public/image/logo2.png"
import Logo2 from "../../../public/image/logo.png"

// Icons
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <div className={loginStyle.login_page}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6" id={loginStyle.loginLeft}>
              <div className="text-center">
                <h4>Welcome To</h4>
                <div className="py-4">
                  <Image src={Logo} layout='responsive' id={loginStyle.logoLeftImg} alt=''></Image>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur molestias ullam excepturi error distinctio corporis quis ipsa praesentium nulla.</p>
              </div>

              <div>
                <form action="">
                  <div className="row">
                    <div className="col-lg-12 mt-3">
                      <label htmlFor="email">Email</label>
                      <input type="email" id='email' className='form-control form-control-lg' name='' placeholder='Email' required />
                    </div>
                    <div className="col-lg-12 mt-3">
                      <label htmlFor="password">Password</label>
                      <input type="password" id='password' className='form-control form-control-lg' name='' placeholder='Password' required />
                    </div>
                    <div className="col-lg-12 mt-4">
                      <button className='btn btn-lg'>Login</button>
                    </div>
                  </div>
                </form>
                <div className="text-end mt-4">
                  <Link Link href="/forget-password">Forget Password?</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6" id={loginStyle.loginRight}>
              <div className="text-center">
                <div className="py-4">
                  <Image src={Logo2} layout='responsive' id={loginStyle.logoRightImg} alt=''></Image>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam voluptates officiis eum at harum. Itaque vero nulla temporibus ipsum dolore, minus voluptatem cum soluta porro ut repudiandae! Consequuntur, in maiores. Molestiae, magnam. Nisi quo similique at consequatur mollitia! Pariatur?</p>

                <div className="mt-5">
                  <p>Don't you have an account?</p>
                  <Link href="/register" id={loginStyle.registerBtn} className='btn btn-lg'>Register</Link>
                </div>

                <div className="py-4">
                  <hr />
                  <h5 className='text-light'>OR</h5>
                </div>
                <p>Continue with Social Media</p>
                <div className={loginStyle.loginSocial}>
                  <ul>
                    <li><Link href=""><FaFacebook /></Link></li>
                    <li><Link href=""><FaGoogle /></Link></li>
                    <li><Link href=""><FaLinkedinIn /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login