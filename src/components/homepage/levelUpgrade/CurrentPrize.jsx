const CurrentPrize = () => {
  return (
    <>
      <div className="w-[45%] max-[500px]:w-full">
        <h3 className="py-3 font-semibold">My Progress</h3>
        <img className="h-[170px]" src={`/image/prize/platinum.png`} />
        <p className="text-gray-500 pt-3 text-[14px]">Currently Earning:</p>
        <p className=" font-semibold border-b-[1px] border-b-gray-400 py-2">
          <span className="te`xt-[red] text-[red] text-3xl font-bold ">5%</span>
          &nbsp; PER PAYMENT
        </p>
        <p className=" font-semibold border-b-[1px] border-b-gray-400 py-2">
          <span className="te`xt-[red] text-[red] text-3xl font-bold ">
            $10
          </span>
          &nbsp; PER REGISTER
        </p>
        <p className="text-gray-500 pt-2 text-[14px]">Current Period:</p>
        <p className=" text-xl font-semibold border-b-[1px] border-b-gray-400 py-2">
          <span className="text-[red] text-xl font-semibold ">1</span>
          &nbsp; month
        </p>
        <p className="text-gray-500 pt-2 text-[14px]">Points Expire In:</p>
        <p className=" text-xl font-semibold  py-2">
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
