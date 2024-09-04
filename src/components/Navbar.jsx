// import "./custom.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          WebsiteName
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#objective">
                Objectives
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
          </ul>
          <Link to="/sign-in">
            <button
              className="btn btn-outline-primary mx-3"
              style={{ borderRadius: "50px", fontSize: "15px" }}
              type="button"
            >
              Sign In
            </button>
          </Link>
          <Link to="/sign-up">
            <button
              className="btn btn-primary"
              style={{ fontSize: "15px" }}
              type="button"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
