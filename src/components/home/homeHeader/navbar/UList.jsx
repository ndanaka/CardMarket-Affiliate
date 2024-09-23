import React from "react";

const NavUList = ({ children }) => {
    return (
        <>
            <ul className=" w-[200px] absolute left-0 top-12 list-none border-[1px] border-gray-400 border-t-0">
                {children}
            </ul>
        </>
    )
}
export default NavUList;