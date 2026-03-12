import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Image
import Logo from "../../../public/image/logo2.png"
import Driver from "../../../public/image/driver.png"
import Student from "../../../public/image/student.png"
import User from "../../../public/image/user.png"

// Style
import userLoginStyle from "./styles/user-login.module.css"

// Icon


const UserLogin = () => {
  return (
    <>
        <section>
            <div className={userLoginStyle.user_login_tab}>
                <div className="container">
                    <div className={userLoginStyle.user_login_box}>
                        <div className={userLoginStyle.user_login_inner_box}>
                            <div className={userLoginStyle.user_login_inner_box_two}>
                                <div className="text-center py-4">
                                    <Image src={Logo} layout='responsive' alt=''></Image>
                                    <div className="py-3">
                                        <h3>Register as</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 mt-3">
                                        <Link href="/teacher-login">
                                            <div className={userLoginStyle.loginBoxes}>
                                                <div className="text-center">
                                                    <div className="pb-4">
                                                        <Image src={Driver} layout='responsive' alt=''></Image>
                                                    </div>
                                                    <h4>Teacher</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4 mt-3">
                                        <Link href="/student-login">
                                            <div className={userLoginStyle.loginBoxes}>
                                                <div className="text-center">
                                                    <div className="pb-4">
                                                        <Image src={Student} layout='responsive' alt=''></Image>
                                                    </div>
                                                    <h4>Student</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4 mt-3">
                                        <Link href="/admin-login">
                                            <div className={userLoginStyle.loginBoxes}>
                                                <div className="text-center">
                                                    <div className="pb-4">
                                                        <Image src={User} layout='responsive' alt=''></Image>
                                                    </div>
                                                    <h4>Admin</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default UserLogin