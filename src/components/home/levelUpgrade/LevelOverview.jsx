import React from "react";
import Prize from "./Prize";
const LevelOverview = () => {
  return (
    <>
      <div className="bg-white px-10 py-5 max-[900px]:px-3 max-[900px]:w-full w-[55%]  shadow-lg shadow-gray-400 pb-10">
        <h3 className="py-3 font-semibold">Current Level Points</h3>
        <div className="flex flex-wrap max-[900px]:gap-0 gap-3 justify-center">
          <Prize
            url={"/image/prize/bronze.png"}
            active={true}
            revenue={2}
            pointNum={0}
          />
          <Prize
            url={"/image/prize/silver.png"}
            active={true}
            revenue={3}
            pointNum={150}
          />
          <Prize
            url={"/image/prize/gold.png"}
            active={true}
            revenue={4}
            pointNum={250}
          />
          <Prize
            url={"/image/prize/platinum.png"}
            active={true}
            revenue={5}
            pointNum={500}
          />
          <Prize
            url={"/image/prize/diamond.png"}
            active={false}
            revenue={6}
            pointNum={700}
          />
        </div>
        <h3 className="py-3 font-semibold">How Does It Work?</h3>
        <p className=" text-justify text-gray-500">
          Affiliate Level Points are earned from new active depositing clients,
          as well as your clients’ trading activity. Your performance is
          measured across a 30-day period, starting the first time you earn
          points. The goal is to collect as many points as possible in that
          period. Your level will be automatically upgraded the day after you
          earn enough points. Each time you level-up, your commission increases.
          In the event you are unable to reach a new level within 30 days, your
          points will be reset for the next period.
        </p>
      </div>
    </>
  );
};
export default LevelOverview;
