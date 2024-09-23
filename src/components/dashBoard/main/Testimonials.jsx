import React from "react";
import UserText from "./UserText";
const Testimonials = () => {
    const text1 = 'Oripa is one of the most trustworthy brokers we work with. Tracking, conversions and account management are second to none.'
    const text2 = 'Oripa partner program is one of the best programs, which I have seen in between the biggest brokers, fortunately I got one of the best manager, and he helped me a lot in marketing plus for sure helping my clients correct.'
    const text3 = 'Working with Oripa for few years now, and I really believe they are the best and most honorable broker out there, tested many and still XMTrading is on the top of my list.'
    const name1 = 'Andrew Wright'
    const name2 = 'Kerry Doe'
    const name3 = 'Yamamoto Guzi'
    return (
        <div className="lg:p-40 p-5 w-full">
            <div className="w-full text-center border-gray-300 border-[0.5px] py-3 font-semibold text-gray-500">Testmonials</div>
            <UserText text={text1} name={name1} />
            <UserText text={text2} name={name2} />
            <UserText text={text3} name={name3} />
        </div>
    )
}
export default Testimonials;