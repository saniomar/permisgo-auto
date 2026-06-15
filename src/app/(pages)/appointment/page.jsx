"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// styles
import appointmentStyles from "../appointment/styles/appointment.module.css"

// Icon

// Image
import appoinHero from "../../../../public/image/appoin-hero.png"

// Component
import Testimonials from '@/app/components/testimonials'
import WhyChoose from '@/app/components/why-choose'
import AppointmentBooking from '@/app/components/appointment-booking-calander'


const appointment = () => {

  return (
    <>
      <section>
        <div className={appointmentStyles.appointment_hero}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <h1>Book Your Driving Lesson</h1>
                <p>Schedule your driving lesson with our certified instructors. Choose your preferred date, time, and location to start your learning journey.</p>
                <Link href="" className='btn btn-lg'>Book Appointment</Link>
              </div>
              <div className="col-lg-6 col-md-6">
                <Image src={appoinHero} layout='responsive' alt=''></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentBooking />

      <WhyChoose />
      <Testimonials />

      <section>
        <div id={appointmentStyles.booking_btn_section}>
          <div className="container-fluid">
            <div id={appointmentStyles.booking_btn_inner_section}>
              <div className="text-center">
                <h3>Start Your Driving Journey Today</h3>
                <Link href="" className='btn btn-lg'>Book Your Lesson</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default appointment