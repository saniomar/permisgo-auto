import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Styles
import studentDashboardSidebarCss from "../styles/student-dashboard-sidebar.module.css"

const dashboardSidebar = () => {
  return (
    <>  
        <div className={studentDashboardSidebarCss.sidebar}>
          <ul>
            <li>
              <Link href="">Dashboard</Link>
            </li>
            <li>
              <Link href="">Personal Info</Link>
            </li>
            <li>
              <Link href="">Offers</Link>
            </li>
            <li>
              <Link href="">Code de la route</Link>
            </li>
            <li>
              <Link href="">Driving Operations</Link>
            </li>
            <li>
              <Link href="">My Réperences</Link>
            </li>
            <li>
              <Link href="">Support</Link>
            </li>
            <li>
              <Link href="">Logout</Link>
            </li>
          </ul>
        </div>
    </>
  )
}

export default dashboardSidebar