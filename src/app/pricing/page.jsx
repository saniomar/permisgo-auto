import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Image
import firstImage from "../../../public/image/price1.webp"

// Icons
import { LuBadgeCheck } from "react-icons/lu";

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
                <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Code</button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="license-tab-pane" role="tabpanel" aria-labelledby="license-tab" tabIndex="0">

              </div>
              <div className="tab-pane fade" id="supervised-tab-pane" role="tabpanel" aria-labelledby="supervised-tab" tabIndex="0">
                <div className="py-3">
                  <div className="text-center">
                    <h2>Our Supervised <span>Driving</span> Package</h2>

                    <div className="py-5">
                      <ul className="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="menual-tab" data-bs-toggle="tab" data-bs-target="#menual-tab-pane" type="button" role="tab" aria-controls="menual-tab-pane" aria-selected="true">Menual</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="automatic-tab" data-bs-toggle="tab" data-bs-target="#automatic-tab-pane" type="button" role="tab" aria-controls="automatic-tab-pane" aria-selected="false">Automatic</button>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
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
                                  <li><LuBadgeCheck /> 20 driving lessons</li>
                                  <li><LuBadgeCheck /> Age: 15 years and older</li>
                                  <li><LuBadgeCheck /> Initial assessment</li>
                                  <li><LuBadgeCheck /> Code Training</li>
                                  <li><LuBadgeCheck /> Training follow-up by a coach</li>
                                  <li><LuBadgeCheck /> Learning booklet (online)</li>
                                  <li><LuBadgeCheck /> Preliminary appointment for supervised driving</li>
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
                                  <li><LuBadgeCheck /> 20 driving lessons</li>
                                  <li><LuBadgeCheck /> Age: 15 years and older</li>
                                  <li><LuBadgeCheck /> Initial assessment</li>
                                  <li><LuBadgeCheck /> Code Training</li>
                                  <li><LuBadgeCheck /> Training follow-up by a coach</li>
                                  <li><LuBadgeCheck /> Learning booklet (online)</li>
                                  <li><LuBadgeCheck /> Preliminary appointment for supervised driving</li>
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
              <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">...</div>
              <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">...</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default pricing