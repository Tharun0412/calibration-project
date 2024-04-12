import React from "react";
import XiotaLogo1 from "../../images/XIOTA-Logo.ico";
import "../../styles/testreport/MeterTest01.css";

const Metertestr1 = () => {
  return (
    <div id="metertest1">
      <table id="metertestid">
        <tr>
          <td rowSpan={4}>
            <img src={XiotaLogo1} className="xiotalogo" />
          </td>
          <td rowSpan={4} className="testid">
            Routine Test Report For <br></br> 1-Phase Whole Current <br></br>{" "}
            Meter
          </td>
          <td id="text1"></td>
          <td id="text1">Nature: </td>
          <td id="text1">Format </td>
        </tr>
        <tr>
          <td id="text1"></td>
          <td id="text1">Doc No: </td>
          <td id="text1">XIO/MFG/F/11</td>
        </tr>
        <tr>
          <td id="text1"></td>
          <td id="text1">Date:</td>
          <td id="text1">Format </td>
        </tr>
        <tr>
          <td id="text1"></td>
          <td id="text1">REV & VER: </td>
          <td id="text1">Format </td>
        </tr>
        <tr>
          <td id="companyDtls" colSpan={5}>
            XIOTA INDIA PVT LTD <br></br> B24, 3rd Cross ITI
            Ind.Est.Mahadevapura,bangalore-560048
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Metertestr1;
