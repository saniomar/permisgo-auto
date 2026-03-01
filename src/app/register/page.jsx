import React from 'react'
import Link from 'next/link'

// Style
import registerStyle from "./styles/register.module.css"

// Icons
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Register = () => {
    return (
        <>
            <div className={registerStyle.register_page}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" id={registerStyle.registerLeftSide}>
                            <div id={registerStyle.registerLeft}>
                                <h2>Welcome Back!</h2>
                                <p>To keep connected with us please login with your personal info</p>

                                <div className="mt-5">
                                    <p>Already Have an Account ?</p>
                                    <Link href="/login" className='btn btn-lg mt-4'>Login</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8" id={registerStyle.registerRightSide}>
                            <div id={registerStyle.registerRight}>
                                <div className="text-center">
                                    <h2>Create An Account</h2>
                                    <div className={registerStyle.register_icon}>
                                        <ul>
                                            <li>
                                                <Link href=""><FaFacebook /></Link>
                                            </li>
                                            <li>
                                                <Link href=""><FaGoogle /></Link>
                                            </li>
                                            <li>
                                                <Link href=""><FaLinkedinIn /></Link>
                                            </li>
                                            <p>Or use your email for registration:</p>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mt-3 register_form' id={registerStyle.register_form}>

                                    <ul className="nav nav-tabs gap-3" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="student-tab" data-bs-toggle="tab" data-bs-target="#student-tab-pane" type="button" role="tab" aria-controls="student-tab-pane" aria-selected="true">Student Register</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="teacher-tab" data-bs-toggle="tab" data-bs-target="#teacher-tab-pane" type="button" role="tab" aria-controls="teacher-tab-pane" aria-selected="false">Teacher Register</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="student-tab-pane" role="tabpanel" aria-labelledby="student-tab" tabindex="0">
                                            <form action="">
                                                <div className="row">
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="form-check">
                                                            <input type="checkbox" name="" className='form-check-input' value="" id="flexCheckChecked" checked />
                                                            <label className="form-check-label" for="flexCheckChecked">
                                                                Student Register
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 mt-3">
                                                        <label htmlFor="firstName">First Name</label>
                                                        <input type="text" id='firstName' className='form-control form-control-lg' name='' placeholder='First Name' required />
                                                    </div>
                                                    <div className="col-lg-6 mt-3">
                                                        <label htmlFor="lastName">Last Name</label>
                                                        <input type="text" id='lastName' className='form-control form-control-lg' name='' placeholder='Last Name' required />
                                                    </div>
                                                    <div className="col-lg-12 mt-3">
                                                        <label htmlFor="email">Email</label>
                                                        <input type="email" id='email' className='form-control form-control-lg' name='' placeholder='Email' required />
                                                    </div>
                                                    <div className="col-lg-12 mt-3">
                                                        <label htmlFor="password">Password</label>
                                                        <input type="password" id='password' className='form-control form-control-lg' name='' placeholder='Password' required />
                                                    </div>
                                                    <div className="col-lg-12 mt-4">
                                                        <button className='btn btn-lg'>Register</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="tab-pane fade" id="teacher-tab-pane" role="tabpanel" aria-labelledby="teacher-tab" tabindex="0">
                                            <form action="">
                                                <div className="row">
                                                    <div className="col-lg-12 mt-3">
                                                        <div className="form-check">
                                                            <input type="checkbox" name="" className='form-check-input' value="" id="flexCheckChecked" checked />
                                                            <label className="form-check-label" for="flexCheckChecked">
                                                                Teacher Register
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 mt-3">
                                                        <label htmlFor="firstName">First Name</label>
                                                        <input type="text" id='firstName' className='form-control form-control-lg' name='' placeholder='First Name' required />
                                                    </div>
                                                    <div className="col-lg-6 mt-3">
                                                        <label htmlFor="lastName">Last Name</label>
                                                        <input type="text" id='lastName' className='form-control form-control-lg' name='' placeholder='Last Name' required />
                                                    </div>
                                                    <div className="col-lg-12 mt-3">
                                                        <label htmlFor="email">Email</label>
                                                        <input type="email" id='email' className='form-control form-control-lg' name='' placeholder='Email' required />
                                                    </div>
                                                    <div className="col-lg-12 mt-3">
                                                        <label htmlFor="password">Password</label>
                                                        <input type="password" id='password' className='form-control form-control-lg' name='' placeholder='Password' required />
                                                    </div>
                                                    <div className="col-lg-12 mt-4">
                                                        <button className='btn btn-lg'>Register</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
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

export default Register