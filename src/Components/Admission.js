import React from "react";
import "./Admission.css";
function Admission(props) {
  const { label, name, placeholder } = props;
  return (
    <div className="admission">
      <label>{label}</label>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
}

export default Admission;
