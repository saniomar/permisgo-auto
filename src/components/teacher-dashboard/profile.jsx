"use client";
import Image from "next/image";

import { useState } from "react";
import {
  FaChevronLeft,
  FaCamera,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const statusOptions = [
  "Independent Driving Instructor",
  "Salaried Driving Instructor",
  "Driving Instructor Job Seeker",
  "ESCR Student",
  "Driving School Manager",
  "Others",
];

export default function Profile() {
  const [statusOpen, setStatusOpen] = useState(true);
  const [status, setStatus] = useState("ESCR Student");
  const [vehicleType, setVehicleType] = useState("Manual Car");

  return (
    <section className="profile-page">
      <div className="profile-top">
        <div className="d-flex align-items-center gap-3">
          <button type="button" className="profile-back-btn">
            <FaChevronLeft />
          </button>

          <div>
            <h2 className="profile-title mb-1">Profile</h2>
            <p className="profile-subtitle mb-0">
              Update your information to ensure accurate lesson scheduling and
              communication.
            </p>
          </div>
        </div>
      </div>

      <div className="profile-main-card">
        <div className="profile-user-card">
          <div className="profile-user-info">
            <div className="profile-avatar-wrap">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0dW491TS8p25zqH1JdG1fj-NRldx_t-MfzWk68jQEBw&s=10"
                alt="profile"
                width="78"
                height="78"
                className="profile-avatar"
              />

              <button type="button" className="camera-btn">
                <FaCamera />
              </button>
            </div>

            <div>
              <h3>Jenny Smith</h3>

              <p>
                <SiGmail className="gmail-icon" />
                yourmail@mail.com
              </p>
            </div>
          </div>

          <button type="button" className="profile-edit-btn">
            Edit
          </button>
        </div>

        <div className="personal-details-card">
          <h3 className="details-title">Personal Details</h3>

          <form className="row g-4">
            <div className="col-12 col-lg-6">
              <label className="profile-label">First Name</label>
              <input
                type="text"
                className="form-control profile-input"
                defaultValue="Jenny"
              />
            </div>

            <div className="col-12 col-lg-6">
              <label className="profile-label">Last Name</label>
              <input
                type="text"
                className="form-control profile-input"
                defaultValue="Smith"
              />
            </div>

            <div className="col-12 col-lg-6">
              <label className="profile-label">Date of birth</label>
              <div className="profile-input-icon">
                <input
                  type="text"
                  className="form-control profile-input"
                  defaultValue="Date"
                />
                <FaCalendarAlt />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <label className="profile-label">Address</label>
              <input
                type="text"
                className="form-control profile-input"
                defaultValue="House no : 100, Dhaka"
              />
            </div>

            <div className="col-12 col-lg-6">
              <label className="profile-label">Phone Number</label>
              <div className="phone-input-box">
                <span className="bd-flag"></span>
                <input
                  type="text"
                  className="form-control profile-input"
                  defaultValue="+880988900"
                />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <label className="profile-label">Vehicle type</label>
              <div className="custom-select-box">
                <select
                  className="form-select profile-input"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                >
                  <option>Manual Car</option>
                  <option>Automatic Car</option>
                  <option>Motorcycle</option>
                </select>
                <FaChevronDown />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <label className="profile-label">Select your current status</label>

              <div className="status-dropdown">
                <button
                  type="button"
                  className="status-selected"
                  onClick={() => setStatusOpen(!statusOpen)}
                >
                  <span>{status}</span>
                  {statusOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {statusOpen && (
                  <div className="status-menu">
                    {statusOptions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        className={`status-option ${
                          status === item ? "selected" : ""
                        }`}
                        onClick={() => {
                          setStatus(item);
                          setStatusOpen(false);
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="row g-4">
                <div className="col-12">
                  <label className="profile-label">Department</label>
                  <input
                    type="text"
                    className="form-control profile-input"
                    defaultValue="Write phone number"
                  />
                </div>

                <div className="col-12">
                  <label className="profile-label">Your City</label>
                  <input
                    type="text"
                    className="form-control profile-input"
                    defaultValue="Dhaka"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-end">
              <button type="button" className="profile-update-btn">
                To update
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

