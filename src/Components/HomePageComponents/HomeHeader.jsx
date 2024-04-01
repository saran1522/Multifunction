import React from "react";

function HomeHeader({ isDark, txtColDark, txtColLight }) {
  return (
    <div className="HomeMain">
      <div className="HomeIntro">
        <h1
          className="HomeHeading"
          style={{
            color: isDark ? txtColDark : txtColLight,
          }}
        >
          Multifunction Nexus
        </h1>
        <p
          style={{
            color: isDark ? txtColDark : txtColLight,
            fontSize: "1.3rem",
          }}
        >
          The multi-services platform for all your needs and requirements.
        </p>
        <button
          className="HomeLabel"
          style={
            isDark
              ? {
                  color: txtColDark,
                  border: `1px solid ${txtColDark}`,
                }
              : {
                  color: txtColLight,
                  border: `1px solid ${txtColLight}`,
                }
          }
        >
          <span>Scroll down to start</span>{" "}
          <img
            src="/arrow-down.gif"
            alt=""
            style={{
              filter: isDark ? "invert(.9)" : "invert(0)",
            }}
          />
        </button>
      </div>
      <div className="HomeImage">
        <img
          src="/home-img.png"
          alt=""
          style={{
            filter: isDark
              ? "drop-shadow(0 0 20px rgba(80, 79, 79, 0.932))"
              : "drop-shadow(0 0 10px rgba(206, 205, 205, 0.932))",
          }}
        />
      </div>
    </div>
  );
}

export default HomeHeader;
