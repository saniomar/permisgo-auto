"use client"

import React, {useRef} from 'react'
import Link from 'next/link';
import Image from 'next/image';

// styles
import testimonialStyles from "../styles/testimonial.module.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';

// Icon
import { FaStar } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// Image
import tes1 from "../../../public/image/tes1.png"
import tes2 from "../../../public/image/tes2.png"
import tes3 from "../../../public/image/tes3.png"

const Testimonials = () => {

    const swiperRefTwo = useRef(null);

  return (
    <>
    <section>
        <div className={testimonialStyles.home_testimonials}>
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
                <div id={testimonialStyles.navigationIcon} className="d-flex gap-3">
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
                  <div className={testimonialStyles.testimonialBox}>
                    <p className={testimonialStyles.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                  <div className={testimonialStyles.testimonialBox}>
                    <p className={testimonialStyles.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                  <div className={testimonialStyles.testimonialBox}>
                    <p className={testimonialStyles.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                  <div className={testimonialStyles.testimonialBox}>
                    <p className={testimonialStyles.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                  <div className={testimonialStyles.testimonialBox}>
                    <p className={testimonialStyles.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                  <div className={testimonialStyles.testimonialBox}>
                    <p className={testimonialStyles.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                  <div className={testimonialStyles.testimonialBox}>
                    <p className={testimonialStyles.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                  <div className={testimonialStyles.testimonialBox}>
                    <p className={testimonialStyles.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                  <div className={testimonialStyles.testimonialBox}>
                    <p className={testimonialStyles.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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
                  <div className={testimonialStyles.testimonialBox}>
                    <p className={testimonialStyles.testiSay}>Thanks to the instructors, I passed my driving test on the first try. The lessons were clear and very helpful! I passed my driving test on the first try.</p>
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

export default Testimonials