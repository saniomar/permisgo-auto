import React from 'react'
import Link from "next/link"
import Image from 'next/image'

// Styles
import studentDashboardBottomMenuCss from "../styles/student-dashboard-bottom-menu.module.css"

// Icon
import { FaBell } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";


const studentDashboardBottomMenu = () => {
  return (
    <>
        <div className={studentDashboardBottomMenuCss.bottomMenuBox}>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <Link href=""><FaBell /></Link>
                </div>
                <div>
                    <Link href=""><MdOutlineMessage /></Link>
                </div>
                <div>
                    <Link href=""><FaCartShopping /></Link>
                </div>
                <div>
                    <Link href=""><BsFillQuestionOctagonFill /></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default studentDashboardBottomMenu