import Step from "./Step";

const Example = () => {
  return (
    <>
      <div className="bg-white px-10 py-5 max-[900px]:px-3 max-[900px]:w-full max-[1400px]:w-[65%] w-[75%]  shadow-lg shadow-gray-400 pb-10">
        <h3 className="py-3 font-semibold">Example</h3>
        <p className="text-gray-400 text-justify">
          You earn your first points on October 1st, starting a new 30-day
          period ending on October 30th. By October 5th, you successfully
          upgrade to Silver, having earned 150 points. You continue doing well,
          earning another 100 points by October 21st, reaching Gold with a total
          of 250.
        </p>
        <div className="flex flex-wrap justify-center items-center py-10 gap-5">
          <Step
            title={"NEW"}
            redContent={"30-DAY"}
            footer={"PERIOD STARTS"}
            arrow={true}
          />
          <Step
            title={"REACH SILVER  AFTER EARNING"}
            redContent={"150 POINTS"}
            arrow={true}
          />
          <Step
            title={"REACH GOLD AFTER EARNING"}
            redContent={"100 POINTS"}
            footer={"(250 TOTAL)"}
            arrow={true}
          />
          <Step
            title={"END THE PERIOD WITH"}
            redContent={"475 POINTS"}
            arrow={true}
          />
          <Step
            title={"POINTS SET TO 0 AND THE"}
            redContent={"NEW 30-DAY"}
            footer={"PERIOD STARTS"}
            arrow={false}
          />
        </div>
        <p className="text-gray-400 text-justify">
          In the 9 days remaining, you manage to earn another 225 points,
          bringing your total to 475. Unfortunately, the upgrade to Platinum
          requires a total of 500 points, and you are 25 points short. The
          30-day period ends on October 30th and your points total is reset to
          0. You remain at Gold level and a new 30-day period starts on October
          31st, ending on November 29th.
        </p>
      </div>
    </>
  );
};

export default Example;
