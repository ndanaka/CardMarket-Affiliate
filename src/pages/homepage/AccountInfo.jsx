import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useAtom } from "jotai";

import { tokenWithPersistenceAtom } from "../../atoms";

import Setting from "../../components/homepage/account/AccountInfo";
import ChangePsd from "../../components/homepage/account/ChangePsd";

import HomeApi from "../../api/homeApi";

const AccountInfo = () => {
  const [show, setShow] = useState(true);
  const [affInfo, setAffInfo] = useState();

  const [token, setToken] = useAtom(tokenWithPersistenceAtom);

  const { GetAffInfo } = HomeApi();

  useEffect(() => {
    getAffInfo(jwtDecode(token).id);
  });

  const getAffInfo = async (affId) => {
    try {
      const affInfo = await GetAffInfo(affId);
      setAffInfo(affInfo.data.affInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-10">
      {show ? (
        <Setting setShow={setShow} affInfo={affInfo} />
      ) : (
        <ChangePsd setShow={setShow} />
      )}
    </div>
  );
};

export default AccountInfo;
