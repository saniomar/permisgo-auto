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
                <div className="pt-4">

                  <div className='d-flex justify-content-between align-items-center' id={pricingStyle.mobileLicenseTitle}>
                    <div className="text-center">
                      <h2 className='mt-3'>Our <span>Rates</span></h2>
                    </div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="license-menual-tab" data-bs-toggle="tab" data-bs-target="#license-menual-tab-pane" type="button" role="tab" aria-controls="license-menual-tab-pane" aria-selected="true">Menual</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="license-auto-tab" data-bs-toggle="tab" data-bs-target="#license-auto-tab-pane" type="button" role="tab" aria-controls="license-auto-tab-pane" aria-selected="false">Automatic</button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="myTabContent">

                    <div className="tab-pane fade show active" id="license-menual-tab-pane" role="tabpanel" aria-labelledby="license-menual-tab" tabIndex="0">
                      <div id={pricingStyle.tab_border}>
                        <ul className="nav nav-tabs d-flex justify-content-center gap-3" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="five-tab" data-bs-toggle="tab" data-bs-target="#five-tab-pane" type="button" role="tab" aria-controls="five-tab-pane" aria-selected="true">5 Course</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="ten-tab" data-bs-toggle="tab" data-bs-target="#ten-tab-pane" type="button" role="tab" aria-controls="ten-tab-pane" aria-selected="false">10 Course</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="twenty-tab" data-bs-toggle="tab" data-bs-target="#twenty-tab-pane" type="button" role="tab" aria-controls="twenty-tab-pane" aria-selected="false">20 Course</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="thirty-tab" data-bs-toggle="tab" data-bs-target="#thirty-tab-pane" type="button" role="tab" aria-controls="thirty-tab-pane" aria-selected="false">30 Course</button>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="five-tab-pane" role="tabpanel" aria-labelledby="five-tab" tabIndex="0">
                          <div className="mt-5">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Zen Permit</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>Most economical offer</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                    </ul>
                                  </div>
                                  <div className="mt-4">
                                    <Link href="" className='btn'>Sign Up</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Premium Permit</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>Practical exam date within 30 days</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                    </ul>
                                  </div>
                                  <div className="mt-4">
                                    <Link href="" className='btn'>Sign Up</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Accelerated Driving Licence</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>30-day training course</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
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
                        <div className="tab-pane fade" id="ten-tab-pane" role="tabpanel" aria-labelledby="ten-tab" tabIndex="0">
                          <div className="mt-5">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Zen Permit</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>Most economical offer</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                    </ul>
                                  </div>
                                  <div className="mt-4">
                                    <Link href="" className='btn'>Sign Up</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Premium Permit</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>Practical exam date within 30 days</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                    </ul>
                                  </div>
                                  <div className="mt-4">
                                    <Link href="" className='btn'>Sign Up</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Accelerated Driving Licence</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>30-day training course</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
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
                        <div className="tab-pane fade" id="twenty-tab-pane" role="tabpanel" aria-labelledby="twenty-tab" tabIndex="0">
                          <div className="mt-5">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Zen Permit</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>Most economical offer</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                    </ul>
                                  </div>
                                  <div className="mt-4">
                                    <Link href="" className='btn'>Sign Up</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Premium Permit</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>Practical exam date within 30 days</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                    </ul>
                                  </div>
                                  <div className="mt-4">
                                    <Link href="" className='btn'>Sign Up</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Accelerated Driving Licence</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>30-day training course</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
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
                        <div className="tab-pane fade" id="thirty-tab-pane" role="tabpanel" aria-labelledby="thirty-tab" tabIndex="0">
                          <div className="mt-5">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Zen Permit</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>Most economical offer</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                    </ul>
                                  </div>
                                  <div className="mt-4">
                                    <Link href="" className='btn'>Sign Up</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Premium Permit</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>Practical exam date within 30 days</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                    </ul>
                                  </div>
                                  <div className="mt-4">
                                    <Link href="" className='btn'>Sign Up</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Accelerated Driving Licence</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>30-day training course</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
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

                    <div className="tab-pane fade" id="license-auto-tab-pane" role="tabpanel" aria-labelledby="license-auto-tab" tabIndex="0">
                      <div id={pricingStyle.tab_border}>
                        <ul className="nav nav-tabs d-flex justify-content-center gap-3" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="five-auto-tab" data-bs-toggle="tab" data-bs-target="#five-auto-tab-pane" type="button" role="tab" aria-controls="five-auto-tab-pane" aria-selected="true">5 Course</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="ten-auto-tab" data-bs-toggle="tab" data-bs-target="#ten-auto-tab-pane" type="button" role="tab" aria-controls="ten-auto-tab-pane" aria-selected="false">10 Course</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="twenty-auto-tab" data-bs-toggle="tab" data-bs-target="#twenty-auto-tab-pane" type="button" role="tab" aria-controls="twenty-auto-tab-pane" aria-selected="false">20 Course</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="thirty-auto-tab" data-bs-toggle="tab" data-bs-target="#thirty-auto-tab-pane" type="button" role="tab" aria-controls="thirty-auto-tab-pane" aria-selected="false">30 Course</button>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="five-auto-tab-pane" role="tabpanel" aria-labelledby="five-auto-tab" tabIndex="0">
                          <div className="mt-5">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Zen Permit</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>Most economical offer</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                    </ul>
                                  </div>
                                  <div className="mt-4">
                                    <Link href="" className='btn'>Sign Up</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Premium Permit</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>Practical exam date within 30 days</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                    </ul>
                                  </div>
                                  <div className="mt-4">
                                    <Link href="" className='btn'>Sign Up</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Accelerated Driving Licence</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>30-day training course</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
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
                        <div className="tab-pane fade" id="ten-auto-tab-pane" role="tabpanel" aria-labelledby="ten-auto-tab" tabIndex="0">
                          <div className="mt-5">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Zen Permit</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>Most economical offer</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                    </ul>
                                  </div>
                                  <div className="mt-4">
                                    <Link href="" className='btn'>Sign Up</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Premium Permit</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>Practical exam date within 30 days</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                    </ul>
                                  </div>
                                  <div className="mt-4">
                                    <Link href="" className='btn'>Sign Up</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Accelerated Driving Licence</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>30-day training course</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
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
                        <div className="tab-pane fade" id="twenty-auto-tab-pane" role="tabpanel" aria-labelledby="twenty-auto-tab" tabIndex="0">
                          <div className="mt-5">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Zen Permit</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>Most economical offer</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                    </ul>
                                  </div>
                                  <div className="mt-4">
                                    <Link href="" className='btn'>Sign Up</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Premium Permit</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>Practical exam date within 30 days</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                    </ul>
                                  </div>
                                  <div className="mt-4">
                                    <Link href="" className='btn'>Sign Up</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Accelerated Driving Licence</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>30-day training course</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
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
                        <div className="tab-pane fade" id="thirty-auto-tab-pane" role="tabpanel" aria-labelledby="thirty-auto-tab" tabIndex="0">
                          <div className="mt-5">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Zen Permit</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>Most economical offer</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                    </ul>
                                  </div>
                                  <div className="mt-4">
                                    <Link href="" className='btn'>Sign Up</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Premium Permit</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>Practical exam date within 30 days</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                    </ul>
                                  </div>
                                  <div className="mt-4">
                                    <Link href="" className='btn'>Sign Up</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className={pricingStyle.license_menual_box}>
                                  <div className="text-center">
                                    <h3>Accelerated Driving Licence</h3>
                                    <p className='mb-0'>Theory test + 20 driving lessons</p>
                                    <p className='mb-0'>30-day training course</p>
                                  </div>
                                  <hr />
                                  <div className={pricingStyle.license_pricing_box}>
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        <h5 className='mb-0'>Extension</h5>
                                        <p className='mb-0'>from</p>
                                      </div>
                                      <div>
                                        <h5 className='mb-0' id={pricingStyle.license_regular_price}>&849</h5>
                                        <p className='mb-0'>retail price</p>
                                      </div>
                                    </div>
                                    <div className="py-4">
                                      <h2>&599*</h2>
                                    </div>
                                    <p className='mb-0'>Enter your postal code to view your agency's rates.</p>
                                  </div>

                                  <h4>Package contents:</h4>
                                  <div className={pricingStyle.license_feature_list}>
                                    <ul>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Initial assessment</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 20 driving lessons</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Exam date within 30 days</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> Code Training</li>
                                      <li><LuBadgeCheck className={pricingStyle.checkIcon} /> 30-day training course</li>
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
                </div>
              </div>

              {/* Supervised Driving */}
              <div className="tab-pane fade" id="supervised-tab-pane" role="tabpanel" aria-labelledby="supervised-tab" tabIndex="0">
                <div className="py-3">
                  <div className="text-center">
                    <h2 className='mt-3'>Our Supervised <span>Driving</span> Package</h2>

                    <div className="pt-4">
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

      <section>
        <div id={pricingStyle.pricingFaq}>
          <div className="container">
            <div className="text-center">
              <h2>Do you have any questions?</h2>
              <p>Find all our answers in one click</p>
            </div>

            <div className="py-4">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Accordion Item #3
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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