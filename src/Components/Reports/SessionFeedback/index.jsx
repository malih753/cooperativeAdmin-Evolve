import React, { useState } from "react";
import Table from "../../Table";
import { feedbackCol, feedbackData } from "../ReportData";
import Modal from "../../Modal";
import FeedbackPopup from "../FeedbackPopup";
import { FeedbackWrap } from "./feedback.styles";

const SessionFeedback = () => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const handleImageClick = () => {
    setFeedbackOpen(true);
  };
  return (
    <FeedbackWrap>
      <div className="wrapper">
        <strong className="title"> Session Feedback</strong>
        <Table
          columns={feedbackCol}
          data={feedbackData}
          border={true}
          onImageClick={handleImageClick}
        />
      </div>
      {feedbackOpen && (
        <Modal open={feedbackOpen} setOpen={setFeedbackOpen} width="626px">
          <FeedbackPopup />
        </Modal>
      )}
    </FeedbackWrap>
  );
};

export default SessionFeedback;
