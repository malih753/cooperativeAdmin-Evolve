import React from "react";
import { FeedbackWrap } from "./FeedbackPopup.styles";

const FeedbackPopup = () => {
  return (
    <FeedbackWrap>
      <strong className="title">Feedback Popup</strong>
      <table>
        <thead>
          <tr>
            <th>Rating</th>
            <th>Employee Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>00</td>
            <td>200</td>
          </tr>
          <tr>
            <td>01</td>
            <td>100</td>
          </tr>
          <tr>
            <td>02</td>
            <td>300</td>
          </tr>
          <tr>
            <td>03</td>
            <td>500</td>
          </tr>
          <tr>
            <td>04</td>
            <td>200</td>
          </tr>
          <tr>
            <td>05</td>
            <td>500</td>
          </tr>
        </tbody>
      </table>
    </FeedbackWrap>
  );
};

export default FeedbackPopup;
