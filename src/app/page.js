"use client"

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';

// Style
import homeStyle from "./page.module.css";

// Image
import broomLogo from "../../public/image/broomLogo.png"
import googleLogo from "../../public/image/googleLogo.png"
import trustLogo from "../../public/image/trustLogo.png"
import blogImg from "../../public/image/blog.jpg"
import homePay from "../../public/image/home-pay.jpg"
import payment1 from "../../public/image/visa.png"
import payment2 from "../../public/image/master.png"
import payment3 from "../../public/image/maestro.png"
import payment4 from "../../public/image/googlepay.png"
import payment5 from "../../public/image/applepay.png"
import payment6 from "../../public/image/paypal.png"
import payment7 from "../../public/image/payoneer.png"
import payment8 from "../../public/image/skrill.png"
import payment9 from "../../public/image/stripe.png"
import payment10 from "../../public/image/discover.png"
import tes1 from "../../public/image/tes1.png"
import tes2 from "../../public/image/tes2.png"
import tes3 from "../../public/image/tes3.png"
import instruc1 from "../../public/image/instrac1.png"
import instruc2 from "../../public/image/instrac2.png"
import instruc3 from "../../public/image/instrac3.png"
import instruc4 from "../../public/image/instrac4.png"

// Icon
import { FaStar, FaRegUserCircle, FaCrown } from "react-icons/fa";
import { FaRegNewspaper, FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";

export default function Home() {

  const swiperRefOne = useRef(null);
  const swiperRefTwo = useRef(null);
  const swiperRefThree = useRef(null);

  return (
    <>

      <section>
        <div className={homeStyle.about_second_section}>
          <div className="row">
            <div className="col-lg-5"></div>
            <div className="col-lg-7">
              <h5>Professional Training</h5>
              <h2 className="py-3">Discover the smart way to learn driving</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum dicta culpa deleniti quaerat id aspernatur exercitationem, magnam labore quidem modi nesciunt, maiores mollitia. Labore eos magni iste dolores! Tempore dolores delectus esse deserunt rerum recusandae numquam adipisci cumque hic accusamus Labore eos magni iste dolores! Tempore dolores delectus esse deserunt.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ex nobis odio earum quam id dolor perspiciatis quibusdam officia voluptatibus. Labore eos magni iste dolores! Tempore dolores delectus esse deserunt</p>
              <Link href="" className="btn btn-lg">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={homeStyle.home_trust_section}>
          <div className="container-fluid">
            <div className={homeStyle.trust_main_section}>
              <div className="text-center">
                <h2>Trust Indicators</h2>
              </div>
              <div className="row mt-4">
                <div className="col-lg-3 col-md-6 mt-3">
                  <div className="text-center" id={homeStyle.trust_box}>
                    <h4>Positive Rating</h4>
                    <div className={homeStyle.trustCount}>
                      <h3><span>5.0</span> <FaStar className={homeStyle.trust_star} /></h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-3">
                  <div className="text-center" id={homeStyle.trust_box}>
                    <h4>Student Trained</h4>
                    <div className={homeStyle.trustCount}>
                      <h3><span>2000</span> +</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-3">
                  <div className="text-center" id={homeStyle.trust_box}>
                    <h4>Pass Rate</h4>
                    <div className={homeStyle.trustCount}>
                      <h3><span>95</span> %</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-3">
                  <div className="text-center" id={homeStyle.trust_box}>
                    <h4>Instructor</h4>
                    <div className={homeStyle.trustCount}>
                      <h3><span>Fully Certified</span></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={homeStyle.courses_section}>
          <div className="container-fluid">
            <div className="text-center pb-4">
              <h5>Courses</h5>
              <h2>Our Popular Driving Courses</h2>
            </div>
            <div className={homeStyle.courses_div}>
              <div className="row">
                <div className="col-lg-3 col-md-6 mt-3">
                  <div className={homeStyle.courses_box}>
                    <div className={homeStyle.course_price}>
                      <FaRegUserCircle className={homeStyle.course_priceIcon} />
                      <h4 className="mt-3">Beginner Driving Course</h4>

                      <h2>200 USD</h2>
                    </div>
                    <div className={homeStyle.course_details}>
                      <h4 className="mb-0">Course Duration: 20 Hours</h4>
                      <Link href="" className="btn btn-lg">Buy Course</Link>
                      <div className={homeStyle.course_details_list}>
                        <ul className="mt-4">
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-3">
                  <div className={homeStyle.courses_box}>
                    <div className={homeStyle.course_price}>
                      <h6 className={homeStyle.course_deal}>Popular Deal</h6>
                      <FaCrown className={homeStyle.course_priceIcon} />
                      <h4 className="mt-3">Advanced Driving Course</h4>

                      <h2>200 USD</h2>
                    </div>
                    <div className={homeStyle.course_details}>
                      <h4 className="mb-0">Course Duration: 20 Hours</h4>
                      <Link href="" className="btn btn-lg">Buy Course</Link>
                      <div className={homeStyle.course_details_list}>
                        <ul className="mt-4">
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-3">
                  <div className={homeStyle.courses_box}>
                    <div className={homeStyle.course_price}>
                      <FaRegNewspaper className={homeStyle.course_priceIcon} />
                      <h4 className="mt-3">Exam Preparation</h4>

                      <h2>200 USD</h2>
                    </div>
                    <div className={homeStyle.course_details}>
                      <h4 className="mb-0">Course Duration: 20 Hours</h4>
                      <Link href="" className="btn btn-lg">Buy Course</Link>
                      <div className={homeStyle.course_details_list}>
                        <ul className="mt-4">
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-3">
                  <div className={homeStyle.courses_box}>
                    <div className={homeStyle.course_price}>
                      <HiMiniArrowPathRoundedSquare className={homeStyle.course_priceIcon} />
                      <h4 className="mt-3">Refresher Lesson</h4>

                      <h2>200 USD</h2>
                    </div>
                    <div className={homeStyle.course_details}>
                      <h4 className="mb-0">Course Duration: 20 Hours</h4>
                      <Link href="" className="btn btn-lg">Buy Course</Link>
                      <div className={homeStyle.course_details_list}>
                        <ul className="mt-4">
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                          <li><TbSquareRoundedArrowRightFilled className={homeStyle.listIcon} />  Lorem ipsum dolor sit amet.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <Link href="" className="btn btn-lg" id={homeStyle.course_learn_more_btn}>Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={homeStyle.our_instructor}>
          <div className="text-center pb-4">
            <h5>Instructors</h5>
            <h2>You'll love our instructors</h2>
          </div>

          <div className="mt-3">
            <Swiper
              slidesPerView="auto"
              spaceBetween={20}
              breakpoints={{
                300: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 6,
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
              onSwiper={(swiper) => (swiperRefOne.current = swiper)}
              className="instructorSwiper"
            >
              <SwiperSlide>
                <div className={homeStyle.instructorBox}>
                  <div className="text-center">
                    <Image src={instruc1} layout="responsive" alt=""></Image>
                    <h4>Robert Fox</h4>
                    <div className={homeStyle.instructor_inner_box}>
                      <p className="mb-0">Experience <span>05 Years+</span></p>
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.bookBtn}>Book Now</Link>
                      </div>
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.messageBtn}>Message</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={homeStyle.instructorBox}>
                  <div className="text-center">
                    <Image src={instruc2} layout="responsive" alt=""></Image>
                    <h4>Robert Fox</h4>
                    <div className={homeStyle.instructor_inner_box}>
                      <p className="mb-0">Experience <span>05 Years+</span></p>
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.bookBtn}>Book Now</Link>
                      </div>
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.messageBtn}>Message</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={homeStyle.instructorBox}>
                  <div className="text-center">
                    <Image src={instruc3} layout="responsive" alt=""></Image>
                    <h4>Robert Fox</h4>
                    <div className={homeStyle.instructor_inner_box}>
                      <p className="mb-0">Experience <span>05 Years+</span></p>
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.bookBtn}>Book Now</Link>
                      </div>
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.messageBtn}>Message</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={homeStyle.instructorBox}>
                  <div className="text-center">
                    <Image src={instruc4} layout="responsive" alt=""></Image>
                    <h4>Robert Fox</h4>
                    <div className={homeStyle.instructor_inner_box}>
                      <p className="mb-0">Experience <span>05 Years+</span></p>
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.bookBtn}>Book Now</Link>
                      </div>
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.messageBtn}>Message</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={homeStyle.instructorBox}>
                  <div className="text-center">
                    <Image src={instruc2} layout="responsive" alt=""></Image>
                    <h4>Robert Fox</h4>
                    <div className={homeStyle.instructor_inner_box}>
                      <p className="mb-0">Experience <span>05 Years+</span></p>
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.bookBtn}>Book Now</Link>
                      </div>
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.messageBtn}>Message</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={homeStyle.instructorBox}>
                  <div className="text-center">
                    <Image src={instruc3} layout="responsive" alt=""></Image>
                    <h4>Robert Fox</h4>
                    <div className={homeStyle.instructor_inner_box}>
                      <p className="mb-0">Experience <span>05 Years+</span></p>
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.bookBtn}>Book Now</Link>
                      </div>
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.messageBtn}>Message</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={homeStyle.instructorBox}>
                  <div className="text-center">
                    <Image src={instruc1} layout="responsive" alt=""></Image>
                    <h4>Robert Fox</h4>
                    <div className={homeStyle.instructor_inner_box}>
                      <p className="mb-0">Experience <span>05 Years+</span></p>
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.bookBtn}>Book Now</Link>
                      </div>
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.messageBtn}>Message</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={homeStyle.instructorBox}>
                  <div className="text-center">
                    <Image src={instruc2} layout="responsive" alt=""></Image>
                    <h4>Robert Fox</h4>
                    <div className={homeStyle.instructor_inner_box}>
                      <p className="mb-0">Experience <span>05 Years+</span></p>
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.bookBtn}>Book Now</Link>
                      </div>
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.messageBtn}>Message</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={homeStyle.instructorBox}>
                  <div className="text-center">
                    <Image src={instruc3} layout="responsive" alt=""></Image>
                    <h4>Robert Fox</h4>
                    <div className={homeStyle.instructor_inner_box}>
                      <p className="mb-0">Experience <span>05 Years+</span></p>
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.bookBtn}>Book Now</Link>
                      </div>
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.messageBtn}>Message</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={homeStyle.instructorBox}>
                  <div className="text-center">
                    <Image src={instruc1} layout="responsive" alt=""></Image>
                    <h4>Robert Fox</h4>
                    <div className={homeStyle.instructor_inner_box}>
                      <p className="mb-0">Experience <span>05 Years+</span></p>
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.bookBtn}>Book Now</Link>
                      </div>
                      <div className={homeStyle.instructor_both_btn}>
                        <Link href="" className="btn" id={homeStyle.messageBtn}>Message</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Outside Navigation */}
            <div id={homeStyle.instructorNavigationIcon} className="d-flex justify-content-center gap-3">
              <button className="btn" onClick={() => swiperRefOne.current?.slideNext()}>
                <FaArrowLeftLong />
              </button>
              <button className="btn" onClick={() => swiperRefOne.current?.slidePrev()}>
                <FaArrowRightLong />
              </button>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className={homeStyle.reviewLogo}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className={homeStyle.review_logo_box}>
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
                <div className={homeStyle.review_logo_box}>
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
                <div className={homeStyle.review_logo_box}>
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
        <div className={homeStyle.home_testimonials}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="text-start pb-4">
                <h5>Testimonials</h5>
                <h2>What Our Students Say</h2>
              </div>
            </div>
            <div>
              {/* Outside Navigation */}
              <div id={homeStyle.navigationIcon} className="d-flex gap-3">
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
                <div className={homeStyle.testimonialBox}>
                  <p className={homeStyle.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                <div className={homeStyle.testimonialBox}>
                  <p className={homeStyle.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                <div className={homeStyle.testimonialBox}>
                  <p className={homeStyle.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                <div className={homeStyle.testimonialBox}>
                  <p className={homeStyle.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                <div className={homeStyle.testimonialBox}>
                  <p className={homeStyle.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                <div className={homeStyle.testimonialBox}>
                  <p className={homeStyle.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                <div className={homeStyle.testimonialBox}>
                  <p className={homeStyle.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                <div className={homeStyle.testimonialBox}>
                  <p className={homeStyle.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                <div className={homeStyle.testimonialBox}>
                  <p className={homeStyle.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                <div className={homeStyle.testimonialBox}>
                  <p className={homeStyle.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
      </section>

      <section>
        <div className={homeStyle.home_instructor_bg}>
          <div>
            <div className="text-center">
              <h3>Are you a driving instructor? And super friendly?</h3>
              <p>Become a freelance driving instructor.</p>
              <div className="mt-4">
                <Link href="" className="btn btn-lg">Join us a driving instructor</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={homeStyle.home_faq}>
          <div className="container-fluid">
            <div className="text-center pb-4">
              <h5>FAQ</h5>
              <h2>Frequently Asked Question</h2>
            </div>
            <div className="row">

              <div className="col-lg-5">
                <h3>Got a question about lessons, courses, or documents?</h3>
                <p>Fill out the form below and we’ll respond as soon as possible.</p>
                <div className={homeStyle.homeFaqForm}>
                  <div className="mt-3">
                    <h4>Get in touch</h4>
                    <p>Fill out this form with necessary information</p>
                    <form action="">
                      <div className="row">
                        <div className="col-lg-6 mt-3">
                          <label htmlFor="first-name">First Name</label>
                          <input type="text" id="first-name" className="form-control form-control-lg" placeholder="Write name here" />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label htmlFor="last-name">Last Name</label>
                          <input type="text" id="last-name" className="form-control form-control-lg" placeholder="Write name here" />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label htmlFor="email">Email</label>
                          <input type="email" id="email" className="form-control form-control-lg" placeholder="Write email address" />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label htmlFor="phone-number">Phone Number</label>
                          <input type="tel" id="phone-number" className="form-control form-control-lg" placeholder="Write phone number" />
                        </div>
                        <div className="col-lg-12 mt-3">
                          <label htmlFor="question">Ask your questions</label>
                          <textarea name="" rows={6} id="question" className="form-control form-control-lg" placeholder="Write question here"></textarea>
                        </div>

                        <div className="col-lg-12 mt-4">
                          <button className="btn btn-lg">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className={homeStyle.home_faq_second} id="home_faq_second">
                  <div className="container">
                    <div className="row">
                      <div>
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h3 className="accordion-header" id="headingFaqOne">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqOne" aria-expanded="true" aria-controls="collapseFaqOne">
                                Accordion Item #1
                              </button>
                            </h3>
                            <div id="collapseFaqOne" className="accordion-collapse collapse show" aria-labelledby="headingFaqOne" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3 className="accordion-header" id="headingFaqTwo">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqTwo" aria-expanded="false" aria-controls="collapseFaqTwo">
                                Accordion Item #2
                              </button>
                            </h3>
                            <div id="collapseFaqTwo" className="accordion-collapse collapse" aria-labelledby="headingFaqTwo" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3 className="accordion-header" id="headingFaqThree">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqThree" aria-expanded="false" aria-controls="collapseFaqThree">
                                Accordion Item #3
                              </button>
                            </h3>
                            <div id="collapseFaqThree" className="accordion-collapse collapse" aria-labelledby="headingFaqThree" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3 className="accordion-header" id="headingFaqFour">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqFour" aria-expanded="false" aria-controls="collapseFaqFour">
                                Accordion Item #4
                              </button>
                            </h3>
                            <div id="collapseFaqFour" className="accordion-collapse collapse" aria-labelledby="headingFaqFour" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3 className="accordion-header" id="headingFaqFive">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqFive" aria-expanded="false" aria-controls="collapseFaqFive">
                                Accordion Item #5
                              </button>
                            </h3>
                            <div id="collapseFaqFive" className="accordion-collapse collapse" aria-labelledby="headingFaqFive" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3 className="accordion-header" id="headingFaqSix">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqSix" aria-expanded="false" aria-controls="collapseFaqSix">
                                Accordion Item #6
                              </button>
                            </h3>
                            <div id="collapseFaqSix" className="accordion-collapse collapse" aria-labelledby="headingFaqSix" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3 className="accordion-header" id="headingFaqSeven">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqSeven" aria-expanded="false" aria-controls="collapseFaqSeven">
                                Accordion Item #7
                              </button>
                            </h3>
                            <div id="collapseFaqSeven" className="accordion-collapse collapse" aria-labelledby="headingFaqSeven" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3 className="accordion-header" id="headingFaqEight">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqEight" aria-expanded="false" aria-controls="collapseFaqEight">
                                Accordion Item #8
                              </button>
                            </h3>
                            <div id="collapseFaqEight" className="accordion-collapse collapse" aria-labelledby="headingFaqEight" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3 className="accordion-header" id="headingFaqNine">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqNine" aria-expanded="false" aria-controls="collapseFaqNine">
                                Accordion Item #9
                              </button>
                            </h3>
                            <div id="collapseFaqNine" className="accordion-collapse collapse" aria-labelledby="headingFaqNine" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={homeStyle.home_payment}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="text-start pb-4">
                  <h5>Payment System</h5>
                  <h2>Secure & Flexible Payment System</h2>

                  <div className="mt-5">
                    <Swiper
                      slidesPerView="auto"
                      spaceBetween={20}
                      breakpoints={{
                        300: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        640: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 5,
                          spaceBetween: 20,
                        },
                        1440: {
                          slidesPerView: 6,
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
                      onSwiper={(swiper) => (swiperRefThree.current = swiper)}
                      className="paymentSwiper"
                    >
                      <SwiperSlide>
                        <Image src={payment1} alt=""></Image>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={payment2} alt=""></Image>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={payment3} alt=""></Image>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={payment4} alt=""></Image>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={payment5} alt=""></Image>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={payment6} alt=""></Image>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={payment7} alt=""></Image>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={payment8} alt=""></Image>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={payment9} alt=""></Image>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image src={payment10} alt=""></Image>
                      </SwiperSlide>
                    </Swiper>

                    {/* Outside Navigation */}
                    <div id={homeStyle.navigationIcon} className="d-flex gap-3">
                      <button className="btn" onClick={() => swiperRefThree.current?.slideNext()}>
                        <FaArrowLeftLong />
                      </button>
                      <button className="btn" onClick={() => swiperRefThree.current?.slidePrev()}>
                        <FaArrowRightLong />
                      </button>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <Image src={homePay} layout="responsive" alt="" id={homeStyle.paymentRightImage}></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={homeStyle.home_blog_section}>
          <div className="container-fluid">
            <div className="text-center pb-4">
              <h5>Blog</h5>
              <h2>News and Insights</h2>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className={homeStyle.homeBlogBox}>
                  <Image src={blogImg} layout="responsive" alt=""></Image>
                  <h4><Link href="">10 Tips to Pass Your Driving Test on the First Try</Link></h4>
                  <p>Nervous about your road test? Discover practical tips, common...</p>
                  <Link href="" className="btn" id={homeStyle.blogReadMoreBtn}>Read More</Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={homeStyle.homeBlogBox}>
                  <Image src={blogImg} layout="responsive" alt=""></Image>
                  <h4><Link href="">10 Tips to Pass Your Driving Test on the First Try</Link></h4>
                  <p>Nervous about your road test? Discover practical tips, common...</p>
                  <Link href="" className="btn" id={homeStyle.blogReadMoreBtn}>Read More</Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={homeStyle.homeBlogBox}>
                  <Image src={blogImg} layout="responsive" alt=""></Image>
                  <h4><Link href="">10 Tips to Pass Your Driving Test on the First Try</Link></h4>
                  <p>Nervous about your road test? Discover practical tips, common...</p>
                  <Link href="" className="btn" id={homeStyle.blogReadMoreBtn}>Read More</Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={homeStyle.homeBlogBox}>
                  <Image src={blogImg} layout="responsive" alt=""></Image>
                  <h4><Link href="">10 Tips to Pass Your Driving Test on the First Try</Link></h4>
                  <p>Nervous about your road test? Discover practical tips, common...</p>
                  <Link href="" className="btn" id={homeStyle.blogReadMoreBtn}>Read More</Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <Link href="/blog" className="btn btn-lg" id={homeStyle.course_learn_more_btn}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
