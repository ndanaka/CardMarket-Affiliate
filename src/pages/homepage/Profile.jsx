import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useAtom } from "jotai";

import { tokenWithPersistenceAtom } from "../../atoms";

import AccountInfo from "../../components/homepage/account/AccountInfo";
import ChangePsd from "../../components/homepage/account/ChangePsd";
import Spinner from "../../utils/Spinner";

import HomeApi from "../../api/homeApi";

const Profile = () => {
  const [show, setShow] = useState(true);
  const [affInfo, setAffInfo] = useState();
  const [affRank, setAffRank] = useState();
  const [affBank, setAffBank] = useState();
  const [loading, setLoading] = useState(false);

  const [token, setToken] = useAtom(tokenWithPersistenceAtom);

  const { GetAffInfo } = HomeApi();

  useEffect(() => {
    getAffInfo();
  }, []);

  const getAffInfo = async () => {
    setLoading(true);
    const res = await GetAffInfo(jwtDecode(token).id);
    setLoading(false);
    setAffInfo(res.data.affInfo);
    setAffRank(res.data.affRank);
    setAffBank(res.data.affBank);
  };

  return (
    <div className="px-10">
      {loading && <Spinner />}
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
