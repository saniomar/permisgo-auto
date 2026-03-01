import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Image

// Icon

// Style
import helpStyle from "./styles/helps.module.css"


const helps = () => {
  return (
    <>
        <section></section>
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
                    <div></div>
                  </div>
                  <div className="col-lg-4">
                    <div></div>
                  </div>
                  <div className="col-lg-4">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3>Do you still have any questions ?</h3>
                <p>Our friendly team is here to help you pass your driving test!</p>
                <Link href="/contact-us">Chat with support</Link>
              </div>
              <div className="col-lg-6">
                <Image src="" layout='responsive' alt=''></Image>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default helps