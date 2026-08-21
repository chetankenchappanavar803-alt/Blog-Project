import React from "react";

function Button({ children,type = "button", className = "" ,...props}) {
  return (
    <button
      type= {type}
      className={`bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;