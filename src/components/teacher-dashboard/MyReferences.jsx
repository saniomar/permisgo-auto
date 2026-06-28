"use client";

import { useRouter } from "next/navigation";
import {
  FaChevronLeft,
  FaGift,
  FaGem,
  FaRegCopy,
  FaWallet,
  FaHandshake,
  FaSearch,
} from "react-icons/fa";

export default function MySponsorships() {
  const router = useRouter();

  const referralCode = "E2MS2C6614";

  const copyReferralCode = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      alert("Referral code copied!");
    } catch (error) {
      alert("Copy failed!");
    }
  };

  return (
    <section className="sponsorship-page">
      <div className="sponsorship-header">
        <button type="button" className="sponsorship-back-btn" onClick={() => router.back()}>
          <FaChevronLeft />
        </button>

        <h2>My Sponsorships</h2>
      </div>

      <div className="referral-banner">
        <div className="referral-content">
          <h4>
            <span className="gift-icon">
              <FaGift />
            </span>
            Referral Program - Earn money by recommending the driving School
          </h4>

          <p>Share your experience and help your friend sign up</p>

          <button type="button" className="how-work-btn">
            <FaGem />
            <span>How does it work?</span>
          </button>
        </div>

        <div className="clap-illustration">👏</div>
      </div>

      <div className="row g-4 mt-1">
        <div className="col-12 col-md-6 col-xl-4">
          <div className="sponsor-stat-card referral-code-card">
            <h5>Your Referral Code</h5>

            <div className="referral-code-box">
              <span>{referralCode}</span>

              <button type="button" onClick={copyReferralCode}>
                <FaRegCopy />
              </button>
            </div>

            <button type="button" className="share-btn">
              Share
            </button>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-4">
          <div className="sponsor-stat-card">
            <div className="stat-icon">
              <FaWallet />
            </div>

            <h5>Total Amount Used</h5>
            <h3>0</h3>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-4">
          <div className="sponsor-stat-card">
            <div className="stat-icon">
              <FaHandshake />
            </div>

            <h5>Total Number of Sponsorship</h5>
            <h3>0</h3>
          </div>
        </div>
      </div>

      <div className="empty-sponsorship-box mt-4">
        <div className="empty-icon-wrap">
          <FaSearch />
        </div>

        <h3>No Sponsorships Found</h3>
        <p>You haven’t sponsored anyone yet.</p>
      </div>
    </section>
  );
}