import { useState, useEffect } from "react";
import axios from "axios";

//import Login from "./Login.js";
import Signup from "./Signup.js";
function App() {
  return (
    <>
      <Signup path="/signup" />
    </>
  );
}

export default App;
