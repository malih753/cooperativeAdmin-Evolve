import React, { useState, useRef } from "react";
import { ProfileWrap } from "./Profile.styles";
import Icon from "../../assets/authentication/profile.png";
import TextField from "../TextField/TextField";
import Button from "../Button/index";
import { useNavigate } from "react-router-dom";

const UploadProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password : "",
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Dashboard");
    console.log("Form Data:", formData);
  };

  return (
    <ProfileWrap>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1 className="title">Change Password</h1>
          <div className="grid">
            <h3 className="subTitle">Create a new password</h3>
            <TextField
              className="input-field"
              label="Current password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <TextField
              className="input-field"
              label="New password*"
              name="Newpassword"
              type="password"
              value={formData.Newpassword}
              onChange={handleInputChange}
            />

            <TextField
              className="input-field"
              label="Retype new password"
              name="Retypepassword"
              type="password"
              value={formData.Retypepassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="btn">
            <Button width="172px" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </ProfileWrap>
  );
};

export default UploadProfile;
