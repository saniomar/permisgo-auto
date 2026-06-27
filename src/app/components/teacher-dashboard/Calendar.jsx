export default function Calendar() {
  return (
    <section className="dashboard-panel">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="panel-title mb-0">Calendar</h2>
        <button className="date-btn" type="button">
          March, 2026
        </button>
      </div>

      <div className="event-table-box">
        <div className="table-responsive">
          <table className="table align-middle mb-0 custom-event-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="fw-semibold">Driving Class</td>
                <td>Mon, March 2, 2026</td>
                <td>9:00 AM - 11:00 AM</td>
                <td>Upcoming</td>
              </tr>

              <tr>
                <td className="fw-semibold">Road Test</td>
                <td>Wed, March 4, 2026</td>
                <td>2:00 PM - 3:00 PM</td>
                <td>Scheduled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}