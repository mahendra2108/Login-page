import React from "react";
import "./Master.css";
function Master() {
  return (
    <div>
      <div className="add_exam">
        <div className="add_exam">
          <span className="syllabus">
            <label>Syllabus</label>
            <input type="text" placeholder="Syllabus" />
          </span>
          <span className="exam_name">
            <label>Exam Name</label>
            <input type="text" />
          </span>
          <span className="status">
            <label>Status</label>
            <input type="text" placeholder="Active" />
          </span>
          <div className="button_add">
            <button className="add_button">Add</button>
          </div>
        </div>
      </div>
      <div className="entries_data">
        <div className="exam_list">
          <span>
            <p>
              Show <span className="entries">0</span>
              entries
            </p>
          </span>
          <span className="search ">
            <p>
              Search: <input />
            </p>
          </span>
        </div>
        <div className="table_data">
          <table>
            <tr>
              <th>Sl.no</th>
              <th>Exam name</th>
              <th>State</th>
              <th>Action</th>
              <th>Syllabus</th>
            </tr>
            <tr>
              <p>No data available in the table</p>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Master;
