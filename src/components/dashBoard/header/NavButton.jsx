import React from "react";
const NavButton = ({ className, label, handle }) => {
    return (
        <button onClick={handle} className={`${className} text-gray-300 m-3 border-white font-semibold`}>
            {label}
        </button>
    )
}
export default NavButton;