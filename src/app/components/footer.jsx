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
import downCar from "../../../public/image/down-car.png"

const Footer = () => {

    const date = new Date().getFullYear()

    return (
        <>
            <BottomMenu />
            <section>
                <div className={footerStyle.downCarAnime}>
                    <div className="text-end">
                        <Image src={downCar} layout="responsive" alt=""></Image>
                    </div>
                </div>
            </section>
            <footer>
                <div id={footerStyle.main_footer}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-2 col-md-6" id={footerStyle.column}>
                                <Image src={Logo} className={footerStyle.footerLogo} layout='responsive' alt=''></Image>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Quidem.</p>
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
                                <div className={footerStyle.footer_openign_time}>
                                    <div className="mt-3">
                                        <div className="dropdown">
                                            <button className="btn btn-lg dropdown-toggle" id={footerStyle.footerTimeDropDown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Monday 10am - 1pm and 3pm - 7pm
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-dark" id={footerStyle.footerTimeDropDownItems}>
                                                <li className="dropdown-item">Monday 10am - 1pm and 3pm - 7pm</li>
                                                <li className="dropdown-item">Tuesday 10am - 1pm and 3pm - 7pm</li>
                                                <li className="dropdown-item">Wednesday 10am - 1pm and 3pm - 7pm</li>
                                                <li className="dropdown-item">Thursday 10am - 1pm and 3pm - 7pm</li>
                                                <li className="dropdown-item">Friday 10am - 1pm and 3pm - 7pm</li>
                                                <li className="dropdown-item">Saturday 10am - 1pm and 3pm - 7pm</li>
                                                <li className="dropdown-item">Sunday By Appointment</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6" id={footerStyle.column}>
                                <h4>About</h4>
                                <div className={footerStyle.footer_menu}>
                                    <ul>
                                        <li><Link href="/who-are-we">Who are we?</Link></li>
                                        <li><Link href="/where-are-we">Where are we?</Link></li>
                                        <li><Link href="/monitor-privacy-policy">Monitor Privacy Policy</Link></li>
                                        <li><Link href="/student-privacy-policy">Student Privacy Policy</Link></li>
                                        <li><Link href="/manage-my-cookies">Manage my cookies</Link></li>
                                        <li><Link href="/legal-notice">Legal Notice</Link></li>
                                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="/general-terms-and-conditions">General terms & conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6" id={footerStyle.column}>
                                <h4>Partnership Request</h4>
                                <div className={footerStyle.footer_partnership}>
                                    <ul>
                                        <li><Link href="/user-login">Log in to my partner area</Link></li>
                                        <li><Link href="/request-for-school-partnership">Request for school partnership</Link></li>
                                        <li><Link href="/b2b-partnership-request">B2B partnership request</Link></li>
                                        <li><Link href="/becoming-an-independent-instructor">Becoming an independent instructor</Link></li>
                                        <li><Link href="/driving-instructor-salary">Driving instructor salary</Link></li>
                                        <li><Link href="/monitor-faqs">Monitor FAQs</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6" id={footerStyle.column}>
                                <h4>Our Services</h4>
                                <div className={footerStyle.footer_services}>
                                    <ul>
                                        <li><Link href="/frequently-asked-questions">Frequently Asked Questions</Link></li>
                                        <li><Link href="/highway-code-glossary">Highway Code Glossary</Link></li>
                                        <li><Link href="/driving-licence-glossary">Driving licence glossary</Link></li>
                                        <li><Link href="/person-with-a-disability">Person with a disability</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id={footerStyle.copywrite}>
                    <div className="container">
                        <hr />
                        <div className="text-center">
                            <div className={footerStyle.footer_support_menu}>
                                <ul className='mb-3'>
                                    <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                                    <li><Link href="/privacy-and-cookies">Privacy & Cookies</Link></li>
                                    <li><Link href="/refund-policy">Refund Policy</Link></li>
                                    <li><Link href="/disclaimer">Disclaimer</Link></li>
                                </ul>
                            </div>
                            <p className='mb-0'>&copy; {date} Permisgo Auto Ecole | All Right Reserved. | Design & Development By :- <Link href="https://www.digitalmarketingbd.com/">Digital Marketing Solution (Pvt.) Ltd. </Link></p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <footer>
                <div id={footerStyle.main_footer}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <Image src={Logo} className={footerStyle.footerLogo} layout='responsive' alt=''></Image>
                                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam quae consectetur adipisicing elit officia.</p>
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
                                <h4>Contact Info</h4>
                                <div className={footerStyle.footer_contact}>
                                    <ul>
                                        <li><FaPhoneSquareAlt /> | 0188990000</li>
                                        <li><MdOutlineEmail /> | yourmail@gmail.com</li>
                                        <li><GrLocation /> | Road no-2, Sector-6, Uttara, Dhaka, Bangladesh</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4>Quick Link</h4>
                                <div className={footerStyle.footer_menu}>
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/courses">Courses</Link></li>
                                        <li><Link href="/pricing">Pricing</Link></li>
                                        <li><Link href="/locations">Locations</Link></li>
                                        <li><Link href="/about-us">About Us</Link></li>
                                        <li><Link href="/contact-us">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className={footerStyle.footer_openign_time}>    
                                    <h4>Business Hours</h4>
                                    <p>10am to 8pm || Weekend - Friday</p>

                                    <div className="mt-5">
                                        <h4>Subscribe to get the latest updates & offers</h4>
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
                                            <li><Link href="/helps">Helps</Link></li>
                                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> */}
        </>
    )
}

export default Footer