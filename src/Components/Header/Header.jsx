import React from "react";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faDownload } from "@fortawesome/free-solid-svg-icons";
import { HeaderCopy } from "../../Constants";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Header() {
  const handlePrintClick = async () => {
    const element = document.getElementsByClassName('App')[0];
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
    pdf.save('LSEGchat.pdf');
  }
  return (
    <div className="header">
      <div className="headerItems">
        <FontAwesomeIcon icon={faRobot} size="2x" />
        <h3>{HeaderCopy.heading}</h3>
        <FontAwesomeIcon className="printIcon" icon={faDownload} size="2x"  onClick={handlePrintClick}/>
      </div>
    </div>
  );
}
