"use client";

import { useState } from "react";
import { FaSearch, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const examsData = [
  {
    name: "Theresa Webb",
    center: "Ab Center",
    date: "Mon, March 2, 2026",
    time: "9:00 AM - 2:00 PM",
    booklet: "View booklet",
    status: "Passed",
  },
  {
    name: "Esther Howard",
    center: "Ab Center",
    date: "Mon, March 2, 2026",
    time: "9:00 AM - 2:00 PM",
    booklet: "View booklet",
    status: "Passed",
  },
  {
    name: "Brooklyn Simmons",
    center: "Ab Center",
    date: "Mon, March 2, 2026",
    time: "9:00 AM - 2:00 PM",
    booklet: "View booklet",
    status: "Passed",
  },
  {
    name: "Bessie Cooper",
    center: "Ab Center",
    date: "Mon, March 2, 2026",
    time: "9:00 AM - 2:00 PM",
    booklet: "View booklet",
    status: "Failed",
  },
  {
    name: "Dianne Russell",
    center: "Ab Center",
    date: "Mon, March 2, 2026",
    time: "9:00 AM - 2:00 PM",
    booklet: "View booklet",
    status: "Failed",
  },
  {
    name: "Kristin Watson",
    center: "Ab Center",
    date: "Mon, March 2, 2026",
    time: "9:00 AM - 2:00 PM",
    booklet: "N/A",
    status: "Upcoming",
  },
];

export default function ExaminationList() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredData = examsData.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());

    if (activeFilter === "all") return matchSearch;
    if (activeFilter === "passed")
      return item.status === "Passed" && matchSearch;
    if (activeFilter === "failed")
      return item.status === "Failed" && matchSearch;
    if (activeFilter === "upcoming")
      return item.status === "Upcoming" && matchSearch;

    return matchSearch;
  });

  return (
    <section className="exam-page">
      {/* Header */}
      <div className="exam-header">
        <div className="d-flex align-items-center gap-3">
          <button className="back-btn">
            <FaChevronLeft />
          </button>
          <h2>Examination List</h2>
        </div>

        <button className="revision-btn">Request for revision</button>
      </div>

      {/* Search */}
      <div className="exam-topbar">
        <div className="exam-search">
          <FaSearch />
          <input
            type="text"
            placeholder="Search students"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <FaTimes onClick={() => setSearch("")} className="clear-icon" />
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="exam-filters">
        {["all", "upcoming", "passed", "failed"].map((f) => (
          <button
            key={f}
            className={`filter-btn ${activeFilter === f ? "active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f === "all"
              ? "All"
              : f === "upcoming"
              ? "Upcoming exams"
              : f === "passed"
              ? "Exam passed"
              : "Failed"}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="exam-table-card">
        <div className="table-responsive">
          <table className="table align-middle exam-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Exam Center</th>
                <th>Date</th>
                <th>Time</th>
                <th>Booklet</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((item, i) => (
                <tr key={i}>
                  <td className="fw-semibold">{item.name}</td>
                  <td>{item.center}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td className="booklet-link">{item.booklet}</td>
                  <td>
                    <span className={`status-badge ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="exam-footer">
          <span>Showing 1-10 of 50 students</span>

          <div className="pagination-box">
            <button>
              <FaChevronLeft />
            </button>
            <span>Page 2</span>
            <button>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}