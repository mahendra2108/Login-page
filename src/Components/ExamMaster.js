import React, { useState } from "react";
import "./ExamMaster.css";
import Master from "./Master";
function ExamMaster() {
  const [isMaster, setIsMaster] = useState(false);

  return (
    <div>
      <div className="exam_master">
        <h2>Exam Master</h2>
        <div className="masster_button">
          <button
            className="exam_button"
            onClick={() => {
              setIsMaster((prev) => !prev);
            }}
          >
            Exam Master
          </button>

          <button className="subExam_btn">Sub Exam Master</button>
          <button className="grade_btn">Grade Master</button>
          <button className="marks_btn">Marks Entry</button>
        </div>
      </div>
      <div className="master">{isMaster ? <Master /> : ""}</div>
    </div>
  );
}

export default ExamMaster;
