"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { GoogleMap, useJsApiLoader, LoadScript, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import locationCss from "./styles/locations.module.css"

// Icon
import { FaStarHalfAlt, FaStar } from "react-icons/fa";


const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 48.856614,
  lng: 2.352221,
};

// Multiple marker locations
const location = [
  {
    id: 1,
    name: "Dhaka City",
    description: "Capital of Bangladesh",
    lat: 48.862577,
    lng: 2.33162,
  },
  {
    id: 2,
    name: "Gulshan",
    description: "Business area in Dhaka",
    lat: 48.858488,
    lng: 2.353165,
  },
  {
    id: 3,
    name: "Dhanmondi",
    description: "Popular residential area",
    lat: 48.854004,
    lng: 2.347543,
  },
  {
    id: 4,
    name: "Place de la Bastille",
    description: "Popular residential area",
    lat: 48.85262,
    lng: 2.368776,
  },
];


const locations = () => {

  const [activeMarker, setActiveMarker] = useState(null);

  return (
    <>
      <div className={locationCss.location_first}>
        <div className="container">
          <div className="text-center">
            <h1>At every turn, an agency within easy reach</h1>
            <h4>73 branches & 847 meeting points</h4>
          </div>
        </div>
      </div>

      <div className={locationCss.location_second}>
        <div className="container-fluid">
          <LoadScript googleMapsApiKey="AIzaSyA25FlEBZJiHYxKd4TAANFTfIvAn6zlqe4">
            <div className="row">
              <div className="col-lg-3">
                {/* Sidebar */}
                <div className={locationCss.googleLocationSidebar}>
                  <h3>Locations</h3>
                  <hr />
                  <div className="mt-4">
                    <ul>
                      {location.map((loc) => (
                        <li
                          key={loc.id}
                          style={{
                            padding: "10px",
                            marginBottom: "10px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            borderBottom: "1px solid #ddd",
                            background: activeMarker === loc.id ? "var(--second-light-color)" : "var(--first-light-color)",
                          }}
                          onClick={() => setActiveMarker(loc.id)}
                        >
                          {loc.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>

                  {location.map((loc) => (
                    <Marker
                      key={loc.id}
                      position={{ lat: loc.lat, lng: loc.lng }}
                      onClick={() => setActiveMarker(loc.id)}
                    >
                      {activeMarker === loc.id && (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                          <div>
                            <h4>{loc.name}</h4>
                            <p>{loc.description}</p>
                          </div>
                        </InfoWindow>
                      )}
                    </Marker>
                  ))}

                </GoogleMap>
              </div>
            </div>
          </LoadScript>
        </div>
      </div>

      <div className={locationCss.location_trust}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div>
                <h3>They trust us</h3>
                <h5>Over 1,000,000 satisfied students</h5>
                <ul>
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStar /></li>
                  <li><FaStarHalfAlt  /></li>
                </ul>
                <h4><span>4.5</span> stars</h4>
                <p>on the App Store and the Google Play Store, but also on review accreditation sites</p>
                <Link href="/reviews" className='btn btn-lg'>Checkout Our Reviews</Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <div className={locationCss.location_reviewBox}>
                    <p>Top-notch driving school! Everything went smoothly from start to finish...</p>
                    <small>Guillaume B. on 05/02/2025</small>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStarHalfAlt  /></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className={locationCss.location_reviewBox}>
                    <p>Top-notch driving school! Everything went smoothly from start to finish...</p>
                    <small>Guillaume B. on 05/02/2025</small>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStarHalfAlt  /></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className={locationCss.location_reviewBox}>
                    <p>Top-notch driving school! Everything went smoothly from start to finish...</p>
                    <small>Guillaume B. on 05/02/2025</small>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStarHalfAlt  /></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className={locationCss.location_reviewBox}>
                    <p>Top-notch driving school! Everything went smoothly from start to finish...</p>
                    <small>Guillaume B. on 05/02/2025</small>
                    <ul>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStar /></li>
                      <li><FaStarHalfAlt  /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div id={locationCss.locationFaq}>
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

export default locations