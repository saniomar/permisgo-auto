import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Styles
import contactStyle from "./styles/contact.module.css"

// Icons
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaPinterestSquare, FaYoutube, FaPhoneSquareAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <>
        <div className={contactStyle.contact_page}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="text-center">
                            <h1>Contact Our Team</h1>
                            <p>Got any questions about the product or scaling on our platform? We're here to help. Chat to our friendly team 24sqrt(7) and get onboard in less than 5 minutes.</p>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>

                <div className="mt-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div id={contactStyle.formBox}>
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-6 mt-3">
                                            <label htmlFor="">First Name</label>
                                            <input type="text" placeholder='First Name' className='form-control form-control-lg' name='' required />
                                        </div>
                                        <div className="col-lg-6 mt-3">
                                            <label htmlFor="">Last Name</label>
                                            <input type="text" placeholder='Last Name' className='form-control form-control-lg' name='' required />
                                        </div>
                                        <div className="col-lg-6 mt-3">
                                            <label htmlFor="">Phone Number</label>
                                            <input type="tel" placeholder='Phone' className='form-control form-control-lg' name='' required />
                                        </div>
                                        <div className="col-lg-6 mt-3">
                                            <label htmlFor="">Email</label>
                                            <input type="email" placeholder='Email' className='form-control form-control-lg' name='' required />
                                        </div>
                                        <div className="col-lg-12 mt-3">
                                            <label htmlFor="">Subject</label>
                                            <input type="text" placeholder='Subject' className='form-control form-control-lg' name='' />
                                        </div>
                                        <div className="col-lg-12 mt-3">
                                            <label htmlFor="">Message</label>
                                            <textarea name="" rows={5} className='form-control form-control-lg' placeholder='Write Message here . . .' id=""></textarea>
                                        </div>

                                        <div className="col-lg-12 mt-5">
                                            <button className='btn btn-lg'>Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6" id={contactStyle.contactRight}>
                            <h4>Contact</h4>
                            <p>Speak to our friendly team via live chat.</p>
                            <div className={contactStyle.contact_info}>
                                <ul>
                                    <li><FaPhoneSquareAlt /> | +948 1458 5584</li>    
                                    <li><FaWhatsapp /> | +948 1458 5584</li>
                                    <li><MdOutlineEmail /> | info@permisgoautoecole.com</li>
                                </ul>
                            </div>

                            <hr />

                            <h4>Visit Us</h4>
                            <p>Speak to our friendly team via live chat.</p>
                            <p className={contactStyle.location}><GrLocation /> | 100 Smith Street, Collingwood VIC 3066</p>

                            <hr />

                            <h4>Social Media</h4>
                            <p>Speak to our friendly team via live chat.</p>
                            <div className={contactStyle.contact_social}>
                                <ul>
                                    <li><Link href=""><FaFacebook /></Link></li>
                                    <li><Link href=""><FaInstagram /></Link></li>
                                    <li><Link href=""><FaLinkedin /></Link></li>
                                    <li><Link href=""><FaPinterestSquare /></Link></li>
                                    <li><Link href=""><FaYoutube /></Link></li>
                                    <li><Link href=""></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
                <div className={contactStyle.map_section}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8828.30495950775!2d2.2811378894284364!3d48.864488194411784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ffbef6382f9%3A0x7449a3de106d1a2!2s2%20Av.%20Georges%20Mandel%2C%2075016%20Paris%2C%20France!5e0!3m2!1sen!2sbd!4v1771927684953!5m2!1sen!2sbd" width="100%" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
        </div>
    </>
  )
}

export default Contact