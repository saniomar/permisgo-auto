import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Image
import DriveImage from "../../../public/image/car-driver.jpg"

// Icons
import { FiAward, FiUsers } from "react-icons/fi";
import { FaCarSide, FaRegClock } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaPinterestSquare, FaYoutube, FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { TbTargetArrow } from "react-icons/tb";
import { IoBookOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";


// Style
import whoAreStyle from "./styles/who-are-we.module.css"

const aboutUs = () => {
  return (
    <>
        <section>
          <div id={whoAreStyle.about_hero_section}>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-6">
                  <h1>Who <span>are we?</span></h1>
                  <h4 className='mb-4'>Permis Go is a driving school that connects candidates with state-certified driving instructors .</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quisquam voluptas doloremque pariatur voluptatibus. Distinctio sit blanditiis eius odit illo itaque, ratione, laudantium est sunt perspiciatis ullam corrupti, in sint.</p>
                  <div className="mt-4">
                    <Link href="" className='btn btn-lg'><LuPhoneCall /> | Book Your First Lesson</Link>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div>
                    <iframe width="100%" height="450" src="https://www.youtube.com/embed/PntTra6wJPE?si=o0SjX9qifWio2_fP" title="YouTube video player" className='rounded' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div id={whoAreStyle.mission_section}>
            <div className="container-fluid">
              <div id={whoAreStyle.mission_box}>
                <h3><TbTargetArrow /> Our <span>Mission</span></h3>
                <p className='mb-0'>Our goal is to offer you quality training, tailored to your pace and needs. Whether you're a beginner or looking to improve your skills, we do everything we can to help you obtain your license with confidence.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div id={whoAreStyle.expert_mentor_programme}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div id={whoAreStyle.mentor_box} className={whoAreStyle.expert_box_height}>
                    <h3><FiUsers /> Expert <span>Monitors</span></h3>
                    <p className='mb-0'>Our goal is to offer you quality training, tailored to your pace and needs. Whether you're a beginner or looking to improve your skills, we do everything we can to help you obtain your license with confidence.</p>
                    <Image src={DriveImage} layout='responsive' alt=''></Image>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div id={whoAreStyle.programme_box} className={whoAreStyle.expert_box_height}>
                    <h3><IoBookOutline /> Our <span>Programs</span></h3>
                    <h4>We offer different packages to meet all needs:</h4>
                    <div className="mt-4">
                      <ul>
                        <li><FaRegCheckCircle /> Category B driving licence (standard and accelerated)</li>
                        <li><FaRegCheckCircle /> Supervised driving (AAC)</li>
                        <li><FaRegCheckCircle /> Supervised driving</li>
                        <li><FaRegCheckCircle /> Highway Code in person and online</li>
                        <li><FaRegCheckCircle /> Advanced training courses</li>
                        <li><FaRegCheckCircle /> Supervised driving</li>
                        <li><FaRegCheckCircle /> Supervised driving (AAC)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div id={whoAreStyle.choose_section}>
            <div className="container-fluid">
              <div className="text-center">
                <h2>Why Choose <span>PermisGo?</span></h2>

                <div id={whoAreStyle.choose_box} className='py-4'>
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className={`${whoAreStyle.about_choose_box} ${whoAreStyle.about_choose_box_one}`}>
                        <div className={whoAreStyle.about_inner_box}>
                          <div className="text-center">
                            <FiAward className={whoAreStyle.chooseIcon} />
                            <h5>High success rate</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className={`${whoAreStyle.about_choose_box} ${whoAreStyle.about_choose_box_two}`}>
                      <div className={whoAreStyle.about_inner_box}>
                        <div className="text-center">
                          <FaCarSide className={whoAreStyle.chooseIcon} />
                          <h5>Modern vehicles</h5>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className={`${whoAreStyle.about_choose_box} ${whoAreStyle.about_choose_box_three}`}>
                        <div className={whoAreStyle.about_inner_box}>
                          <div className="text-center">
                            <FaRegClock className={whoAreStyle.chooseIcon} />
                            <h5>Flexible hours (6am-11pm)</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className={`${whoAreStyle.about_choose_box} ${whoAreStyle.about_choose_box_four}`}>
                        <div className={whoAreStyle.about_inner_box}>
                          <div className="text-center">
                            <FiUsers className={whoAreStyle.chooseIcon} />
                            <h5>Personalized tracking</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className={whoAreStyle.choose_para_section}>At Permis Go, we believe every student deserves quality training to drive safely. Join us and let us help you get your license under the best conditions!</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={whoAreStyle.adventure_section}>
            <div className='container-fluid'>
              <div id={whoAreStyle.adventure_inner_section}>
                <div className="text-center pb-4">
                  <h3>Ready to begin your driving adventure?</h3>
                  <hr />
                </div>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div id={whoAreStyle.advanture_contact_info}>
                        <ul>
                          <li>
                            <p className='mb-0'><GrLocation /> | 100 Rue Danielle Casanova 93300 Aubervilliers, France</p>
                          </li>
                          <li>
                            <p className='mb-0'><FaPhoneSquareAlt /> | 09 56 73 63 33</p>
                          </li>
                          <li>
                            <p className='mb-0'><MdOutlineEmail /> | permisgo.fr@gmail.com</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="text-center">
                        <Link href="" id={whoAreStyle.book_btn} className='btn btn-lg'>Book Your First Lesson</Link>
                        <div id={whoAreStyle.socialMedia}>
                          <ul>
                            <li><Link href=""><FaFacebook /></Link></li>
                            <li><Link href=""><FaInstagram /></Link></li>
                            <li><Link href=""><FaLinkedin /></Link></li>
                            <li><Link href=""><FaPinterestSquare /></Link></li>
                            <li><Link href=""><FaYoutube /></Link></li>
                          </ul>
                        </div>
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

export default aboutUs