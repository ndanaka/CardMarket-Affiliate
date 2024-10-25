import { useTranslation } from "react-i18next";

import Item from "./Item";
import formatDate from "../../../utils/formatDate";

const AccountInfo = ({ affInfo, affRank }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-3 py-4 px-4 lg:px-10 mx-auto w-full lg:w-3/5">
      <Item
        icon={"far fa-clock"}
        label={t("register") + " " + t("date")}
        content={formatDate(affInfo?.createdAt)}
      />
      <Item
        icon={"fas fa-medal"}
        label={t("current") + " " + t("level")}
        content={t(affRank?.name)}
      />
      <Item
        icon={"fas fa-envelope"}
        label={t("email")}
        content={affInfo?.email}
      />
      <Item
        icon={"fas fa-phone"}
        label={t("phNumber")}
        content={affInfo?.phoneNumber}
      />
      <Item
        icon={"fas fa-globe-americas"}
        label={t("country")}
        content={affInfo?.country}
      />
      <Item
        icon={"fas fa-sign-in-alt"}
        label={t("login") + " Id"}
        content={affInfo?.affiliateId}
      />
      <Item
        icon={"far fa-credit-card"}
        label={t("bank") + " " + t("account")}
        content={"700546324"}
      />
      {/* <Item icon={"fa fa-key"} label={"Password"} content={"*********"} />
        {role == "admin" || (
          <div className="relative">
            <Item icon={"fas fa-cogs"} label={"Change Password"} />
            <button
              onClick={() => {
                setShow(false);
              }}
              className=" absolute right-0 top-0 w-14 h-6 text-right text-[red] font-semibold "
            >
              <i className="fas fa-pencil-alt" />
              &nbsp; Edit
            </button>
          </div>
        )} */}
    </div>
  );
};

export default AccountInfo;
