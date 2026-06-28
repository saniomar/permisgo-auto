"use client";

import { useMemo, useState } from "react";
import { FaSearch, FaUserGraduate, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const students = [
  {
    name: "John Doe",
    email: "john@example.com",
    phone: "+880 1712 345678",
    course: "Beginner Driving Course",
    progress: 60,
    status: "Active",
  },
  {
    name: "Maria Smith",
    email: "maria@example.com",
    phone: "+880 1812 987654",
    course: "Road Test Preparation",
    progress: 80,
    status: "Active",
  },
  {
    name: "David Wilson",
    email: "david@example.com",
    phone: "+880 1912 111222",
    course: "Defensive Driving Course",
    progress: 35,
    status: "Pending",
  },
  {
    name: "Sophia Brown",
    email: "sophia@example.com",
    phone: "+880 1612 555777",
    course: "Refresher Driving Lessons",
    progress: 100,
    status: "Completed",
  },
];

export default function Students() {
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchName = student.name
        .toLowerCase()
        .includes(filters.name.toLowerCase());

      const matchEmail = student.email
        .toLowerCase()
        .includes(filters.email.toLowerCase());

      const matchPhone = student.phone
        .toLowerCase()
        .includes(filters.phone.toLowerCase());

      return matchName && matchEmail && matchPhone;
    });
  }, [filters]);

  const resetFilters = () => {
    setFilters({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <section className="students-page">
      <div className="students-header">
        <div>
          <h2 className="panel-title mb-1">Students</h2>
          <p className="students-subtitle">
            Manage your enrolled students and track their course progress.
          </p>
        </div>

        <div className="students-count-card">
          <FaUserGraduate />
          <div>
            <span>Total Students</span>
            <strong>{filteredStudents.length}</strong>
          </div>
        </div>
      </div>

      <div className="students-filter-card mb-4">
        <div className="row g-3 align-items-end">
          <div className="col-12 col-md-4">
            <label className="filter-label">Search by Name</label>
            <div className="filter-input-wrap">
              <FaSearch />
              <input
                type="text"
                name="name"
                value={filters.name}
                onChange={handleChange}
                className="form-control filter-input"
                placeholder="Enter student name"
              />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <label className="filter-label">Search by Email</label>
            <div className="filter-input-wrap">
              <FaEnvelope />
              <input
                type="text"
                name="email"
                value={filters.email}
                onChange={handleChange}
                className="form-control filter-input"
                placeholder="Enter email address"
              />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <label className="filter-label">Search by Phone</label>
            <div className="filter-input-wrap">
              <FaPhoneAlt />
              <input
                type="text"
                name="phone"
                value={filters.phone}
                onChange={handleChange}
                className="form-control filter-input"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div className="col-12 d-flex justify-content-end">
            <button type="button" className="reset-filter-btn" onClick={resetFilters}>
              Reset Filter
            </button>
          </div>
        </div>
      </div>

      <div className="students-table-card">
        <div className="table-responsive">
          <table className="table align-middle mb-0 students-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Course</th>
                <th>Progress</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <tr key={index}>
                    <td>
                      <div className="student-name-box">
                        <div className="student-avatar">
                          {student.name.charAt(0)}
                        </div>
                        <span>{student.name}</span>
                      </div>
                    </td>

                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>{student.course}</td>

                    <td>
                      <div className="student-progress-box">
                        <div className="progress student-progress">
                          <div
                            className="progress-bar"
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                        <span>{student.progress}%</span>
                      </div>
                    </td>

                    <td>
                      <span
                        className={`student-status ${
                          student.status === "Active"
                            ? "active"
                            : student.status === "Completed"
                            ? "completed"
                            : "pending"
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-5">
                    <h6 className="mb-1">No students found</h6>
                    <p className="mb-0 text-muted">
                      Try changing your name, email or phone filter.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}