import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import { useAtom } from "jotai";
import { tokenWithPersistenceAtom } from "../../../../atoms";

import Account from "../../account/Index";

const AccountInfoModal = ({ show, setShow }) => {
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const [payload, setPayload] = useState();

  useEffect(() => {
    setPayload(jwtDecode(token));
  }, []);

  return (
    <>
      <div className="relative max-[600px]:mt-2 text-[15px]">
        <span className="font-semibold">Welcome!&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <button
          onClick={() => setShow(!show)}
          className="border-[1px] mb-2 border-emerald-600 bg-white font-semibold rounded-md px-5 py-1 drop-shadow-md shadow-emerald-600"
        >
          {payload?.fullName}&nbsp;&nbsp;&nbsp;
          <i className="fa fa-chevron-down text-[10px]" />
        </button>
        {show && <Account setShow={setShow} />}
      </div>
    </>
  );
};

export default AccountInfoModal;
