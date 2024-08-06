import React from 'react'
import { DeactivateWrap } from './Deactivate.styles'
import Table from '../../Table'
import {DeactiveCol, DeactiveData} from "../EmployeeData"
import ButtonTable from '../TableButton'
const DeactivateEmployee = () => {
  return (
    <DeactivateWrap>
        <div className="wrapper">
        <ButtonTable
    columns={DeactiveCol}
    data={DeactiveData}
    border
    // coloredColumnKey="Status"
    // color="green"
  />
        </div>
    </DeactivateWrap>
  )
}

export default DeactivateEmployee