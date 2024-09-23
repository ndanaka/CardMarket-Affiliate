// eslint-disable-next-line react/prop-types
import React from "react";
const RegComment = ({ order, title, content }) => {
    return (
        <>
            <div className="mt-6 font-sans h-[120px] w-full flex gap-10 items-center">
                <p className="  border-red-600 border-[1px] border-l-[0px] h-full w-[70px]
                text-[70px] text-gray-300 font-semibold text-center py-1">
                    {order}
                </p>
                <div className=" w-[250px] text-[14px]">
                    <p className="font-bold text-[20px]">{title}</p>
                    <p>{content}</p>
                </div>
            </div>
        </>
    );
};

export default RegComment;
