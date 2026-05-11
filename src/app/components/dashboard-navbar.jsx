import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


// styles
import dashboardNavCss from "../styles/dashboard-navbar.module.css"

// Icon
import { FaBell } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { BsFillQuestionOctagonFill } from "react-icons/bs";

// Images
import Logo from "../../../public/image/logo.png"

const DashboardNavbar = () => {
  return (
    <>
      <div className={dashboardNavCss.navbar}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link href="/">
              <Image src={Logo} layout='responsive' alt=''></Image>
            </Link>
          </div>
          <div>
            <ul>
              <li><Link href=""><FaBell /></Link></li>
              <li><Link href=""><MdOutlineMessage /></Link></li>
              <li><Link href=""><BsFillQuestionOctagonFill /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardNavbar