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
        setIsDisabled((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
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
          {/* <p className="signup_pw_inavailable">
            비밀번호는 숫자와 영문자 조합하여 8~15자리를 사용해야 합니다
          </p>
          <p className="signup_pw_available">사용가능한 비밀번호입니다</p> */}
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
