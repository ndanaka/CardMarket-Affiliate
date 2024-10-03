const CurrentPrize = () => {
  return (
    <>
      <div className="w-[45%] max-[500px]:w-full">
        <h3 className="py-3 font-semibold text-center">My Progress</h3>
        <img src={`/image/prize/gold.png`} />
        <p className="text-gray-500 pt-3 text-[14px] text-center">
          Currently Earning:
        </p>
        <p className=" font-semibold border-b-[1px] border-b-gray-400 py-2 text-center">
          <span className="te`xt-[red] text-[red] text-3xl font-bold ">9%</span>
          &nbsp; PER DEPOSIT
        </p>
        <p className=" font-semibold border-b-[1px] border-b-gray-400 py-2 text-center">
          <span className="te`xt-[red] text-[red] text-3xl font-bold ">
            ¥10
          </span>
          &nbsp; PER REGISTER
        </p>
        <p className="text-gray-500 pt-2 text-[14px] text-center">
          Current Period:
        </p>
        <p className=" text-xl font-semibold border-b-[1px] border-b-gray-400 py-2 text-center">
          <span className="text-[red] text-xl font-semibold ">1</span>
          &nbsp; month
        </p>
        <p className="text-gray-500 pt-2 text-[14px] text-center">
          Points Expire In:
        </p>
        <p className=" text-xl font-semibold py-2 text-center">
          <span className="text-[hsl(0,100%,50%)] text-xl font-semibold ">
            1
          </span>
          &nbsp; month
        </p>
      </div>
    </>
  );
};

export default CurrentPrize;
