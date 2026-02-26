import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Style
import footerStyle from "../styles/footer.module.css"

// Components
import BottomMenu from './bottom-menu'

// Icon
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaPinterestSquare, FaYoutube, FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

// Image
import Logo from "../../../public/image/logo.png"

const Footer = () => {

    const date = new Date().getFullYear()

  return (
    <>
        <BottomMenu />
        <footer>
            <div id={footerStyle.main_footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <Image src={Logo} className={footerStyle.footerLogo} layout='responsive' alt=''></Image>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam quae officia. Ea necessitatibus iure doloribus fugiat obcaecati! Eos quidem non laboriosam reprehenderit.</p>
                            <div className={footerStyle.footer_social}>
                                <ul>
                                    <li><Link href=""><FaFacebook /></Link></li>
                                    <li><Link href=""><FaInstagram /></Link></li>
                                    <li><Link href=""><FaLinkedin /></Link></li>
                                    <li><Link href=""><FaPinterestSquare /></Link></li>
                                    <li><Link href=""><FaYoutube /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4>Quick Link</h4>
                            <div className={footerStyle.footer_menu}>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/helps">Helps</Link></li>
                                    <li><Link href="/courses">Courses</Link></li>
                                    <li><Link href="/pricing">Pricing</Link></li>
                                    <li><Link href="/booking">Booking</Link></li>
                                    <li><Link href="/locations">Locations</Link></li>
                                    <li><Link href="/about-us">About Us</Link></li>
                                    <li><Link href="/contact-us">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4>Contact Us</h4>
                            <div className={footerStyle.footer_contact}>
                                <ul>
                                    <li><FaPhoneSquareAlt /> | +61 4584 5887</li>
                                    <li><MdOutlineEmail /> | info@permisgoautoecole.com</li>
                                    <li><GrLocation /> | Road no-2, Sector-6, Uttara, Dhaka, Bangladesh</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4>Newsletter</h4>
                            <p>Subscribe to get the latest updates and offers</p>
                            <form action="">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control form-control-lg" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-lg" type="button" id="button-addon2">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    
            <div id={footerStyle.copywrite}>
                <div className="container">
                    <hr />
                    <div className="row">
                        <div className="col-lg-6">
                            <p className='mb-0'>&copy; {date} Permisgo Auto Ecole | All Right Reserved. | Design & Development By :- <Link href="https://www.digitalmarketingbd.com/">Digital Marketing Solution (Pvt.) Ltd. </Link></p>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-end">
                                <div className={footerStyle.footer_support_menu}>
                                    <ul>
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer