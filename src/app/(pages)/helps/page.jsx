import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Image
import helpFirst from "../../../public/image/help-first.png"
import helpThree from "../../../public/image/help.jpg"
import helpSecond1 from "../../../public/image/help-second1.png"
import helpSecond2 from "../../../public/image/help-second2.png"
import helpSecond3 from "../../../public/image/help-second3.png"
import helpThird1 from "../../../public/image/help-third1.png"
import helpThird2 from "../../../public/image/help-third2.png"

// Icon
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

// Style
import helpStyle from "./styles/helps.module.css"


const helps = () => {
  return (
    <>
        <section>
          <div className={helpStyle.help_first}>
            <div className="container-fluid">
              <div className={helpStyle.help_first_box}>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h1>Need help? We're here to help!</h1>
                    <h5>Ask us all your questions about driving lessons, exams or licenses!</h5>
                    <div className="mt-5">
                        <input type="text" className='form-control form-control-lg' placeholder='🔎 Search....' />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="text-end">
                      <Image src={helpFirst} layout='responsive' alt=''></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={helpStyle.help_second}>
            <div className="container-fluid">
              <div className="text-center">
                <h2>Latest driving tips</h2>
                <p>Newly updated resources for students</p>
              </div>
              <div className="mt-4">
                <div className="row">
                  <div className="col-lg-4">
                    <div className={helpStyle.helpSecondBox}>
                      <Image src={helpSecond1} layout='responsive' alt=''></Image>
                      <h3>Discover By Car Permisgo</h3>
                      <p className={helpStyle.helpSecondPara}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quidem totam autem molestias, corporis, excepturi officiis nisi tempore atque animi eum natus cupiditate laudantium, quibusdam ad error maiores esse. Nostrum.</p>
                      <div className="mt-4">
                        <Link href="" className='btn'>Read more</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className={helpStyle.helpSecondBox}>
                      <Image src={helpSecond2} layout='responsive' alt=''></Image>
                      <h3>My Driving School File</h3>
                      <p className={helpStyle.helpSecondPara}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quidem totam autem molestias, corporis, excepturi officiis nisi tempore atque animi eum natus cupiditate laudantium, quibusdam ad error maiores esse. Nostrum.</p>
                      <div className="mt-4">
                        <Link href="" className='btn'>Read more</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className={helpStyle.helpSecondBox}>
                      <Image src={helpSecond3} layout='responsive' alt=''></Image>
                      <h3>Payments & Lesson Credit</h3>
                      <p className={helpStyle.helpSecondPara}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quidem totam autem molestias, corporis, excepturi officiis nisi tempore atque animi eum natus cupiditate laudantium, quibusdam ad error maiores esse. Nostrum.</p>
                      <div className="mt-4">
                        <Link href="" className='btn'>Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div id={helpStyle.help_third}>
            <div className="container-fluid">
              <div className={helpStyle.help_inner_third}>
                <Image src={helpThird1} className={helpStyle.help_inner_third_image_one} layout='responsive' alt=''></Image>
                <Image src={helpThird2} className={helpStyle.help_inner_third_image_two} layout='responsive' alt=''></Image>
                <div className="text-center">
                    <h3>Do you still have any questions ?</h3>
                    <p>Our friendly team is here to help you pass your driving test!</p>
                    <div className="mt-5">
                      <Link className='btn btn-lg' href="/contact-us"><IoChatbubbleEllipsesOutline /> Chat with support</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default helps