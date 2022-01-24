import React from "react";
import { useNavigate } from "react-router-dom";
const SidebarRow = ({ Icon, title, path }) => {
  let navigate = useNavigate();
  return (
    <div
      className="sidebarRow"
      onClick={() => {
        navigate(`/${path}`);
      }}
    >
      <Icon className="sidebarRow_icon" />
      <h1 className="sidebarRow_title">{title}</h1>
      <hr />
    </div>
  );
};

export default SidebarRow;
