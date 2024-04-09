import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import username_logo from "../images/user_icon.png";
import password_logo from "../images/password.png";

const CalibrationLogin = () => {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  // const navigate = useNavigate(); // Get the navigate function

  const navigate = useNavigate();

  const emailData = (e) => {
    setUserName(e.target.value);
  };

  const passData = (e) => {
    setPassword(e.target.value);
  };

  const calibrationlogin = async (e) => {
    e.preventDefault();
    let data = { userName, password };
    await axios
      .post("http://localhost:8080/login", data)
      .then((res) => {
        alert(" signup sucess");
        console.log("sucessss");
        navigate("/");
      })

      .catch((err) => {
        if (err.response && err.response.data && err.response.data.token) {
          // Display the error message from the response data
          alert(err.response.data.token);
        } else {
          // If the error response data doesn't contain the token field, display a generic error message
          alert("An error occurred: " + err.message);
        }
        console.log("error:", err);
      });

    // .catch((err) => {
    //   alert("test");
    //   alert("this not format form " + err.response.data.token);
    //   console.log("not bad");
    // });
  };

  // Function to navigate to the sign-up page
  // const goToSignUp = () => {
  //   navigate("/CalibrationSignup"); // Navigate to the sign-up page
  // };

  return (
    <div>
      <div className="calibrationlogin">
        <div className="usrlogin">
          <form action="">
            <div className="usrlogin1">
              <div className="usrlogintxt">
                <h3>Log in</h3>
                <pre>to Your account</pre>
              </div>
              <div className="iptform">
                <div className="logph">
                  <img src={username_logo} />
                  <input
                    type="text"
                    placeholder="Enter the UserName"
                    value={userName}
                    onChange={emailData}
                  />
                </div>
                <div className="logpass">
                  <img src={password_logo}></img>
                  <input
                    type="password"
                    placeholder="****"
                    value={password}
                    onChange={passData}
                  />
                </div>
              </div>
              <div className="doclgbtn">
                <button className="docbtn1" onClick={calibrationlogin}>
                  Log in
                </button>
              </div>
              <div className="regdoclnk">
                <pre>Don't you have an account?</pre>
                {/* Call goToSignUp function when the "Sign up" button is clicked */}
                <Link to="/SignUp">
                  <h6>Sign up</h6>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CalibrationLogin;
