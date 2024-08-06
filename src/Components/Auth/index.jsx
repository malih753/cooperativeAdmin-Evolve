import React, { useContext, useState } from "react";
import { SignUpWrapper } from "./SignUp.styles";
import Logo from "../../assets/authentication/Logo.png";
import bgImg from "../../assets/authentication/bg-img.png";
import TextField from "../TextField/TextField";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "../Context/Context";
import { serverDomain } from "../../Constants/serverDomain";

const SignUp = () => {
  const navigate = useNavigate();
  const { setEmail ,companyId} = useAuth();
  const [emailInput, setEmailInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail(emailInput);

    try {
      const res = await fetch(`${serverDomain}/user?email=${emailInput}&companyId=${companyId}`);


      // if (!res.ok) {
      //   throw new Error("Something went wrong");
      // }

      const data = await res.json();

      console.log(data);
      if(data.status === false){
        navigate("/otp");
      }

     else{
      navigate("/dashboard");
     }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setEmailInput(e.target.value);
  };

  return (
    <SignUpWrapper>
      <div className="imgHolder">
        <img src={bgImg} alt="" />
      </div>
      <div className="formHolder">
        <form onSubmit={handleSubmit}>
          <div className="textHolder">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <p>
              Welcome to our Evolve - X platform!
              <br /> Enhance your skills and broaden your knowledge.
            </p>
          </div>
          <div className="inputHolder">
            <TextField
              parentClass="emailWrapper"
              className="input-field"
              field_Name="email"
              type="email"
              placeholder="Enter Your Official Email-id"
              value={emailInput}
              onChange={handleInputChange}
              bgClr="rgba(255, 255, 255, 0.37)"
            />
          </div>
          <Button width="208px" type="submit">
            Continue
          </Button>
        </form>
      </div>
    </SignUpWrapper>
  );
};

export default SignUp;
