import React from 'react'
import { Outlet } from 'react-router'


const About = () => {
  return (
    <div>
      <h1>About us page</h1>
      <p>This is a Gaurav Upadhyay Website </p>
      <Outlet />
    </div>
  )
}

export default About
