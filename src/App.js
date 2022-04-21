import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import DashBoard from "./DashBoard";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  // const Usertoken = localStorage.getItem("token");
  const isAuthenticated = useSelector((state) => {
    return state.signInData.isAuthenticated;
  });
  console.log("isauth ==>", isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        {
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <>
                  {console.log("hrerer")}
                  <DashBoard />
                </>
              ) : (
                <SignIn />
              )
            }
          >
            {" "}
          </Route>
        }
      </Routes>
    </BrowserRouter>
  );
};
export default App;
// isAuthenticated ? (
//       <Route path="/dashboard" element={<DashBoard />}>
//         {" "}
//         ):(<Route index element={<SignIn />}></Route>
//       </Route>
//       )
