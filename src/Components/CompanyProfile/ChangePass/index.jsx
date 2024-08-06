import React from "react";
import { ChangePassWrap } from "./ChangPass.styles";
import TextField from "../../TextField/TextField";
import Button from "../../Button";

import { Link } from "react-router-dom";
const ChangePassword = () => {
  return (
    <ChangePassWrap>

      <span className="h3">Change Password</span>
      <span className="h3">Create a new password</span>
      <TextField
        parentClass="passwordWrapper"
        className="input-field"
        field_Name="password"
        type="password"
        label="Current password"
        //   value={emailInput}
        //   onChange={handleInputChange}
        bgClr="rgba(255, 255, 255, 0.37)"
      />
      <TextField
        parentClass="passwordWrapper"
        className="input-field"
        field_Name="password"
        type="password"
        label="New password"
        //   value={emailInput}
        //   onChange={handleInputChange}
        bgClr="rgba(255, 255, 255, 0.37)"
      />
      <TextField
        parentClass="passwordWrapper"
        className="input-field"
        field_Name="password"
        type="password"
        label="Retype new password"
        //   value={emailInput}
        //   onChange={handleInputChange}
        bgClr="rgba(255, 255, 255, 0.37)"
      />
      <span className="forgot"><Link to="/CompanyProfile/forgot-password">Forgot Password ?</Link></span>
      <div className="btn">
        <Button width="177px">Save</Button>
      </div>
    </ChangePassWrap>
  );
};

export default ChangePassword;
