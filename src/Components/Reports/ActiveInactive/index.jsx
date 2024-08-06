import React from 'react'
import Table from '../../Table'
import {ActiveInActiveCol, ActiveInActiveData} from "../ReportData";
const ActiveInActive = () => {
  return (
    <div>
        <div className="wrapper">
            <strong className="title">Active/ Inactive Employee</strong>
            <Table columns={ActiveInActiveCol} data={ActiveInActiveData} border={true} />
        </div>
    </div>
  )
}

export default ActiveInActive