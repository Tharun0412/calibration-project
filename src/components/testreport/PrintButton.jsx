import React from "react";
import Metertestr1 from "./Metertestr1";
import "../../styles/testreport/Printbtn.css";

class PrintButton extends React.Component {
  handlePrint = () => {
    // Store the current URL
    const originalUrl = window.location.href;

    // Temporarily change the URL to hide localhost:3000
    window.history.replaceState({}, document.title, "/");

    // Hide title and elements with hide-on-print class before printing
    const originalTitle = document.title;
    document.title = "";
    document.querySelectorAll(".hide-on-print").forEach((el) => {
      el.classList.add("hide-on-print");
    });

    // Print the document
    window.print();

    // Restore the original URL and title after printing
    window.history.replaceState({}, document.title, originalUrl);
    document.title = originalTitle;

    // Remove hide-on-print class after printing
    document.querySelectorAll(".hide-on-print").forEach((el) => {
      el.classList.remove("hide-on-print");
    });
  };

  render() {
    return (
      <div>
        <button className="no-print" onClick={this.handlePrint}>
          Print
        </button>
        <Metertestr1 />
      </div>
    );
  }
}

export default PrintButton;
