import React from "react";
import Admission from "./Admission";
import "./AdmissionForm.css";
import CloseIcon from "@mui/icons-material/Close";

function AdmissionForm(props) {
  return (
    <div className="form">
      <div className="header">
        <h1>Quick Admission</h1>

        <button>
          <CloseIcon />
        </button>
      </div>
      <hr />
      <div>
        <div className="admissionForm">
          <div className="row1">
            <Admission label="Name" name="name" placeholder="Student Name" />
            <Admission
              label="Syllabus Type"
              name="name"
              placeholder="Select Syllabus"
            />

            <Admission
              label="Father/Gaurdian Name"
              name="name"
              placeholder="Father Name"
            />
            <Admission
              label="FatherAadhar No"
              name="name"
              placeholder="Father Aadhar No"
            />
          </div>
          <div className="row2">
            <Admission
              label="Admission No"
              name="name"
              placeholder="Admission No"
            />
            <Admission label="Class" name="name" placeholder="Select Class" />
            <Admission
              label="Father/Gaurdian Mobile No"
              name="name"
              placeholder="Father Mobile No "
            />
            <Admission
              label="Father PAN No"
              name="name"
              placeholder="Father PAN No"
            />
          </div>
        </div>
        <div className="address">
          <label>Permanent Address</label>
          <textarea placeholder="Permanent Address" />
        </div>
      </div>

      <hr />
      <div className="buttons">
        <button className="save">Save</button>
        <button className="add">Save & Add</button>
        <button className="close" onClick={props.onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default AdmissionForm;
