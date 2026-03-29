import React from "react";
import Image from "next/image";
import Link from "next/link";

// Style
import homeStyle from "./page.module.css";

// Image

// Icon
import { FaStar, FaRegUserCircle, FaCrown } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";

export default function Home() {
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
        
      </section>
      
      <section>

      </section>

      {/* <section>
        <div className={homeStyle.subscribe_home}>
          <div className="container">
            <h2>Subscribe to Our Newsletter</h2>
            <div className="row">
              <div className="col-lg-5">
                <p>Get weekly update about our product on your email, no spam guaranteed we promise ✌️</p>
              </div>
              <div className="col-lg-7">
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
      </section> */}
    </>
  );
}
