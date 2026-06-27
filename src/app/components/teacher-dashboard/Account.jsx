export default function Account() {
  return (
    <section className="dashboard-panel">
      <h2 className="panel-title mb-4">Account</h2>

      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Account Name</label>
          <input className="form-control" type="text" placeholder="Smith" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email Address</label>
          <input
            className="form-control"
            type="email"
            placeholder="smith@example.com"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <input
            className="form-control"
            type="text"
            placeholder="+880 1234 567890"
          />
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="button">
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
}