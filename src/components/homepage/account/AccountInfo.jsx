import Item from "./Item";
import formatDate from "../../../utils/formatDate";

const AccountInfo = ({ affInfo }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-3 py-4 px-4 lg:px-10 mx-auto w-full lg:w-3/5">
      <Item
        icon={"far fa-clock"}
        label={"Register Date"}
        content={formatDate(affInfo?.createdAt)}
      />
      <Item
        icon={"fas fa-medal"}
        label={"Current Level/Points"}
        content={affInfo?.rank}
      />
      <Item icon={"fas fa-envelope"} label={"Email"} content={affInfo?.email} />
      <Item
        icon={"fas fa-phone"}
        label={"Phone"}
        content={affInfo?.phoneNumber}
      />
      <Item
        icon={"fas fa-globe-americas"}
        label={"Country"}
        content={affInfo?.country}
      />
      <Item
        icon={"fas fa-sign-in-alt"}
        label={"Login Id"}
        content={affInfo?.affiliateId}
      />
      <Item
        icon={"far fa-credit-card"}
        label={"Bank Account"}
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
