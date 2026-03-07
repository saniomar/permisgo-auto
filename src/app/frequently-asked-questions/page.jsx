import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Image

// Icon
import { FaWhatsappSquare } from "react-icons/fa";

// Style
import faqStyle from "./styles/faq.module.css"


const faq = () => {
  return (
    <>
      <div className={faqStyle.faq_first}>
        <div className="container">
          <div className="text-center">
            <h1>Frequently Asked Questions</h1>
            <p>Our platform is built to help you work smarter, not harder. It adapts to your needs and supports your goals. Make the most of every feature.</p>
          </div>
        </div>
      </div>
      <div className={faqStyle.faq_second}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqOne" aria-expanded="true" aria-controls="collapseFaqOne">
                        Accordion Item #1
                      </button>
                    </h2>
                    <div id="collapseFaqOne" className="accordion-collapse collapse show" aria-labelledby="headingFaqOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqTwo" aria-expanded="false" aria-controls="collapseFaqTwo">
                        Accordion Item #2
                      </button>
                    </h2>
                    <div id="collapseFaqTwo" className="accordion-collapse collapse" aria-labelledby="headingFaqTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqThree" aria-expanded="false" aria-controls="collapseFaqThree">
                        Accordion Item #3
                      </button>
                    </h2>
                    <div id="collapseFaqThree" className="accordion-collapse collapse" aria-labelledby="headingFaqThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFaqFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaqFour" aria-expanded="false" aria-controls="collapseFaqFour">
                        Accordion Item #4
                      </button>
                    </h2>
                    <div id="collapseFaqFour" className="accordion-collapse collapse" aria-labelledby="headingFaqFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={faqStyle.rightBox}>
                <div className="text-center">
                  <h3>Do you have more questions?</h3>
                  <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                  <div className="mt-4">
                    <Link href="" className='btn btn-lg'><FaWhatsappSquare /> +847 4545 4587</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default faq