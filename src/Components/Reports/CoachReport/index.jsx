import React from 'react'
import Table from '../../Table'
import { CoachReportCol, CoachReportData } from '../ReportData'

const CoachReport = () => {
  return (
    <div>
        <div className="wrapper">
            <strong className="title">Coach Report</strong>
            <Table columns={CoachReportCol} data={CoachReportData} border={true} />
        </div>
    </div>
  )
}

export default CoachReport