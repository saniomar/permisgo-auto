import React from 'react'
import Link from 'next/link'

// Icon
import { MdOutlineDirections } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";

// Style
import bottomMenu from "../styles/bottom-menu.module.css"

const BottomMenu = () => {
  return (
    <>
        <div id={bottomMenu.mobile_menu}>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <div className='text-center'>
                        <Link href="">
                            <MdOutlineDirections />
                            <p className='mb-0'>Code</p>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='text-center'>
                        <Link href="">
                            <FaCar />
                            <p className='mb-0'>Conduite</p>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='text-center'>
                        <Link href="">
                            <MdLocalOffer />
                            <p className='mb-0'>Offer</p>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='text-center'>
                        <Link href="">
                            <RiProfileLine />
                            <p className='mb-0'>Profile</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BottomMenu