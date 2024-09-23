import React from "react";
const UserText = ({ text, name }) => {
    return (
        <div className="border-l-red-600 border-l-[4px] my-6 px-2 font-sans">
            <p className="">{text}</p>
            <span className=" text-red-600">{name}</span>
        </div>
    )
}
export default UserText;