const Prize = ({ url, revenue, active, startPrice, limitPrice }) => {
  return (
    <>
      <div
        className={`${
          !active && " grayscale-[100%] opacity-[40%]"
        } flex flex-col items-center`}
      >
        <img className={`h-[120px] max-[500px]:h-[80px]`} src={`${url}`} />
        <p className=" font-semibold border-b-[1px] border-b-gray-400 py-2 text-center text-[14px]">
          <span className="text-[red] text-3xl font-semibold ">
            {revenue} %<br />
          </span>
          &nbsp; PER DEPOSIT
        </p>
        <p className="text-center font-semibold text-[14px] py-2">
          {limitPrice !== 0 && (
            <>
            ¥{startPrice}~{limitPrice} <br /> DEPOSIT <br /> For 2 Months
            </>
          )}
        </p>
      </div>
    </>
  );
};
export default Prize;
