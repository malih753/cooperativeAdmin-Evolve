import React from 'react'
import Table from '../../Table'
import {AnonymousCol, AnonymousData} from "../ReportData"
import { AnonymousWrap } from './anonymous.styles'
const AnonymousForum = () => {
  return (
    <AnonymousWrap>
    <div className='wrapper'>
        <strong className="title">Anonymous Forum</strong>
        <Table columns={AnonymousCol} data={AnonymousData}  border={true} />
    </div>
    </AnonymousWrap>
  )
}

export default AnonymousForum