import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useAtom } from "jotai";

import { tokenWithPersistenceAtom } from "../../atoms";

import AccountInfo from "../../components/homepage/account/AccountInfo";
import ChangePsd from "../../components/homepage/account/ChangePsd";

import HomeApi from "../../api/homeApi";

const Profile = () => {
  const [show, setShow] = useState(true);
  const [affInfo, setAffInfo] = useState();
  const [affRank, setAffRank] = useState();
  const [affBank, setAffBank] = useState();

  const [token, setToken] = useAtom(tokenWithPersistenceAtom);

  const { GetAffInfo } = HomeApi();

  useEffect(() => {
    getAffInfo();
  }, []);

  const getAffInfo = async () => {
    const res = await GetAffInfo(jwtDecode(token).id);
    setAffInfo(res.data.affInfo);
    setAffRank(res.data.affRank);
    setAffBank(res.data.affBank);
  };

  return (
    <div className="px-10">
      <AccountInfo
        setShow={setShow}
        affInfo={affInfo}
        affRank={affRank}
        affBank={affBank}
      />
    </div>
  );
};

export default Profile;
