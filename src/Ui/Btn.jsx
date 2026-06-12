import React from "react";
import "./btn.css";
function Btn({ children, color, bg, outline }) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: bg,
      }}
    >
      {children}
    </button>
  );
}

export default Btn;
