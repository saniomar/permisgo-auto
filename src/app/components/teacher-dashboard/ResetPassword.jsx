"use client";

import { useState } from "react";
import { FaChevronLeft, FaEye, FaEyeSlash } from "react-icons/fa";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <section className="reset-password-page">
      <div className="reset-password-header">
        <div className="d-flex align-items-start gap-3">
          <button type="button" className="reset-back-btn">
            <FaChevronLeft />
          </button>

          <div>
            <h2 className="reset-title mb-1">Profile</h2>
            <p className="reset-subtitle mb-0">
              Update your information to ensure accurate lesson scheduling and
              communication.
            </p>
          </div>
        </div>
      </div>

      <div className="reset-password-card">
        <form>
          <div className="mb-3">
            <label className="reset-label">Current Password</label>

            <div className="password-input-box">
              <input
                type={showPassword.current ? "text" : "password"}
                className="form-control reset-input"
                placeholder="Write here"
              />

              <button
                type="button"
                onClick={() => togglePassword("current")}
                className="password-eye-btn"
              >
                {showPassword.current ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <p className="password-help-text">
              If you don’t have a password, skip the old password field
            </p>
          </div>

          <div className="row g-4 mt-2">
            <div className="col-12 col-lg-6">
              <label className="reset-label">New Password</label>

              <div className="password-input-box">
                <input
                  type={showPassword.new ? "text" : "password"}
                  className="form-control reset-input"
                  placeholder="Write here"
                />

                <button
                  type="button"
                  onClick={() => togglePassword("new")}
                  className="password-eye-btn"
                >
                  {showPassword.new ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <label className="reset-label">Confirm the New Password</label>

              <div className="password-input-box">
                <input
                  type={showPassword.confirm ? "text" : "password"}
                  className="form-control reset-input"
                  placeholder="Write here"
                />

                <button
                  type="button"
                  onClick={() => togglePassword("confirm")}
                  className="password-eye-btn"
                >
                  {showPassword.confirm ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
          </div>

          <button type="button" className="change-password-btn">
            Change Password
          </button>
        </form>
      </div>
    </section>
  );
}