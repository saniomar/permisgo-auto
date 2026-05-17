 "use client"

import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import trafficCss from "./styles/traffic.module.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';

// Image
import trafficHero from "../../../../public/image/traffic-hero.png"
import tes1 from "../../../../public/image/tes1.png"
import tes2 from "../../../../public/image/tes2.png"
import tes3 from "../../../../public/image/tes3.png"
import broomLogo from "../../../../public/image/broomLogo.png"
import googleLogo from "../../../../public/image/googleLogo.png"
import trustLogo from "../../../../public/image/trustLogo.png"
import priceBatch from "../../../../public/image/traffic-two-price-batch.png"
import laws3 from "../../../../public/image/laws3.png"
import road from "../../../../public/image/road.png"
import map from "../../../../public/image/map.png"

// Icon
import { FaStar, FaRegUserCircle, FaCrown, FaTimesCircle } from "react-icons/fa";
import { FaRegNewspaper, FaArrowLeftLong, FaArrowRightLong, FaLocationDot, FaSquareCheck } from "react-icons/fa6";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";


const trafficLaws = () => {

  // const swiperRefOne = useRef(null);
  const swiperRefTwo = useRef(null);
  // const swiperRefThree = useRef(null);

  return (
    <>
      <section>
        <div className={trafficCss.traffic_hero}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1>Your <span>FREE</span> Highway code</h1>
                <p>Sign up for the code, and while you are practicing, start driving. It’s the winning combo for the practicing, start driving. It’s the winning rapid progress</p>
                <div className="row mt-5">
                  <div className='col-lg-6 col-md-6'>
                    <Link className="btn btn-lg" href="" id={trafficCss.herofirstBtn}>Register for FREE</Link>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <Link className="btn btn-lg" href="" id={trafficCss.herosecondBtn}>Discover all our offers</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <Image src={trafficHero} layout='responsive' alt=''></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={trafficCss.traffic_two}>
          <div className="container-fluid">
            <div className="text-center">
              <h2>Permisgo’s Highway Code Packs</h2>
              <p>What is your need?</p>
            </div>
            <div className="mt-5">
              <div className="row">
                <div className="col-lg-4 col-md-12">

                  <div className={trafficCss.traffic_two_box}>
                    <div className="text-center">
                      <h3>Eco Code</h3>
                      <p>Complete revision + Administrative procedures</p>
                    </div>
                    <div className={`my-4 ${trafficCss.traffic_two_box_price}`}>
                      <h4>FREE</h4>
                    </div>
                    <h5>Package Contents</h5>
                    <div className={trafficCss.traffic_two_price_feature_list}>
                      <ul>
                        <li><FaSquareCheck className={trafficCss.traffic_two_price_feature_list_icon} /> Duration: Unlimited</li>
                        <li><FaSquareCheck className={trafficCss.traffic_two_price_feature_list_icon} /> Access to the code app</li>
                        <li><FaSquareCheck className={trafficCss.traffic_two_price_feature_list_icon} /> Video course and online manual</li>
                        <li><FaSquareCheck className={trafficCss.traffic_two_price_feature_list_icon} /> 5000 questions and 30 practice exams</li>
                      </ul>
                    </div>
                    <div className="text-center mt-5">
                      <Link href="" className='btn btn-lg'>Sign Up</Link>
                    </div>
                  </div>

                </div>
                <div className="col-lg-4 col-md-12">

                  <div className={trafficCss.traffic_two_box}>
                    <Image src={priceBatch} layout='responsive' alt=''></Image>
                    <div className="text-center">
                      <h6>Best Value</h6>
                      <h3>Zen Code</h3>
                      <p>Complete revision + Administrative procedures</p>
                    </div>
                    <div className={`my-4 ${trafficCss.traffic_two_box_price}`}>
                      <h4>€9.99 <sub>€19.99</sub></h4>
                    </div>
                    <h5>Package Contents</h5>
                    <div className={trafficCss.traffic_two_price_feature_list}>
                      <ul>
                        <li><FaSquareCheck className={trafficCss.traffic_two_price_feature_list_icon} /> Duration: 12 month package</li>
                        <li><FaSquareCheck className={trafficCss.traffic_two_price_feature_list_icon} /> Access to the code app</li>
                        <li><FaSquareCheck className={trafficCss.traffic_two_price_feature_list_icon} /> Video course and online manual</li>
                        <li><FaSquareCheck className={trafficCss.traffic_two_price_feature_list_icon} /> 5000 questions and 30 practice exams</li>
                        <li><FaTimesCircle className={`${trafficCss.traffic_two_price_feature_list_icon} ${trafficCss.traffic_two_price_feature_list_unable_icon}`} /> Administrative procedures & Coaching</li>
                      </ul>
                    </div>
                    <div className="text-center mt-5">
                      <Link href="" className='btn btn-lg'>Sign Up</Link>
                    </div>
                  </div>

                </div>  
                <div className="col-lg-4 col-md-12">

                  <div className={trafficCss.traffic_two_box}>
                    <Image src={priceBatch} layout='responsive' alt=''></Image>
                    <div className="text-center">
                      <h3>Success Code</h3>
                      <p>Complete revision + Administrative procedures</p>
                    </div>
                    <div className={`my-4 ${trafficCss.traffic_two_box_price}`}>
                      <h4>€33.99 <sub>€43.99</sub></h4>
                    </div>
                    <h5>Package Contents</h5>
                    <div className={trafficCss.traffic_two_price_feature_list}>
                      <ul>
                        <li><FaSquareCheck className={trafficCss.traffic_two_price_feature_list_icon} /> Duration: Unlimited</li>
                        <li><FaSquareCheck className={trafficCss.traffic_two_price_feature_list_icon} /> Access to the code app</li>
                        <li><FaSquareCheck className={trafficCss.traffic_two_price_feature_list_icon} /> Video course and online manual</li>
                        <li><FaSquareCheck className={trafficCss.traffic_two_price_feature_list_icon} /> 5000 questions and 30 practice exams</li>
                        <li><FaSquareCheck className={trafficCss.traffic_two_price_feature_list_icon} /> A place for a highway code exam </li>
                      </ul>
                    </div>
                    <div className="text-center mt-5">
                      <Link href="" className='btn btn-lg'>Sign Up</Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={trafficCss.laws_three_section}>
          <div className="container-fluid">
            <div className={trafficCss.laws_three_inner_section}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h3>écoles de conduite labellisées</h3>
                    <p>Des centres de formation agréés, respectant des standards de qualité élevés.</p>
                  </div>
                  <div className="col-lg-4">
                    <Image src={laws3} layout='responsive' alt=''></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={trafficCss.traffic_it_work}>
          <div className="text-center mb-5">
            <h3>How It Works</h3>
            <p>Driving licence learning transformed by permisgo</p>
          </div>
          <Image src={road} layout='responsive' alt=''></Image>
          <div className="container-fluid">
            <div className={trafficCss.traffic_work_feature}>
              <div className="row">
                <div className="col-lg-3">
                    <div className={trafficCss.traffic_work_feature_icon}>
                      <div className="text-center">
                        <div className={trafficCss.traffic_work_feature_icon_number}>
                          <h5 className='mb-0'>01</h5>
                        </div>
                        <Image src={map} layout='responsive' alt=''></Image>
                      </div>
                    </div>
                  <div className={trafficCss.feature_box}>
                    <div className="text-center">
                      <h4>Traffic Laws</h4>
                      <p>Suitable for all profiles, our E-learning application accompanies you at every step towards success in coding.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className={trafficCss.traffic_work_feature_icon}>
                      <div className="text-center">
                        <div className={trafficCss.traffic_work_feature_icon_number}>
                          <h5 className='mb-0'>02</h5>
                        </div>
                        <Image src={map} layout='responsive' alt=''></Image>
                      </div>
                    </div>
                  <div className={trafficCss.feature_box}>
                    <div className="text-center">
                        <h4>Driving Lessons</h4>
                        <p>Book online and take advantage of a dedicated e-learning program on our app to optimize every driving lesson</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className={trafficCss.traffic_work_feature_icon}>
                      <div className="text-center">
                        <div className={trafficCss.traffic_work_feature_icon_number}>
                          <h5 className='mb-0'>03</h5>
                        </div>
                        <Image src={map} layout='responsive' alt=''></Image>
                      </div>
                    </div>
                  <div className={trafficCss.feature_box}>
                    <div className="text-center">
                        <h4>Personalized follow-up</h4>
                        <p>Book online and take advantage of a dedicated e-learning program on our app to optimize every driving lesson</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className={trafficCss.traffic_work_feature_icon}>
                      <div className="text-center">
                        <div className={trafficCss.traffic_work_feature_icon_number}>
                          <h5 className='mb-0'>04</h5>
                        </div>
                        <Image src={map} layout='responsive' alt=''></Image>
                      </div>
                    </div>
                  <div className={trafficCss.feature_box}>
                    <div className="text-center">
                        <h4>Procedures and review</h4>
                        <p>Suitable for all profiles, our E-learning application accompanies you at every step towards success in coding.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={trafficCss.traffic_three}>
          <div className="container-fluid">
            <div className="text-center" id={trafficCss.traffic_three_inner}>
              <h2>And After your code?</h2>
              <p>Discover Our Lisence Offers Starting at $500</p>
              <div className="mt-4">
                <Link href="" className='btn btn-lg'>Discover All Our Offers</Link>
              </div>
              <div className="container mt-5">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className={trafficCss.three_box}>
                      <FaLocationDot className={trafficCss.three_box_icon} />
                      <h4>71 Approved Agencies</h4>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className={trafficCss.three_box}>
                      <FaStar className={trafficCss.three_box_icon} />
                      <h4>100% of our students are satisfied</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={trafficCss.reviewLogo}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className={trafficCss.review_logo_box}>
                  <div className="text-center">
                    <Image src={broomLogo} layout="responsive" alt=""></Image>
                    <h4>VroomVroom</h4>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                    </ul>
                    <p className="mb-0">04 out of 05</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={trafficCss.review_logo_box}>
                  <div className="text-center">
                    <Image src={googleLogo} layout="responsive" alt=""></Image>
                    <h4>Google Ratings</h4>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                    </ul>
                    <p className="mb-0">04 out of 05</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={trafficCss.review_logo_box}>
                  <div className="text-center">
                    <Image src={trustLogo} layout="responsive" alt=""></Image>
                    <h4>Trustpilot Ratings</h4>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                    </ul>
                    <p className="mb-0">04 out of 05</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={trafficCss.home_testimonials}>
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="text-start pb-4">
                  <h5>Testimonials</h5>
                  <h2>What Our Students Say</h2>
                </div>
              </div>
              <div>
                {/* Outside Navigation */}
                <div id={trafficCss.navigationIcon} className="d-flex gap-3">
                  <button className="btn" onClick={() => swiperRefTwo.current?.slideNext()}>
                    <FaArrowLeftLong />
                  </button>
                  <button className="btn" onClick={() => swiperRefTwo.current?.slidePrev()}>
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1440: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  }
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                freeMode={true}
                loop={true}
                modules={[FreeMode, Autoplay, Navigation]}
                onSwiper={(swiper) => (swiperRefTwo.current = swiper)}
                className="testimonialSwiper"
              >
                <SwiperSlide>
                  <div className={trafficCss.testimonialBox}>
                    <p className={trafficCss.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                    </ul>
                    <div className="d-flex justify-content-start align-items-center gap-3 mt-3">
                      <div>
                        <Image src={tes1} layout="responsive" alt=""></Image>
                      </div>
                      <div>
                        <h4 className="mb-0">Esther Howard</h4>
                        <p className="mb-0">Web Designer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={trafficCss.testimonialBox}>
                    <p className={trafficCss.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                    </ul>
                    <div className="d-flex justify-content-start align-items-center gap-3 mt-3">
                      <div>
                        <Image src={tes2} layout="responsive" alt=""></Image>
                      </div>
                      <div>
                        <h4 className="mb-0">Esther Howard</h4>
                        <p className="mb-0">Web Designer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={trafficCss.testimonialBox}>
                    <p className={trafficCss.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                    </ul>
                    <div className="d-flex justify-content-start align-items-center gap-3 mt-3">
                      <div>
                        <Image src={tes3} layout="responsive" alt=""></Image>
                      </div>
                      <div>
                        <h4 className="mb-0">Esther Howard</h4>
                        <p className="mb-0">Web Designer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={trafficCss.testimonialBox}>
                    <p className={trafficCss.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                    </ul>
                    <div className="d-flex justify-content-start align-items-center gap-3 mt-3">
                      <div>
                        <Image src={tes1} layout="responsive" alt=""></Image>
                      </div>
                      <div>
                        <h4 className="mb-0">Esther Howard</h4>
                        <p className="mb-0">Web Designer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={trafficCss.testimonialBox}>
                    <p className={trafficCss.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                    </ul>
                    <div className="d-flex justify-content-start align-items-center gap-3 mt-3">
                      <div>
                        <Image src={tes2} layout="responsive" alt=""></Image>
                      </div>
                      <div>
                        <h4 className="mb-0">Esther Howard</h4>
                        <p className="mb-0">Web Designer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={trafficCss.testimonialBox}>
                    <p className={trafficCss.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                    </ul>
                    <div className="d-flex justify-content-start align-items-center gap-3 mt-3">
                      <div>
                        <Image src={tes3} layout="responsive" alt=""></Image>
                      </div>
                      <div>
                        <h4 className="mb-0">Esther Howard</h4>
                        <p className="mb-0">Web Designer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={trafficCss.testimonialBox}>
                    <p className={trafficCss.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                    </ul>
                    <div className="d-flex justify-content-start align-items-center gap-3 mt-3">
                      <div>
                        <Image src={tes1} layout="responsive" alt=""></Image>
                      </div>
                      <div>
                        <h4 className="mb-0">Esther Howard</h4>
                        <p className="mb-0">Web Designer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={trafficCss.testimonialBox}>
                    <p className={trafficCss.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                    </ul>
                    <div className="d-flex justify-content-start align-items-center gap-3 mt-3">
                      <div>
                        <Image src={tes2} layout="responsive" alt=""></Image>
                      </div>
                      <div>
                        <h4 className="mb-0">Esther Howard</h4>
                        <p className="mb-0">Web Designer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={trafficCss.testimonialBox}>
                    <p className={trafficCss.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                    </ul>
                    <div className="d-flex justify-content-start align-items-center gap-3 mt-3">
                      <div>
                        <Image src={tes3} layout="responsive" alt=""></Image>
                      </div>
                      <div>
                        <h4 className="mb-0">Esther Howard</h4>
                        <p className="mb-0">Web Designer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={trafficCss.testimonialBox}>
                    <p className={trafficCss.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                    </ul>
                    <div className="d-flex justify-content-start align-items-center gap-3 mt-3">
                      <div>
                        <Image src={tes1} layout="responsive" alt=""></Image>
                      </div>
                      <div>
                        <h4 className="mb-0">Esther Howard</h4>
                        <p className="mb-0">Web Designer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="text-start mt-4">
                <Link href="" className="btn btn-lg">View All</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default trafficLaws