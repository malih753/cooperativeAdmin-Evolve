import React from "react";
import { ChangePassWrap } from "./ChangPass.styles";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import backarrow from "../../../assets/support/backArrow.png";
import { useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  const navigate = useNavigate();
  const backToPage = () => {
    navigate("/CompanyProfile");
  };
  return (
    <ChangePassWrap>
      <div className="flex">
        <div className="iconholder">
          <img src={backarrow} alt="arrow" onClick={backToPage} />
        </div>
        <div className="text-content">
          <span className="h3">Change Password</span>
          <span className="h3">Create a new password</span>
        </div>
      </div>

      <TextField
        parentClass="passwordWrapper"
        className="input-field"
        field_Name="email"
        type="email"
        label="Email or Phone"
        //   value={emailInput}
        //   onChange={handleInputChange}
        bgClr="rgba(255, 255, 255, 0.37)"
      />
      <TextField
        parentClass="passwordWrapper"
        className="input-field"
        field_Name="text"
        type="text"
        label="Verification code"
        //   value={emailInput}
        //   onChange={handleInputChange}
        bgClr="rgba(255, 255, 255, 0.37)"
      />
      <div className="btn">
        <Button width="177px">Submit</Button>
      </div>
    </ChangePassWrap>
  );
};

export default ForgetPassword;
