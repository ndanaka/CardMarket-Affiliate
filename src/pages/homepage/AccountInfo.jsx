import { useState } from "react";

import Setting from "../../components/homepage/account/AccountInfo";
import ChangePsd from "../../components/homepage/account/ChangePsd";

const AccountInfo = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? <Setting setShow={setShow} /> : <ChangePsd setShow={setShow} />}
    </>
  );
};

export default AccountInfo;
