import React from "react";
import { ForumWrap } from "./Forum.styles";
import FeedCard from "./FeedCard";
import AnonymousHeader from "./AnonymousHeader";

const AnonymousForums = () => {
  return <ForumWrap>
    <AnonymousHeader/>
    <FeedCard/>
  </ForumWrap>
};

export default AnonymousForums;
