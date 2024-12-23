import React from 'react'
import UserDashboard from '../Dashboards/UserDashboard'
import Navbar from '../Navbar'

const Home = () => {
  return (
    <div style={{width: "100%"}}>
      <Navbar />
      <div className="items-center justify-center " style={{width : "100%"}} >

        <UserDashboard />
      </div>
    </div>
  )
}

export default Home
