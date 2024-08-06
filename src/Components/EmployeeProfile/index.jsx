import React from 'react'
import { EmployeeWrap } from './employeeProfile.styles'
import EmployeeHeader from './EmployeeHeader'
import { Outlet } from 'react-router-dom'

const EmployeeProfile = () => {
  return (
    <EmployeeWrap>
     <div className="header">
     <EmployeeHeader/>
     </div>
      <div className="content">
        <Outlet />
      </div>
    </EmployeeWrap>
  )
}

export default EmployeeProfile