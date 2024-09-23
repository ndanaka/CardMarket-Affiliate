import React from "react";
import dsahboard from '../../../../public/jsonfile/dashboard.json'
const Regualtion = () => {
    const {regulation}={...dsahboard}
    return (
        <p className="font-sans text-[14px] text-gray-400 pt-10 mt-10 border-t-[0.5px] border-t-gray-300 leading-8 ">
            {regulation}
        </p>
    )
}
export default Regualtion;