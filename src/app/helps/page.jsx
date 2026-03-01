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
              <div className="mt-4"></div>
            </div>
          </div>
        </section>
        <section></section>
    </>
  )
}

export default helps