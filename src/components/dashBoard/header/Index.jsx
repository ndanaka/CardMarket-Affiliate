import React, { useState } from "react";
import NavBar2 from "./NavBar2";
import NavBar1 from "./NavBar1";
import HiddenBar from "./HiddenBar";
const DashHeader = () => {
    const [collapse, setCollapse] = useState(false)
    return (
        <div className="bg-[#0c2148] font-[sans-serif] ">
            <NavBar1 setCollapse={setCollapse}/>
            <NavBar2 />
            <HiddenBar collapse={collapse} setCollapse={setCollapse} />
        </div>
    )
}
export default DashHeader;
