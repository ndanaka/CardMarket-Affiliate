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
        <LevelOverview />
      </div>
      <div className="pb-10 font-sans bg-gray-100 flex flex-wrap justify-center gap-5 max-[900px]:px-20 max-[800px]:px-2">
        <Calculator />
        <Example />
      </div>
    </>
  );
};

export default LevelUpgrade;
