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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-6">
                            <Image src={Logo} className={footerStyle.footerLogo} layout='responsive' alt=''></Image>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam quae officia.</p>
                            <div className={footerStyle.footer_contact}>
                                <ul>
                                    <li><FaPhoneSquareAlt /> | +61 4584 5887</li>
                                    <li><MdOutlineEmail /> | info@permisgoautoecole.com</li>
                                    <li><GrLocation /> | Road no-2, Sector-6, Uttara, Dhaka, Bangladesh</li>
                                </ul>
                            </div>
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
                        <div className="col-lg-2 col-md-6">
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
                        <div className="col-lg-2 col-md-6">
                            <h4>Partnership Request</h4>
                            <div className={footerStyle.footer_partnership}>
                                <ul>
                                    <li><Link href="">Log in to my partner area</Link></li>
                                    <li><Link href="">Request for school partnership</Link></li>
                                    <li><Link href="">B2B partnership request</Link></li>
                                    <li><Link href="">Becoming an independent instructor</Link></li>
                                    <li><Link href="">Driving instructor salary</Link></li>
                                    <li><Link href="">Monitor FAQs</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h4>Our Services</h4>
                            <div className={footerStyle.footer_services}>
                                <ul>
                                    <li><Link href="">Frequently Asked Questions</Link></li>
                                    <li><Link href="">Highway Code Glossary</Link></li>
                                    <li><Link href="">Driving licence glossary</Link></li>
                                    <li><Link href="">Person with a disability</Link></li>
                                    <li><Link href="">Sponsorship</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h4>Opening Hours</h4>
                            <div className={footerStyle.footer_openign_time}>
                                <ul>
                                    <li>Monday 10am - 1pm and 3pm - 7pm</li>
                                    <li>Tuesday 10am - 1pm and 3pm - 7pm</li>
                                    <li>Wednesday 10am - 1pm and 3pm - 7pm</li>
                                    <li>Thursday 10am - 1pm and 3pm - 7pm</li>
                                    <li>Friday 10am - 1pm and 3pm - 7pm</li>
                                    <li>Saturday 10am - 1pm and 3pm - 7pm</li>
                                    <li>Sunday By Appointment</li>
                                </ul>
                            </div>
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