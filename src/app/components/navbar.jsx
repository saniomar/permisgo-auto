import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Style
import navbarStyle from "../styles/navbar.module.css"

// Icons
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaPinterestSquare, FaYoutube, FaPhoneSquareAlt } from "react-icons/fa";

// Image
import Logo from "../../../public/image/logo.png"
import Logo2 from "../../../public/image/logo2.png"

const Navbar = () => {
    return (
        <>
            <nav>

                <div id={navbarStyle.top_bar}>
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <ul>
                                    <li className={navbarStyle.topPhone}><a href="tel:+6145845887"><FaPhoneSquareAlt /> +61 4584 5887</a></li>
                                    <li className={navbarStyle.topEmail}><a href="mailto:info@permisgoautoecole.com"><MdOutlineEmail /> info@permisgoautoecole.com</a></li>
                                </ul>
                            </div>
                            <div className="d-flex justify-content-between align-items-center gap-3">
                                <div id={navbarStyle.topbarSocial}>
                                    <ul>
                                        <li><Link href=""><FaFacebook /></Link></li>
                                        <li><Link href=""><FaInstagram /></Link></li>
                                        <li><Link href=""><FaLinkedin /></Link></li>
                                        <li><Link href=""><FaPinterestSquare /></Link></li>
                                        <li><Link href=""><FaYoutube /></Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <select name="" className='form-select' id="">
                                        <option value="">EN</option>
                                        <option value="">FR</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id={navbarStyle.main_menu}>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center gap-4">
                                <Link href="/">
                                    <Image src={Logo} className={navbarStyle.navbarLogo} layout="responsive" alt=""></Image>
                                </Link>
                            </div>

                            <div className='align-items-center'>
                                <nav className="navbar navbar-expand-lg" id={navbarStyle.navbarMenu}>
                                    <div className="container-fluid">
                                        <button className="navbar-toggler btn-outline-light" type="button" data-bs-toggle="offcanvas"
                                            data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg"
                                            aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg"
                                            aria-labelledby="navbarOffcanvasLgLabel">
                                            <div className="offcanvas-header">
                                                <Image src={Logo} alt="" layout='responsive' className={navbarStyle.mobileNavLogo}></Image>
                                                <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas"
                                                    aria-label="Close"></button>
                                            </div>
                                            <ul className="navbar-nav ms-lg-auto mx-0 mb-2 mb-lg-0">
                                                <div id={navbarStyle.courseSelector}>
                                                    <select name="" className='form-select form-select-lg' id={navbarStyle.navbarSelect}>
                                                        <option value="">-- Courses --</option>
                                                        <option value="">Beginner Course</option>
                                                        <option value="">Standard Course</option>
                                                        <option value="">Premium Course</option>
                                                    </select>
                                                </div>
                                                <li className="nav-item">
                                                    <Link className="nav-link active" aria-current="page" href="/pricing">Pricing</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/locations" className="nav-link">Locations</Link>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <Link href="/reviews" className="nav-link">Reviews</Link>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <Link href="/about-us" className="nav-link">About Us</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/contact-us" className="nav-link">Contact Us</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="d-flex justify-content-between align-items-center gap-4">
                                <Link href="/login" className='btn btn-lg' id={navbarStyle.loginBtn}>Login</Link>
                                <Link href="/booking" className='btn btn-lg' id={navbarStyle.bookBtn}>Book Your Lesson</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar