import CircleChart from "./CircleChart";

const CurrentLevel = () => {
  return (
    <>
      <div className="w-[45%] max-[500px]:w-full">
        <h3 className="py-3 font-semibold text-center">Current Level Points</h3>
        <p className="text-[red] text-3xl font-semibold text-center">532/700</p>
        <div className=" relative">
          <CircleChart />
          <div className=" absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-[red] text-xl font-semibold">700 DEPOSIT</p>
            <p>TO REACH DIAMOND</p>
          </div>
        </div>
        <h3 className="py-3 font-semibold text-center">My CurrentLevel</h3>
        <p className="text-gray-500 text-justify">
          Move through the levels by earning Affiliate Level Points and benefit
          from increased commissions and other exclusive rewards.
        </p>
      </div>
    </>
  );
};

export default CurrentLevel;
