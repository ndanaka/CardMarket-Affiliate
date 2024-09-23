import React from "react";
import Link from "./Link";

const AffiLinks = () => {
    return (
        <>
            <div className="font-sans font-semibold pl-20 mt-10 text-[26px] pb-1">Affiliate Links</div>
            <div className="flex flex-wrap justify-center px-16 gap-10 max-[900px]:px-3 mb-10">
                <Link pageName={'Homepage'} PageId={0} ReqId={'AD1234142'} />
                <Link pageName={'Regestration'} PageId={1} ReqId={'AD1234142'} />
                <Link pageName={'LogIn'} PageId={2} ReqId={'AD1234142'} />
                <Link pageName={'Contact'} PageId={3} ReqId={'AD1234142'} />
                <Link pageName={'Help'} PageId={4} ReqId={'AD1234142'} />
                <Link pageName={'Card'} PageId={5} ReqId={'AD1234142'} />
            </div>
        </>
    )
}
export default AffiLinks