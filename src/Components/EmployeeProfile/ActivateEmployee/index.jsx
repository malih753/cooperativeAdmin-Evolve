import React from 'react'
import { ActivateWrap } from './Activate.styles'
import Table from '../../Table'
import {ActiveCol, ActiveData} from "../EmployeeData"
import ButtonTable from '../TableButton'
const ActivateEmployee = () => {
  return (
    <ActivateWrap>
        <div className="wrapper">
        <ButtonTable
    columns={ActiveCol}
    data={ActiveData}
    border
    // coloredColumnKey="Status"
    // color="green"
  />
        </div>
    </ActivateWrap>
  )
}

export default ActivateEmployee