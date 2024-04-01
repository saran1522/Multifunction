import React from "react";
import { useNavigate } from "react-router-dom";

function ItemBox({ headline, path, isDark, icon: Icon }) {
  console.log(headline, path);
  const navigate = useNavigate();
  return (
    <div
      className={`HomeBox ${isDark ? "dark" : ""}`}
      onClick={() => {
        navigate(`${path}`);
      }}
    >
      <span className="boxIcon">
        <Icon />
      </span>
      <span className="boxTagline">{headline}</span>
    </div>
  );
}

export default ItemBox;
