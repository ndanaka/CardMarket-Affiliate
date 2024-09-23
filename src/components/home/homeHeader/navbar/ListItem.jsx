import { useAtom } from "jotai";
import React from "react";
import { showNavAtom } from "../../../../store/index";

const NavListItem = ({ label, handle, coloredName }) => {
    const [showNav, setShowNav] = useAtom(showNavAtom);
    return (
        <>
            <li className="bg-gray-100 hover:bg-white border-l-[3px] hover:border-l-red-600 border-b-gray-400 border-b-[1px]
             py-2 px-4 cursor-pointer w-full z-50"
                onClick={() => {
                    handle();
                    setShowNav((t) => ({ ...t, list: '', color: coloredName }));
                }}
            >
                -&nbsp;{label}
            </li >
        </>
    )
}
export default NavListItem;