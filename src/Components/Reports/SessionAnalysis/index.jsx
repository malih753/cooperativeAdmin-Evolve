import React from 'react'
import { AnalysisWrap } from './SessionAnalysis.styles'
import Table from '../../Table'
import { AnalysisCol, AnalysisData } from '../ReportData'

const SessionAnalysis = () => {
  return (
    <AnalysisWrap>
        <div className="wrapper">
            <strong className="title">Session Analysis</strong>
            <Table columns={AnalysisCol} data={AnalysisData}  border={true} />
        </div>
    </AnalysisWrap>
  )
}

export default SessionAnalysis