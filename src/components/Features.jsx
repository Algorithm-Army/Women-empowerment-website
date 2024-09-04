import { Link } from "react-router-dom";
function Features() {
  return (
    <>
      <h3 className="sub-head">Emergency Toolkits</h3>
      <div className="featureBox">
        <a href="/">
          <div className="feature-card">
            <span className="feature-icon">
              <img
                src="src/components/images/sos-icon-m.png"
                alt=""
                style={{ width: "6em" }}
              />
            </span>
            <p className="feature-des">Emergency SOS</p>
          </div>
        </a>
        <a href="/">
          <div className="feature-card">
            <span className="feature-icon">
              <img
                src="src/components/images/contact-icon-m.png"
                alt=""
                style={{ width: "5em" }}
              />
            </span>
            <p className="feature-des">Contact Helpline</p>
          </div>
        </a>
        <a href="/">
          <div className="feature-card">
            <span className="feature-icon">
              <img
                src="src/components/images/chat-icon-m.png"
                alt=""
                style={{ width: "7em" }}
              />
            </span>
            <p className="feature-des">Chat Here</p>
          </div>
        </a>
        <Link to="/live-location">
          <div className="feature-card">
            <span className="feature-icon">
              <img
                src="src/components/images/location-icon-m.png"
                alt=""
                style={{ width: "7em" }}
              />
            </span>
            <p className="feature-des">Location Tracking</p>
          </div>
        </Link>
        <a href="/">
          <div className="feature-card">
            <span className="feature-icon">
              <img
                src="src/components/images/voice-icon-m.png"
                alt=""
                style={{ width: "5em" }}
              />
            </span>
            <p className="feature-des">Voice Tracking</p>
          </div>
        </a>
      </div>
      <div id="objective">.</div>
    </>
  );
}
export default Features;
