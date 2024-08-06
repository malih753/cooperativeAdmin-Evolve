import React from "react";
import { HeaderWrap, ToggleButton } from "./Header.styles";
import Logo from "../../assets/header/logo.png";
import MainLogo from "../../assets/header/mainLogo.png";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import profile from "../../assets/header/profile.png";
const Header = ({ toggleSidebar }) => {
  return (
    <HeaderWrap>
      <div className="container">
        <div className="logos">
        <ToggleButton onClick={toggleSidebar}>
        <RxHamburgerMenu />
          </ToggleButton>
          <Link to="/">
            <img src={Logo} alt="logo" className="logo" />
            <img src={MainLogo} alt="MainLogo" className="mainLogo" />
          </Link>
          
        </div>
        <div className="heading">
          <h2 className="title">Hi Corporate Admin , welcome back !</h2>
         <Link to="/CompanyProfile"> <img src={profile} alt="profile" /></Link>
        </div>
      </div>
    </HeaderWrap>
  );
};

export default Header;
