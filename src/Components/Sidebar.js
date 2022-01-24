import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SidebarRow from "./SidebarRow";
import "./SidebarRow.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Modal from "@mui/material/Modal";
import AdmissionForm from "./AdmissionForm";

function Sidebar(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AdmissionForm onClick={handleOpen} />
        </Modal>
      )}
      <div className="header1">
        <AcUnitIcon />
        <span>
          <button onClick={handleOpen}>Get Admission</button>
          <button className="btn1">LMS</button>
          <button className="btn2">Report</button>
        </span>
      </div>
      <div className="Sidebar">
        <div className="sidebar1">
          <SidebarRow title="Home" Icon={HomeIcon} path="Sidebar" />

          <SidebarRow
            title="ExamMaster"
            Icon={AccountCircleIcon}
            path="ExamMaster"
          />
        </div>
        <div className="sidebar2"></div>
      </div>
    </div>
  );
}

export default Sidebar;
