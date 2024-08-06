import React from "react";
import { ProfileWrapper } from "./Profile.styles";
import { CoachProfile } from "../../Constant/Data";
import stars from "../../../assets/session/stars.png";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";
import { serverDomain } from "../../../Constants/serverDomain";
const Profile = ({ coachProfiles }) => {
  const navigate = useNavigate();
  const backToCoachProfile = (id) => {
    navigate("/MyProfile", { state: { id } });
  };
  return (
    <ProfileWrapper>
      <div className="wrapper">
        <strong className="heading">Coach Profile</strong>

        <div className="cardsHolder">
          {coachProfiles?.map((val, ind) => (
            <div className="card" key={ind}>
              <figure className="thumb">
                <img src={`${serverDomain}${val.avatar}`} alt={val.avatar} />
              </figure>
              <div className="textWrapper">
                <div className="textWrap">
                  <strong className="title">
                    {val.firstName + " " + val.lastName}
                  </strong>
                  <strong className="subTitle">
                    {val.coachingExperience[ind]?.title}
                  </strong>
                  <strong className="subTitle">{val.designation}</strong>
                </div>
                <div className="session">
                  <span>{CoachProfile[ind].title}</span>
                  <span>{CoachProfile[ind].title1}</span>
                </div>
                <div className="reviewHolder">
                  <div className="review">
                    <img src={stars} alt="stars" />
                    <span>{CoachProfile[ind].review}</span>
                  </div>
                  <Button width="138px" onClick={() => backToCoachProfile(val.id)}>
                    Book Session
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
