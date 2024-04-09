import React, { useState, useRef } from "react";
import axios from "axios";
import "../../styles/reports/CalibrationInfoRpt.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CalibrationInfoRpt() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const endDatePickerRef = useRef(null); // Ref for the end date picker
  const [calibrationData, setCalibrationData] = useState([]);

  // useEffect(() => {
  //   fetchData(); // Fetch data when component mounts or startDate/endDate changes
  // }, [startDate, endDate]); // Specify dependencies

  const fetchData = () => {
    alert("test");
    let date = [startDate, endDate];
    axios
      .get("http://localhost:8080/person-Info")
      .then((response) => {
        alert("Success " + response.data);
        alert("Success " + response.data.body);
        // Set fetched data to state
        setCalibrationData(response.data.body);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);

    // Close the start date picker
    if (endDatePickerRef.current !== null) {
      endDatePickerRef.current.setOpen(false);
    }

    setTimeout(() => {
      if (endDatePickerRef.current !== null) {
        endDatePickerRef.current.setOpen(true);
      }
    }, 10);
  };

  const handleEndDate = (date) => {
    setEndDate(date);
    fetchData();
  };

  return (
    <div>
      <div className="dateInfo">
        <h1>FROM DATE</h1>
        <DatePicker selected={startDate} onChange={handleStartDateChange} />
        <h1>TO DATE</h1>
        <DatePicker
          selected={endDate}
          onChange={handleEndDate}
          ref={endDatePickerRef} // Assign the ref to the end date picker
        />
      </div>

      <div className="table-container">
        <table className="my-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {calibrationData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CalibrationInfoRpt;
