import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Style
import cpfCss from "./styles/cpf-offer.module.css"

// Image
import heroImage from "../../../../public/image/cpf-offer.png"


const cpfOffer = () => {
    return (
        <>
            <section>
                <div className={cpfCss.cpf_hero}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <h1>Finance your driving licence with the CPF</h1>
                                <p>Choose the perfect package that fits your learning needs and budget.</p>
                                <Link href="" className='btn btn-lg'>To be called back by an advisor</Link>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <Image src={heroImage} layout='responsive' alt=''></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default cpfOffer