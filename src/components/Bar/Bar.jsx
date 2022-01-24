import React from "react";
import "./index.scss";

const Bar = ({ value: { icon, name, level } }) => {
  const bar_width = `${level}%`;

  return (
    <div className="bar">
      <div
        className="bar__wrapper"
        style={{
          width: bar_width,
        }}
      >
        <span>
          <img src={icon} alt="icon" className="bar__wrapper-icon mr-2" />
          {name}
        </span>
      </div>
    </div>
  );
};

export default Bar;
