import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
function Signup() {
  const [userInfo, setUserInfo] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    setIsDisabled((prev) => !prev);
    e.preventDefault();
    const { email, password } = userInfo;
    axios
      .post("http://localhost:8081/users/signup", { email, password })
      .then((res) => {
        console.log("성공");
      })
      .catch((err) => {
        console.log(err);
      });
    setIsDisabled((prev) => !prev);
  };
  return (
    <>
      <div className="signup_container">
        <form className="signup_form">
          <input
            type="email"
            name="email"
            className="signup_form_input"
            placeholder="enter email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="signup_form_input"
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={isDisabled}
            onClick={handleSubmit}
            className="signup_form_btn"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
