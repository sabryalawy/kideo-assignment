import React from "react";

import "./desktop15.css";

const NavBar = () => {
  return (
    <div className="desktop15-container1">
      <div className="desktop15-desktop15">
        <div className="desktop15-group18">
          <span
            className="desktop15-text292"
            onClick={() => {
              const el = document.getElementById("Vision");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Vision
          </span>
          <span
            className="desktop15-text293"
            onClick={() => {
              const el = document.getElementById("Voca Tooki");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Voca Tooki
          </span>
          <span
            className="desktop15-text294"
            onClick={() => {
              const el = document.getElementById("Preschool");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Preschool
          </span>
          <span
            className="desktop15-text295"
            onClick={() => {
              const el = document.getElementById("Testomonial");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Testomonial
          </span>
          <span
            className="desktop15-text296"
            onClick={() => {
              const el = document.getElementById("Team");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else;
            }}
          >
            Team
          </span>
          <span
            className="desktop15-text297"
            onClick={() => {
              const el = document.getElementById("Contact us");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Us
          </span>
          <img
            src="/asset110357-39sf-200h.png"
            alt="Asset110357"
            className="desktop15-asset112"
          />
          <div className="desktop15-group19">
            <div className="desktop15-group15">
              <img
                src="/image210360-h0qm-200h.png"
                alt="image210360"
                className="desktop15-image21"
              />
            </div>
            <img
              src="/rectangle60365-7umq-200h.png"
              alt="Rectangle60365"
              className="desktop15-rectangle6"
            />
            <span className="desktop15-text298">ENG</span>
            <img
              src="/arrow10367-0o3f.svg"
              alt="Arrow10367"
              className="desktop15-arrow1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
