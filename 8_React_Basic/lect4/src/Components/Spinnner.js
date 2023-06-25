import React from "react";
import './Spinner.css'

export default function Spiner() {
  return (
    <div className=" flex flex-col items-center space-y-2">
      <div className="spinner"></div>

      <p className=" to-bgDark txlg font-semibold">Lodding....</p>
    </div>
  );
}
