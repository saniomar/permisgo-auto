import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Image
import firstImage from "../../../public/image/price1.webp"

// Icons
import { LuBadgeCheck } from "react-icons/lu";
import { FaTimes } from "react-icons/fa";

// Styles
import pricingStyle from "./styles/pricing.module.css"

const pricing = () => {
  return (
    <>
      <section>
        <div className={pricingStyle.first_pricing}>
          <div className='container'>
            <div className="row">
              <div className="col-lg-6">
                <div className={pricingStyle.first_pricing_section}>
                  <h1 className='mb-4'>Our prices are up to <span>30% cheaper</span> *</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatibus voluptates tempora illo. Fuga ullam aperiam ex officia aspernatur dolore, soluta ipsam minima tenetur amet temporibus, impedit recusandae repudiandae rem, quod quasi voluptates asperiores iusto! Dolorum nihil maxime corporis dignissimos.</p>
                  <div className="mt-5">
                    <Link href="" className='btn btn-lg'>To Be Accompanied by an Advisor</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-center">
                  <Image className={pricingStyle.firstImage} src={firstImage} layout='responsive' alt=''></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={pricingStyle.second_pricing_section}>
          <div className="container">
            <ul className="nav nav-tabs d-flex justify-content-evenly" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="license-tab" data-bs-toggle="tab" data-bs-target="#license-tab-pane" type="button" role="tab" aria-controls="license-tab-pane" aria-selected="true">Driving License</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="supervised-tab" data-bs-toggle="tab" data-bs-target="#supervised-tab-pane" type="button" role="tab" aria-controls="supervised-tab-pane" aria-selected="false">Supervised Driving</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">A la carte</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="code-tab" data-bs-toggle="tab" data-bs-target="#code-tab-pane" type="button" role="tab" aria-controls="code-tab-pane" aria-selected="false">Code</button>
              </li>
            </ul>
            <hr />
            <div className="tab-content" id="myTabContent">
              {/* license */}
              <div className="tab-pane fade show active" id="license-tab-pane" role="tabpanel" aria-labelledby="license-tab" tabIndex="0">

              </div>

              {/* Supervised Driving */}
              <div className="tab-pane fade" id="supervised-tab-pane" role="tabpanel" aria-labelledby="supervised-tab" tabIndex="0">
                <div className="py-3">
                  <div className="text-center">
                    <h2 className='mt-3'>Our Supervised <span>Driving</span> Package</h2>

                    <div className="py-5">
                      <ul className="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="menual-tab" data-bs-toggle="tab" data-bs-target="#menual-tab-pane" type="button" role="tab" aria-controls="menual-tab-pane" aria-selected="true">Menual</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="automatic-tab" data-bs-toggle="tab" data-bs-target="#automatic-tab-pane" type="button" role="tab" aria-controls="automatic-tab-pane" aria-selected="false">Automatic</button>
                        </li>
                      </ul>
                      <div className="tab-content mt-4" id="myTabContent">
                        <div className="tab-pane fade show active" id="menual-tab-pane" role="tabpanel" aria-labelledby="menual-tab" tabIndex="0">
                          <div className={pricingStyle.secondPricingBox}>
                            <h3>Supervised Driving</h3>
                            <p>Theory test + 20 driving lessons</p>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className={pricingStyle.secondRealPricingBox}>
                                  <h4>Valentine's Day</h4>
                                  <p>from</p>

                                  <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                      <h5>Retail Price: <span><br />$1025</span></h5>
                                    </div>
                                    <div>
                                      <h3>$655</h3>
                                    </div>
                                  </div>

                                  <p>Enter your postal code to view your agency's rates.</p>

                                  <Link href="/register" className='btn mx-auto'>Sign Up</Link>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <ul className={pricingStyle.secondPricingBoxMenualList}>
                                  <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                  <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Age: 15 years and older</li>
                                  <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                  <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                  <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Training follow-up by a coach</li>
                                  <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Learning booklet (online)</li>
                                  <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Preliminary appointment for supervised driving</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="automatic-tab-pane" role="tabpanel" aria-labelledby="automatic-tab" tabIndex="0">
                          <div className={pricingStyle.secondPricingBox}>
                            <h3>Supervised driving with automatic transmission</h3>
                            <p>Theory test + 13 driving lessons</p>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className={pricingStyle.secondRealPricingBoxAuto}>
                                  <h4>Valentine's Day</h4>
                                  <p>from</p>

                                  <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                      <h5>Retail Price: <span><br />$1025</span></h5>
                                    </div>
                                    <div>
                                      <h3>$655</h3>
                                    </div>
                                  </div>

                                  <p>Enter your postal code to view your agency's rates.</p>

                                  <Link href="/register" className='btn mx-auto'>Sign Up</Link>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <ul className={pricingStyle.secondPricingBoxAutoList}>
                                  <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                  <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Age: 15 years and older</li>
                                  <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                  <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                  <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Training follow-up by a coach</li>
                                  <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Learning booklet (online)</li>
                                  <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Preliminary appointment for supervised driving</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* A La Cart */}
              <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                <div className="mt-4 text-center">
                  <h2>Discover our <span>à la carte</span> offers</h2>
                  <p>It is possible to choose your training program à la carte.</p>
                </div>

                <div className='mt-5'>
                  <div className={pricingStyle.priceThirdBox}>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <h5 className='mb-0'>Driving lessons</h5>
                      </div>
                      <div>
                        <div className='d-flex justify-content-between align-items-center gap-5'>
                          <div>
                            <h4 className='mb-0'>$487</h4>
                          </div>
                          <div>
                            <Link href="" className='btn'>Add</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={pricingStyle.priceThirdBox}>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <h5 className='mb-0'>Automatic transmission driving course</h5>
                      </div>
                      <div>
                        <div className='d-flex justify-content-between align-items-center gap-5'>
                          <div>
                            <h4 className='mb-0'>$587</h4>
                          </div>
                          <div>
                            <Link href="" className='btn'>Add</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={pricingStyle.priceThirdBox}>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <h5 className='mb-0'>Preliminary appointment</h5>
                      </div>
                      <div>
                        <div className='d-flex justify-content-between align-items-center gap-5'>
                          <div>
                            <h4 className='mb-0'>$387</h4>
                          </div>
                          <div>
                            <Link href="" className='btn'>Add</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={pricingStyle.priceThirdBox}>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <h5 className='mb-0'>Educational meeting</h5>
                      </div>
                      <div>
                        <div className='d-flex justify-content-between align-items-center gap-5'>
                          <div>
                            <h4 className='mb-0'>$487</h4>
                          </div>
                          <div>
                            <Link href="" className='btn'>Add</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={pricingStyle.priceThirdBox}>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <h5 className='mb-0'>Support during the practical exam</h5>
                      </div>
                      <div>
                        <div className='d-flex justify-content-between align-items-center gap-5'>
                          <div>
                            <h4 className='mb-0'>$487</h4>
                          </div>
                          <div>
                            <Link href="" className='btn'>Add</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={pricingStyle.priceThirdBox}>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <h5 className='mb-0'>Support for the practical automatic test</h5>
                      </div>
                      <div>
                        <div className='d-flex justify-content-between align-items-center gap-5'>
                          <div>
                            <h4 className='mb-0'>$487</h4>
                          </div>
                          <div>
                            <Link href="" className='btn'>Add</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Code */}
              <div className="tab-pane fade" id="code-tab-pane" role="tabpanel" aria-labelledby="code-tab" tabIndex="0">
                <div className="mt-4 text-center">
                  <h2>Permisgo <span>Highway Code</span> Packs</h2>
                  <p>What is your need?</p>
                </div>

                <div className="mt-4">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className={pricingStyle.forthPriceBox}>
                        <h3>Eco Code</h3>
                        <p>Complete review</p>
                        <div className={pricingStyle.forthPriceNumberPart}>
                          <div className="text-center">
                            <h2>Free</h2>
                          </div>
                        </div>
                        <h4 className='my-4'>Package contents:</h4>
                        <div className={pricingStyle.forthPricePackage}>
                          <ul>
                            <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Duration: Unlimited</li>
                            <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Access to the code app</li>
                            <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Video lessons and online manual</li>
                            <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 5000 questions and 30 practice exams</li>
                          </ul>
                        </div>
                        <div className="mt-4">
                          <Link href="" className='btn'>Sign Up</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className={pricingStyle.forthPriceBox}>
                        <h3>Zen Code</h3>
                        <p>Complete review + Administrative procedures</p>
                        <div className={pricingStyle.forthPriceNumberPart}>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h2 className='mb-0'>€9.99</h2>
                              <p className='mb-0'>Valentine's Day</p>
                            </div>
                            <div>
                              <h5 className='mb-0'>€19.99</h5>
                              <small>retail price</small>
                            </div>
                          </div>
                        </div>
                        <h4 className='my-4'>Package contents:</h4>
                        <div className={pricingStyle.forthPricePackage}>
                          <ul>
                            <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Duration: 12-month package</li>
                            <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Access to the code app</li>
                            <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Video lessons and online manual</li>
                            <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 5000 questions and 30 practice exams</li>
                            <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Administrative procedures & Coaching</li>
                            <li><FaTimes className={pricingStyle.checkIcon} /> A place to take the theory test</li>
                          </ul>
                        </div>
                        <div className="mt-4">
                          <Link href="" className='btn'>Sign Up</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className={pricingStyle.forthPriceBox}>
                        <h3>Success Code</h3>
                        <p>Theory test slot included</p>
                        <div className={pricingStyle.forthPriceNumberPart}>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h2 className='mb-0'>€9.99</h2>
                              <p className='mb-0'>Valentine's Day</p>
                            </div>
                            <div>
                              <h5 className='mb-0'>€19.99</h5>
                              <small>retail price</small>
                            </div>
                          </div>
                        </div>
                        <h4 className='my-4'>Package contents:</h4>
                        <div className={pricingStyle.forthPricePackage}>
                          <ul>
                            <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Duration: 12-month package</li>
                            <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Access to the code app</li>
                            <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Video lessons and online manual</li>
                            <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 5000 questions and 30 practice exams</li>
                            <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Administrative procedures & Coaching</li>
                            <li><LuBadgeCheck className={pricingStyle.checkIcon} /> A place to take the theory test</li>
                          </ul>
                        </div>
                        <div className="mt-4">
                          <Link href="" className='btn'>Sign Up</Link>
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
    </>
  )
}

export default pricing