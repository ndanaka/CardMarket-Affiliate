import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import formatPrice from "../../../utils/formatPrice";
import HomeApi from "../../../api/homeApi";

const LinkStatus = ({ affId, linkId, linkName }) => {
  const { t } = useTranslation();
  const [linkStatus, setLinkStatus] = useState();

  const { GetLinkStatus } = HomeApi();

  useEffect(() => {
    getLinkStatus();
  }, [linkId]);

  const getLinkStatus = async () => {
    const res = await GetLinkStatus(affId, linkId);
    setLinkStatus(res.data.linkStatus);
  };

  return (
    <div className="my-2 mt-2 relative">
      <div className="font-sans font-semibold text-gray-500 text-lg">
        {linkName}
      </div>
      <table className=" w-[100%] text-[13px] mt-1 border-gray-400 border-[1px] text-center rounded-3xl ">
        <thead className="h-10 text-[14px] text-white bg-[#4B5563]">
          <tr>
            <th>{t("clicks")}</th>
            <th>{t("registeration")}</th>
            <th>{"CVR"}</th>
            <th>{t("earn")}</th>
          </tr>
        </thead>
        <tbody className="text-[14px]">
          <tr>
            <td>{linkStatus?.clicks}</td>
            <td>{linkStatus?.registers}</td>
            <td>{linkStatus?.cvr}</td>
            <td>¥{formatPrice(linkStatus?.earn)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LinkStatus;
