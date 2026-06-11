import React from "react";

function Btn({ children, color, bg }) {
  return (
    <button style={{ color: color, backgroundColor: bg }}>{children}</button>
  );
}

export default Btn;
