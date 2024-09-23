import React from "react";
const Contact = () => {
  return (
    <>
      <div className="flex flex-wrap p-20 justify-between max-[760px]:p-10">
        <div className="font-sans w-[50%] max-[1000px]:w-full opacity-95 text-gray-900 bg-[white]">
          <p className="font-semibold text-3xl mb-7">Contact Us</p>
          <p>
            We are here to help you easily find the exact answers to your
            questions and offer you the best user experience! If you can't find
            what you are looking for, or need further help please contact us by
            live chat or email.
          </p>
          <div className="flex flex-wrap justify-start gap-10 w-full mt-16">
            <div>
              <p className=" font-medium text-[17px] mb-4">
                <i className="fa fa-clock-o text-[red]" />
                SUPPORT DESK
              </p>
              <p>
                <i className="fas fa-user-clock text-[red] w-8" />
                Working hours: 24/5 GMT
              </p>
              <a
                href="mailto:support@xmtrading.com"
                className="text-[red] hover:underline"
              >
                <i className="fa fa-envelope text-[red] w-8" />
                support@xmtrading.com
              </a>
            </div>
            <div>
              <p className=" font-medium  text-[17px] mb-4">
                <i className="fa fa-clock-o text-[red]" />
                AFFILIATE DEPARTMENT
              </p>
              <p>
                <i className="fas fa-user-clock text-[red] w-8" />
                Working hours: 07:00 – 16:00 GMT
              </p>
              <a
                href="mailto: ib@xmtrading.com"
                className="text-[red] hover:underline"
              >
                <i className="fa fa-envelope text-[red]  w-8" />
                ib@xmtrading.com
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-white to-gray-300 w-[40%] max-[1000px]:hidden py-20 px-10 ">
          <img
            className="opacity-50 hover:opacity-100 duration-300 "
            src="/image/bg/building1.jpg"
          />
        </div>
      </div>
    </>
  );
};
export default Contact;
