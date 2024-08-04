import React from "react";
import { CircleCheck } from "lucide-react";
import "../styles/DownloadComplete.css";
import { Link } from "react-router-dom";

function DownloadComplete() {
  return (
    <Link to="/home">
      <div className="d-c-maindiv">
        <div className="d-c-section">
          <h1 className="d-c-heading">Download Complete</h1>
          <CircleCheck size={50} strokeWidth={2} />
        </div>
      </div>
    </Link>
  );
}

export default DownloadComplete;
