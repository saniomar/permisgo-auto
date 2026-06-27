// export default function Lessons() {
//   return (
//     <section className="dashboard-panel">
//       <h2 className="panel-title mb-4">Lessons</h2>

//       <div className="row g-3">
//         <div className="col-md-6 col-xl-4">
//           <div className="lesson-card">
//             <h6>Road Test Preparation Course</h6>
//             <p>Focused training on test routes and examiner expectations.</p>
//             <strong>Duration: 3–5 Intensive Lessons</strong>

//             <div className="progress lesson-progress mt-3">
//               <div className="progress-bar" style={{ width: "40%" }}></div>
//             </div>

//             <h6 className="lesson-progress-text mt-2">40% Progress</h6>
//           </div>
//         </div>

//         <div className="col-md-6 col-xl-4">
//           <div className="lesson-card">
//             <h6>Beginner Driving Course</h6>
//             <p>Basic driving lessons for beginner level students.</p>
//             <strong>Duration: 5–7 Lessons</strong>

//             <div className="progress lesson-progress mt-3">
//               <div className="progress-bar" style={{ width: "65%" }}></div>
//             </div>

//             <h6 className="lesson-progress-text mt-2">65% Progress</h6>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useState } from "react";
import {
  FaChevronLeft,
  FaSearch,
  FaTimes,
  FaCalendarAlt,
  FaQuestionCircle,
  FaCheck,
} from "react-icons/fa";

export default function Lessons() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    futureLessons: true,
    lessonsLearned: false,
    awaitingConfirmation: false,
    canceledByYou: false,
    canceledByStudent: false,
  });

  const handleCheckbox = (name) => {
    setFilters((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <section className="lessons-page">
      <div className="lessons-topbar">
        <div className="d-flex align-items-center gap-3">
          <button type="button" className="lesson-back-btn">
            <FaChevronLeft />
          </button>

          <h2 className="lessons-title mb-0">List of Lessons</h2>
        </div>
      </div>

      <div className="lesson-action-row">
        <div className="lesson-search-box">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search students"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button type="button" onClick={() => setSearch("")}>
              <FaTimes />
            </button>
          )}
        </div>

        <div className="lesson-buttons">
          <button type="button" className="arrange-review-btn">
            Arrange Review
          </button>

          <button type="button" className="submit-lesson-btn">
            Submit Lesson
          </button>
        </div>
      </div>

      <div className="lesson-content-wrapper">
        <div className="row g-4">
          <div className="col-12 col-lg-4 col-xl-4">
            <aside className="lesson-filter-card">
              <div className="lesson-date-group">
                <label>Start date</label>

                <div className="lesson-date-input">
                  <input type="text" value="10/12/2025" readOnly />
                  <FaCalendarAlt />
                </div>
              </div>

              <div className="lesson-date-group">
                <label>End date</label>

                <div className="lesson-date-input">
                  <input type="text" value="10/12/2025" readOnly />
                  <FaCalendarAlt />
                </div>
              </div>

              <div className="lesson-filter-section">
                <h6>Income-generating lessons</h6>

                <CustomCheckbox
                  label="Future lessons"
                  checked={filters.futureLessons}
                  onChange={() => handleCheckbox("futureLessons")}
                />

                <CustomCheckbox
                  label="Lessons Learned"
                  checked={filters.lessonsLearned}
                  onChange={() => handleCheckbox("lessonsLearned")}
                />
              </div>

              <div className="lesson-filter-section">
                <h6>Others lessons</h6>

                <CustomCheckbox
                  label="Awaiting confirmation"
                  checked={filters.awaitingConfirmation}
                  onChange={() => handleCheckbox("awaitingConfirmation")}
                />

                <CustomCheckbox
                  label="Canceled by you"
                  checked={filters.canceledByYou}
                  onChange={() => handleCheckbox("canceledByYou")}
                />

                <CustomCheckbox
                  label="Canceled by the student"
                  checked={filters.canceledByStudent}
                  onChange={() => handleCheckbox("canceledByStudent")}
                />
              </div>
            </aside>
          </div>

          <div className="col-12 col-lg-8 col-xl-8">
            <div className="lesson-result-card">
              <div className="empty-lessons-box">
                <div className="empty-lesson-icon">
                  <FaQuestionCircle />
                </div>

                <h3>No Lessons Found</h3>
                <p>You have no lessons in this filter range</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomCheckbox({ label, checked, onChange }) {
  return (
    <button type="button" className="custom-check-row" onClick={onChange}>
      <span className={`custom-check ${checked ? "checked" : ""}`}>
        {checked && <FaCheck />}
      </span>

      <span>{label}</span>
    </button>
  );
}