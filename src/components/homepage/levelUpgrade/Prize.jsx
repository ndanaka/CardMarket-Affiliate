import { useTranslation } from "react-i18next";

const Prize = ({
  url,
  register,
  deposite,
  active,
  startPrice,
  limitPrice,
  last,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`${
        !active && " grayscale-[100%] opacity-[40%]"
      } flex flex-col items-center`}
    >
      <img className={`h-[120px] max-[500px]:h-[80px]`} src={`${url}`} />
      <p className=" font-semibold border-b-[1px] border-b-gray-400 py-2 text-center text-[14px]">
        <span className="text-[red] text-3xl font-semibold ">
          {deposite} %<br />
        </span>
        &nbsp; {t("perDeposit")}
      </p>
      <p className=" font-semibold border-b-[1px] border-b-gray-400 py-2 text-center text-[14px]">
        <span className="text-[red] text-3xl font-semibold ">
          ¥{register}
          <br />
        </span>
        &nbsp; {t("perRegister")}
      </p>
      <p className="text-center font-semibold text-[14px] py-2">
        {limitPrice !== 0 && (
          <>
            ¥ {startPrice} ~ {!last && limitPrice} <br />{" "}
            {t("deposit").toUpperCase()} <br /> {t("for2Months")}
          </>
        )}
      </p>
    </div>
  );
};
export default Prize;
