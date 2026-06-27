// "use client";

// import {
//   FaThLarge,
//   FaUser,
//   FaCar,
//   FaMapMarkerAlt,
//   FaBookOpen,
//   FaCalendarAlt,
//   FaUsers,
//   FaClipboardCheck,
//   FaWallet,
//   FaLink,
//   FaGift,
//   FaSignOutAlt,
// } from "react-icons/fa";

// const menuItems = [
//   {
//     id: "dashboard",
//     label: "Dashboard",
//     icon: <FaThLarge />,
//   },
//   {
//     id: "personal",
//     label: "Personal Info",
//     icon: <FaUser />,
//     arrow: true,
//   },
//   {
//     id: "vehicles",
//     label: "Vehicles",
//     icon: <FaCar />,
//   },
//   {
//     id: "location",
//     label: "Location",
//     icon: <FaMapMarkerAlt />,
//   },
//   {
//     id: "lessons",
//     label: "Lessons",
//     icon: <FaBookOpen />,
//   },
//   {
//     id: "calendar",
//     label: "Calendar",
//     icon: <FaCalendarAlt />,
//   },
//   {
//     id: "students",
//     label: "Students",
//     icon: <FaUsers />,
//   },
//   {
//     id: "exams",
//     label: "Exams",
//     icon: <FaClipboardCheck />,
//   },
//   {
//     id: "account",
//     label: "Account",
//     icon: <FaWallet />,
//   },
//   {
//     id: "references",
//     label: "My References",
//     icon: <FaLink />,
//   },
//   {
//     id: "offers",
//     label: "Offers",
//     icon: <FaGift />,
//   },
// ];

// export default function Sidebar({ activeTab, setActiveTab }) {
//   return (
//     <aside className="sidebar">
//       <div className="sidebar-menu">
//         {menuItems.map((item) => (
//           <button
//             key={item.id}
//             type="button"
//             onClick={() => setActiveTab(item.id)}
//             className={`sidebar-btn ${activeTab === item.id ? "active" : ""}`}
//           >
//             <span className="sidebar-icon">{item.icon}</span>
//             <span>{item.label}</span>

//             {item.arrow && <span className="ms-auto arrow">›</span>}
//           </button>
//         ))}

//         <button type="button" className="sidebar-btn logout-btn">
//           <span className="sidebar-icon">
//             <FaSignOutAlt />
//           </span>
//           <span>Logout</span>
//         </button>
//       </div>

//       <div className="subscription-card">
//         <h6>Subscription</h6>
//         <p>Explore 20+ Feature with Lifetime Membership</p>
//         <button type="button">Upgrade Now</button>
//       </div>
//     </aside>
//   );
// }


"use client";

import { useState } from "react";

import {
  FaThLarge,
  FaUser,
  FaCar,
  FaMapMarkerAlt,
  FaBookOpen,
  FaCalendarAlt,
  FaUsers,
  FaClipboardCheck,
  FaWallet,
  FaLink,
  FaGift,
  FaSignOutAlt,
  FaFileAlt,
  FaLock,
} from "react-icons/fa";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: <FaThLarge /> },

  {
    id: "personal",
    label: "Personal Info",
    icon: <FaUser />,
    children: [
      { id: "profile",label: "Profile",icon: <FaFileAlt />},
      { id: "my-document", label: "My Document", icon: <FaFileAlt /> },
      { id: "reset-password", label: "Reset Password", icon: <FaLock /> },
    ],
  },

  { id: "vehicles", label: "Vehicles", icon: <FaCar /> },
  { id: "location", label: "Location", icon: <FaMapMarkerAlt /> },
  { id: "lessons", label: "Lessons", icon: <FaBookOpen /> },
  { id: "calendar", label: "Calendar", icon: <FaCalendarAlt /> },
  { id: "students", label: "Students", icon: <FaUsers /> },
  { id: "exams", label: "Exams", icon: <FaClipboardCheck /> },
  { id: "account", label: "Account", icon: <FaWallet /> },
  { id: "references", label: "My References", icon: <FaLink /> },
  { id: "offers", label: "Offers", icon: <FaGift /> },
  
];

export default function Sidebar({ activeTab, setActiveTab }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-menu">

        {menuItems.map((item) => (
          <div key={item.id}>
            {/* MAIN MENU */}
            <button
              type="button"
              onClick={() => {
                if (item.children) {
                  toggleMenu(item.id);
                } else {
                  setActiveTab(item.id);
                }
              }}
              className={`sidebar-btn ${
                activeTab === item.id ? "active" : ""
              }`}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.label}</span>

              {item.children && <span className="ms-auto arrow">›</span>}
            </button>

            {/* SUB MENU */}
            {item.children && openMenu === item.id && (
              <div className="submenu">
                {item.children.map((child) => (
                  <button
                    key={child.id}
                    type="button"
                    className={`sidebar-sub-btn ${
                      activeTab === child.id ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(child.id)}
                  >
                    <span className="sidebar-icon">{child.icon}</span>
                    <span>{child.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* LOGOUT */}
        <button type="button" className="sidebar-btn logout-btn">
          <span className="sidebar-icon">
            <FaSignOutAlt />
          </span>
          <span>Logout</span>
        </button>

      </div>

      <div className="subscription-card">
        <h6>Subscription</h6>
        <p>Explore 20+ Feature with Lifetime Membership</p>
        <button type="button">Upgrade Now</button>
      </div>
    </aside>
  );
}
