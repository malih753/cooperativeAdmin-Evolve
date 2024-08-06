import React, { useState } from "react";
import Table from "../../Table";
import { CoachFeedbackCol, CoachFeedbackData } from "../ReportData";
import Modal from "../../Modal/index";
import FeedbackPopup from "../FeedbackPopup";
const CoachFeedback = () => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const handleImageClick = () => {
    setFeedbackOpen(true);
  };
  return (
    <div>
      <div className="wrapper">
        <strong className="title">Caoch Feedback</strong>
        <Table
          columns={CoachFeedbackCol}
          data={CoachFeedbackData}
          border={true}
          onImageClick={handleImageClick}
        />
      </div>
      {feedbackOpen && (
        <Modal open={feedbackOpen} setOpen={setFeedbackOpen} width="626px">
          <FeedbackPopup />
        </Modal>
      )}
    </div>
  );
};

export default CoachFeedback;
