import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Styles
import whyChooseCss from "../styles/why-choose.module.css"

// Icons

// Images
import indicate1 from "../../../public/image/indicate1.png"
import indicate2 from "../../../public/image/indicate2.png"
import indicate3 from "../../../public/image/indicate3.png"
import indicate4 from "../../../public/image/indicate4.png"


const WhyChoose = () => {
  return (
    <>
        <section>
          <div id={whyChooseCss.choose_section}>
            <div className="container-fluid">
              <div className="text-center">
                <h2>Why Choose <span>PermisGo?</span></h2>

                <div id={whyChooseCss.choose_box} className='pt-4'>
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className={`${whyChooseCss.about_choose_box} ${whyChooseCss.about_choose_box_one}`}>
                        <div className={whyChooseCss.about_inner_box}>
                          <div className="text-center">
                            <Image src={indicate1} layout='responsive' alt=''></Image>
                            <h5>Moniteur diplômé</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className={`${whyChooseCss.about_choose_box} ${whyChooseCss.about_choose_box_two}`}>
                      <div className={whyChooseCss.about_inner_box}>
                        <div className="text-center">
                          <Image src={indicate2} layout='responsive' alt=''></Image>
                          <h5>+ 500 d’élève réussites</h5>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className={`${whyChooseCss.about_choose_box} ${whyChooseCss.about_choose_box_three}`}>
                        <div className={whyChooseCss.about_inner_box}>
                          <div className="text-center">
                            <Image src={indicate3} layout='responsive' alt=''></Image>
                            <h5>Certifié Qualiopi</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className={`${whyChooseCss.about_choose_box} ${whyChooseCss.about_choose_box_four}`}>
                        <div className={whyChooseCss.about_inner_box}>
                          <div className="text-center">
                            <Image src={indicate4} layout='responsive' alt=''></Image>
                            <h5>Écoles de conduite labellisées</h5>
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

export default WhyChoose