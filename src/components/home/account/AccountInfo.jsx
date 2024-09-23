import React from "react";
import Item from "./Item";

const AccountInfo = ({ setShow, role }) => {
  return (
    <>
      <div className="flex flex-col items-center mt-8 gap-3">
        <Item
          icon={"far fa-clock"}
          label={"Register Date"}
          content={"2024.8.14"}
        />
        <Item
          icon={"fas fa-medal"}
          label={"Current Level/Points"}
          content={"Platinum/540"}
        />
        <Item
          icon={"fas fa-envelope"}
          label={"Email"}
          content={"partner2024@gmail.com"}
        />
        <Item
          icon={"fas fa-phone"}
          label={"Phone"}
          content={"+815364254786"}
        />
        <Item
          icon={"fas fa-globe-americas"}
          label={"Country"}
          content={"Japan"}
        />
        <Item
          icon={"fas fa-sign-in-alt"}
          label={"Login Id"}
          content={"20247aa@aa.aaaa"}
        />
        <Item
          icon={"far fa-credit-card"}
          label={"E-wallet"}
          content={"700546324"}
        />
        <Item
          icon={"fa fa-key"}
          label={"Password"}
          content={"*********"}
        />
        {role == "manager" || (
          <div className="relative">
            <Item
              icon={"fas fa-cogs"}
              label={"Change Password"}
            />
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
        )}
      </div>
    </>
  );
};
export default AccountInfo;
