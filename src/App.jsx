import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Location from "./pages/Location";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/sign-in" element={<Signin />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path="/live-location" element={<Location />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
