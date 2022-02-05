import axios from "axios";
import React, { useState } from "react";
function Login() {
  const [loginInfo, setLoginInfo] = useState({});
  const handleOnchange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    const { email, password } = loginInfo;
    console.log(email);
    e.preventDefault();
    axios
      .post("http://localhost:8081/users/login", { email, password })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <form>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            onChange={handleOnchange}
          />
          <input type="password" name="password" onChange={handleOnchange} />
          <button type="submit" onClick={handleSubmit}>
            SIGN UP
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
