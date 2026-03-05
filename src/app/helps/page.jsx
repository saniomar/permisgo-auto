import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Image
import helpThree from "../../../public/image/help.jpg"

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
            <div className="container">
              <div className={helpStyle.help_first_box}>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h1>Need help? We're here to help!</h1>
                    <h5>Ask us all your questions about driving lessons, exams or licenses!</h5>
                    <div className="mt-5">
                      <Link href="" className='btn btn-lg'><FaWhatsapp /> | +845 2458 5478</Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <Image src={helpThree} layout='responsive' alt=''></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={helpStyle.help_second}>
            <div className="container">
              <div className="text-center">
                <h2>Latest driving tips</h2>
                <p>Newly updated resources for students</p>
              </div>
              <div className="mt-4">
                <div className="row">
                  <div className="col-lg-4">
                    <div className={helpStyle.helpSecondBox}>
                      <h4>Discover By Car Permisgo</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quidem totam autem molestias, corporis, excepturi officiis nisi tempore atque animi eum natus cupiditate laudantium, quibusdam ad error maiores esse. Nostrum.</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className={helpStyle.helpSecondBox}>
                      <h4>My Driving School File</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quidem totam autem molestias, corporis, excepturi officiis nisi tempore atque animi eum natus cupiditate laudantium, quibusdam ad error maiores esse. Nostrum.</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className={helpStyle.helpSecondBox}>
                      <h4>My Payments & Lesson Credit</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quidem totam autem molestias, corporis, excepturi officiis nisi tempore atque animi eum natus cupiditate laudantium, quibusdam ad error maiores esse. Nostrum.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div id={helpStyle.help_third}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h3>Do you still have any questions ?</h3>
                  <p>Our friendly team is here to help you pass your driving test! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni accusamus laborum ducimus, porro quod itaque repellendus optio sed voluptate?</p>
                  <div className="mt-5">
                    <Link className='btn btn-lg' href="/contact-us"><IoChatbubbleEllipsesOutline /> Chat with support</Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <Image src={helpThree} layout='responsive' alt=''></Image>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default helps