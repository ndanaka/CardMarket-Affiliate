import React from "react";
const SignButton = ({ children, className, handle }) => {
    return (
        <button onClick={handle} className={`${className} w-300px h-70px text-white text-2xl px-3 py-3 w-[500px] max-lg:w-[600px] max-lg:mx-2`} >
            {children}
        </button>
    )
}
export default SignButton;
