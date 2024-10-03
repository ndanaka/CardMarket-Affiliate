import { useState } from "react";

import Setting from "../../components/homepage/account/AccountInfo";
import ChangePsd from "../../components/homepage/account/ChangePsd";

const AccountInfo = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="px-10">
      {show ? <Setting setShow={setShow} /> : <ChangePsd setShow={setShow} />}
    </div>
  );
};

export default AccountInfo;
