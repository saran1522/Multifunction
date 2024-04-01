import "../App.css";
import React, { useState } from "react";
import ItemBox from "../Components/HomePageComponents/ItemBox";
import { HomeBoxData } from "../Config/HomeBoxData";
import HomeHeader from "../Components/HomePageComponents/HomeHeader";

function Home() {
  const [isDark, setIsDark] = useState(false);
  const bgColDark = "rgb(26, 26, 26)";
  const bgColLight = "white";
  const txtColDark = "rgb(195, 212, 233)";
  const txtColLight = "rgb(34, 42, 75)";
  return (
    <div
      className="HomePageContainer"
      style={{
        backgroundColor: isDark ? bgColDark : bgColLight,
        color: isDark ? txtColDark : txtColLight,
      }}
    >
      <button
        className="HomeModeBtn"
        onClick={() => {
          setIsDark((dark) => !dark);
        }}
        style={
          isDark
            ? {
                color: txtColDark,
                border: `1px solid  + ${txtColDark}`,
              }
            : { color: txtColLight, border: `1px solid ${txtColLight}` }
        }
      >
        {isDark ? "light" : "dark"}
      </button>
      <HomeHeader
        isDark={isDark}
        txtColDark={txtColDark}
        txtColLight={txtColLight}
      />
      <div className="HomeBoxContainer">
        {HomeBoxData.map((box, i) => (
          <ItemBox
            key={i}
            headline={box.headline}
            path={box.path}
            isDark={isDark}
            icon={box.icon}
            txtColDark={txtColDark}
            txtColLight={txtColLight}
          ></ItemBox>
        ))}
      </div>
    </div>
  );
}

export default Home;
