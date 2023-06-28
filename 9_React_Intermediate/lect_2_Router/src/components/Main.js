import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div>
    {/* for show the child */}
        <Outlet></Outlet>
    </div>
  )
}
