export default function Offers() {
  return (
    <section className="dashboard-panel">
      <h2 className="panel-title mb-4">Offers</h2>

      <div className="row g-3">
        <div className="col-md-6 col-xl-4">
          <div className="lesson-card">
            <h6>Premium Instructor Offer</h6>
            <p>Get more visibility and student bookings with premium access.</p>
            <strong>Save 20%</strong>

            <button type="button" className="show-all-btn mt-3">
              Claim Offer
            </button>
          </div>
        </div>

        <div className="col-md-6 col-xl-4">
          <div className="lesson-card">
            <h6>Referral Bonus</h6>
            <p>Earn bonus rewards when students join from your reference.</p>
            <strong>Active Now</strong>

            <button type="button" className="show-all-btn mt-3">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}