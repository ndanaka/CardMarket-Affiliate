import { useTranslation } from "react-i18next";

import Prize from "./Prize";
import formatPrice from "../../../utils/formatPrice";
import { SERVER_URL } from "../../../constant/baseUrl";

const AllLevel = ({ ranks }) => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className="py-3 font-semibold">{t("all") + " " + t("level")}</h3>
      <div className="flex flex-wrap max-[900px]:gap-0 gap-3 justify-center">
        {ranks?.map((rank, i) => {
          return (
            <Prize
              key={i}
              url={SERVER_URL + rank.img_url}
              active={true}
              register={rank.register_commission}
              deposite={rank.deposite_commission}
              startPrice={formatPrice(rank.start_amount)}
              limitPrice={formatPrice(rank.end_amount)}
              last={rank.last}
            />
          );
        })}
      </div>
    </>
  );
};

export default AllLevel;
