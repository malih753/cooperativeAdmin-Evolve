import React from 'react'
import { CompanyWrapper } from '../CompanyProfile.styles'
import backarrow from "../../../assets/support/backArrow.png";
const Subscription = () => {
  return (
    <CompanyWrapper>
      <div className="iconholder">
        <img src={backarrow} alt="arrow" />
      </div>
      <div className="wrapper">
        <strong className="h2"> </strong>
      </div>
    </CompanyWrapper>
  )
}

export default Subscription