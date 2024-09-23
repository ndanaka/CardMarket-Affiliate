import { useState } from "react";
import Setting from "../../components/home/account/AccountInfo";
import ChangePsd from '../../components/home/account/ChangePsd'

const AccountInfo = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? <Setting setShow={setShow} /> : <ChangePsd setShow={setShow} />}
    </>
  );
};
export default AccountInfo;
