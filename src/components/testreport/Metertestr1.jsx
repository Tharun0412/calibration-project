import React from "react";
import XiotaLogo1 from "../../images/XIOTA-Logo.ico";
import "../../styles/testreport/MeterTest01.css";

const Metertestr1 = () => {
  return (
    <div id="metertest1">
      <div id="container">
        <table id="metertestid" className="custom-table">
          <tr>
            <td rowSpan={4} className="logoid">
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
      <table id="tableid2" className="custom-table">
        {/* <div id="divcontainer2"> */}
        <tr>
          <td id="centerdisplay">Single phase Meter Test Report</td>
        </tr>
        <tr>
          <td id="centerdisplay1">
            AC Static direct connected WATT-HOUR Smart Meter
            1Phase,2Wire,240V,50Hz,10-60A
          </td>
        </tr>
        <tr>
          <td colSpan={2} id="meterTypeCell">
            Meter Type:
          </td>
          <td id="meterConstantCell">Meter Constant:</td>
        </tr>
        <tr>
          <td colSpan={2} id="meterTypeCell">
            Meter Sr.No:
          </td>
          <td id="meterConstantCell">Class(Active):</td>
        </tr>
        <tr>
          <td colSpan={2} id="meterTypeCell">
            Customer:
          </td>
          <td id="meterConstantCell">Test Date:</td>
        </tr>
        <tr>
          <td id="isoid">
            Standard: IS16444(part-1) :2020 & IS15959(pat-2) : 2021 with Latest
            Amendment
          </td>
        </tr>
      </table>

      <table id="tableid3" className="custom-table">
        <tr>
          <td id="slno">1</td>
          <td id="description">
            ac High Voltage Test(as per cl.6.10.6 of IS 16444:2020)
          </td>
          <td id="status">Pass/Fail</td>
        </tr>
        <tr>
          <td id="slno">2</td>
          <td id="description">
            Insulation Resistance Test (as per cl. 6.10.6 of IS 16444:2020)
          </td>
          <td id="status">Pass/Fail</td>
        </tr>{" "}
        <tr>
          <td id="slno">3</td>
          <td id="description">
            Test of No Load Condition (as per cl.6.12 of IS 16444:2020)
          </td>
          <td id="status">Pass/Fail</td>
        </tr>{" "}
        <tr>
          <td id="slno">4</td>
          <td id="description">
            Starting Current Test (as per cl. 6.10.6 of IS 16444:2020)
          </td>
          <td id="status">Pass/Fail</td>
        </tr>{" "}
        <tr>
          <td id="slno">5</td>
          <td id="description">
            Limits of Error(as per cl. 6.10.6 of IS 16444:2020)
          </td>
          <td id="status">Pass/Fail</td>
        </tr>
        <tr>
          <td id="slno">5a</td>
          <td id="description" colSpan={2}>
            Conditon: Vref-240V, Ib-10A, Imax-60A, Temp-27&#xB0;C &plusmn; 2
            &deg;C, Relative Humidity&lt;70%
          </td>
        </tr>
        <tr>
          <td id="slno">5b</td>
          <td id="description" colSpan={2}>
            Error shown in the tables are given after accounting the error of
            reference meter.
          </td>
        </tr>
        <tr>
          <td id="slno">5c</td>
          <td id="description" colSpan={2}>
            Reference Meter serial number
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Class
            0.05 traceable to international standards.
          </td>
        </tr>
      </table>
      <div className="container2">
        <h1>&#x0025; Active Errors</h1>
        <table id="tableid4">
          <tr>
            <th rowSpan={2}>Load</th>
            <th rowSpan={2}>
              Current<br></br>(in A)
            </th>
            <th colSpan={3}>Phase</th>
            <th colSpan={3}>Neutral</th>
          </tr>
          <tr>
            <th>UPF</th>
            <th>0.5 Lag</th>
            <th>0.8 Lead</th>

            <th>UPF</th>
            <th>0.5 Lag</th>
            <th>0.8 Lead</th>
          </tr>
          <tr>
            <td>Imax</td>
            <td>60</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Ib</td>
            <td>10</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>0.2 Ib</td>
            <td>2</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>0.1 Ib</td>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>0.05 Ib</td>
            <td>0.5</td>
            <td></td>
            <td>Not applicable</td>
            <td>Not applicable</td>
            <td></td>
            <td>Not applicable</td>
            <td>Not applicable</td>
          </tr>
        </table>
      </div>

      <table id="tableid5">
        <tr>
          <td id="slno">6</td>
          <td id="description" colSpan={3}>
            IS 15959 (Part 2):2021 with Latest Amendment
          </td>
        </tr>
        <tr>
          <td id="slno">6a</td>
          <td id="description">Relay Connect / Dis-Connect</td>
          <td id="status">Cl.No.10</td>
          <td id="status">Pass/Fail</td>
        </tr>
        <tr>
          <td id="slno">6b</td>
          <td id="description">Instantaneous profile</td>
          <td id="status">Cl.No.11.1.1</td>
          <td id="status">Pass/Fail</td>
        </tr>

        <tr>
          <td id="slno">6c</td>
          <td id="description">Programmable Parameter</td>
          <td id="status">Cl.No.15, Table A13</td>
          <td id="status">Pass/Fail</td>
        </tr>
      </table>

      <div className="container3">
        <h2>Tested by:</h2>
        <h2>Verified by:</h2>
      </div>

      <div className="container4">
        <h2>(Testing Engineer)</h2>
        <h2>(Quality manager)</h2>
      </div>
      <div className="container5">
        <table id="tableid6" className="custom-table">
          <tr>
            <td>
              PREPARED BY <br></br>Ms.Subhashini
            </td>
            <td>
              REVIEWED BY <br></br> Mr.VAIIJINATH NEMADE
            </td>
            <td>
              APPROVED BY<br></br> Mr.Surendra Zope
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              XIOTA INDIA PRIVATE LIMITED<br></br> page 1 of 1
            </td>
          </tr>
        </table>
      </div>

      <div>
        <h3> Doc No:XIO/MFG/F/11 Rev. 1.00</h3>
      </div>
    </div>
  );
};

export default Metertestr1;
