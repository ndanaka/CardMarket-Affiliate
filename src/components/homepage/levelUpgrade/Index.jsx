import CurrentPrize from "./CurrentPrize";
import CurrentLevel from "./CurrentLevel";
import LevelOverview from "./LevelOverview";
import Calculator from "./Calculator";
import Example from "./Example";

const LevelUpgrade = () => {
  return (
    <>
      <div className="py-10 font-sans bg-gray-100 flex flex-wrap justify-center gap-5 max-[900px]:px-20 max-[800px]:px-2">
        <div
          className="flex flex-wrap justify-center bg-white shadow-lg shadow-gray-400 px-5 py-5
         gap-5 max-[900px]:w-full lg:px-10 w-[40%] pb-10 max-[600px]:px-10"
        >
          <CurrentPrize />
          <CurrentLevel />
        </div>
        <div className="bg-white px-10 py-5 max-[900px]:px-3 max-[900px]:w-full w-[55%]  shadow-lg shadow-gray-400 pb-10">
          <LevelOverview />
          <h3 className="py-3 font-semibold">How Does It Work?</h3>
          <p className=" text-justify text-gray-500">
            Affiliate Level Points are earned from new active depositing
            clients, as well as your clients’ trading activity. Your performance
            is measured across a 30-day period, starting the first time you earn
            points. The goal is to collect as many points as possible in that
            period. Your level will be automatically upgraded the day after you
            earn enough points. Each time you level-up, your commission
            increases. In the event you are unable to reach a new level within
            30 days, your points will be reset for the next period.
          </p>
        </div>
      </div>
      <div className="pb-10 font-sans bg-gray-100 flex flex-wrap justify-center gap-5 max-[900px]:px-20 max-[800px]:px-2">
        <Calculator />
        <Example />
      </div>
    </>
  );
};

export default LevelUpgrade;
