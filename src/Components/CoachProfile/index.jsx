import React, { useEffect, useState } from "react";
import { CoachWrap } from "./Caoch.styles";
import SearchBar from "../TextField/SearchBar";
import Profile from "./profile";
import { useAuth } from "../Context/Context";
import { serverDomain } from "../../Constants/serverDomain";

const CoachProfile = () => {
  const [coachProfiles, setCoachProfiles] = useState([]);
  const { user } = useAuth();

  const getCoachProfiles = async () => {
    try {
      const response = await fetch(`${serverDomain}/home`);
      const data = await response.json();
      setCoachProfiles(data.data.coachProfiles);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoachProfiles();
  }, []);

  return (
    <CoachWrap>
      <div className="searchbar">
        <SearchBar />
      </div>
      <div className="profile">
        <Profile coachProfiles={coachProfiles} />
      </div>
    </CoachWrap>
  );
};

export default CoachProfile;
