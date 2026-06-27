"use client";

import { useState } from "react";

import Sidebar from "../components/teacher-dashboard/sidebar";
import Dashboard from "../components/teacher-dashboard/Dashboard";
import PersonalInfo from "../components/teacher-dashboard/PersonalInfo";
import Vehicles from "../components/teacher-dashboard/Vehicles";
import Location from "../components/teacher-dashboard/Location";

import Lessons from "../components/teacher-dashboard/Lessons";
import Calendar from "../components/teacher-dashboard/Calendar";
import Students from "../components/teacher-dashboard/Students";
import Exams from "../components/teacher-dashboard/Exams";
import Account from "../components/teacher-dashboard/Account";
import MyReferences from "../components/teacher-dashboard/MyReferences";
import Offers from "../components/teacher-dashboard/Offers";
import MyDocument from "../components/teacher-dashboard/MyDocument"
import ResetPassword from "../components/teacher-dashboard/ResetPassword"
import Profile from "../components/teacher-dashboard/profile";

export default function TeacherDashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabComponents = {
    dashboard: <Dashboard />,
    personal: <PersonalInfo />,
    vehicles: <Vehicles />,
    location: <Location />,
    lessons: <Lessons />,
    calendar: <Calendar />,
    students: <Students />,
    exams: <Exams />,
    account: <Account />,
    references: <MyReferences />,
    offers: <Offers />,

  // SUB MENU
    "profile":<Profile/>,
    "my-document": <MyDocument />,
    'reset-password': <ResetPassword />,
  };

  return (
    <div className="app-wrapper">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="main-content">
        {tabComponents[activeTab] || <Dashboard />}
      </main>
    </div>
  );
}