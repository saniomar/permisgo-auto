

const steps = [
  {
    step: "Step 01",
    text: "Please complete your profile (Dob)",
  },
  {
    step: "Step 02",
    text: "Please complete (Ecsr Title, City, Department, Vehicle Type)",
  },
  {
    step: "Step 03",
    text: "Select a default vehicle (Must be approved by the administration)",
  },
  {
    step: "Step 04",
    text: "Your vehicle is not yet certified",
  },
  {
    step: "Step 05",
    text: "Select a default location",
  },
  {
    step: "Step 06",
    text: "Upload your identification documents (Driving Licence Back Document, Driving Licence Front Document)",
  },
];

const events = [
  {
    name: "Defensive Driving Course",
    date: "Mon, March 2, 2026",
    duration: "9:00 AM - 2:00 PM",
    vehicle: "Automatic Car",
  },
  {
    name: "Refresher Driving Lessons",
    date: "Mon, March 2, 2026",
    duration: "9:00 AM - 2:00 PM",
    vehicle: "Motorcycle",
  },
  {
    name: "Teen Driver Education Program",
    date: "Mon, March 2, 2026",
    duration: "9:00 AM - 2:00 PM",
    vehicle: "Duration",
  },
  {
    name: "Road Test Preparation Course",
    date: "Mon, March 2, 2026",
    duration: "9:00 AM - 2:00 PM",
    vehicle: "Duration",
  },
  {
    name: "Beginner Driving Course",
    date: "Mon, March 2, 2026",
    duration: "9:00 AM - 2:00 PM",
    vehicle: "Duration",
  },
];

const lessons = [
  {
    number: "01.",
    title: "Road Test Preparation Course",
    text: "Focused training on test routes, examiner expectations, mock driving tests.",
    progress: 20,
  },
  {
    number: "02.",
    title: "Road Test Preparation Course",
    text: "Focused training on test routes, examiner expectations, mock driving tests.",
    progress: 20,
  },
];

export default function Dashboard() {
  return (
    <>
      <div className="welcome-section mb-4">
        <h2>Welcome, Smith</h2>
        <p>
          Stay updated on academics, attendance, finances, and more—all in one
          place.
        </p>
      </div>

      <section className="teacher-status-card mb-4">
        <h5 className="section-heading mb-3">
          Please complete the following steps:
        </h5>

        <div className="step-list">
          {steps.map((item, index) => (
            <div className="teacher-step-item" key={index}>
              <span className="teacher-step-badge">{item.step}</span>
              <span className="step-text">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="text-end mt-4">
          <h6 className="completed-text mb-0">100% Completed</h6>
        </div>

        <div className="teacher-progress-wrapper mt-3">
          {steps.map((item, index) => (
            <div className="teacher-progress-step" key={index}>
              <div className="progress-circle">✓</div>

              {index !== steps.length - 1 && <div className="progress-line" />}

              <small>{item.step}</small>
            </div>
          ))}
        </div>

        <div className="verified-alert mt-4">
          <span className="info-icon">i</span>
          <span>
            Congratulations! Your profile has been successfully verified. You
            are now an approved instructor.
          </span>
        </div>
      </section>

      <div className="row g-4">
        <div className="col-12 col-xl-8">
          <section className="dashboard-panel h-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="panel-title mb-0">Upcoming Events</h4>

              <button type="button" className="date-btn">
                March, 2026 <span className="ms-1">▣</span>
              </button>
            </div>

            <div className="event-table-box">
              <div className="table-responsive">
                <table className="table align-middle mb-0 custom-event-table">
                  <thead>
                    <tr>
                      <th>Planned Event</th>
                      <th>Date</th>
                      <th>Duration</th>
                      <th>Vehicle Type</th>
                    </tr>
                  </thead>

                  <tbody>
                    {events.map((event, index) => (
                      <tr key={index}>
                        <td className="fw-semibold">{event.name}</td>
                        <td>{event.date}</td>
                        <td>{event.duration}</td>
                        <td>{event.vehicle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button type="button" className="show-all-btn mt-4">
                Show all
              </button>
            </div>
          </section>
        </div>

        <div className="col-12 col-xl-4">
          <section className="dashboard-panel h-100">
            <h4 className="panel-title mb-4">Lesson In Progress</h4>

            <div className="lesson-list">
              {lessons.map((lesson, index) => (
                <div className="lesson-card" key={index}>
                  <h6>
                    <span>{lesson.number}</span> {lesson.title}
                  </h6>

                  <p>{lesson.text}</p>

                  <strong>Duration: 3–5 Intensive Lessons</strong>

                  <div className="progress lesson-progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${lesson.progress}%` }}
                      aria-valuenow={lesson.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>

                  <h6 className="lesson-progress-text mt-2 mb-0">
                    {lesson.progress}% Progress
                  </h6>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}