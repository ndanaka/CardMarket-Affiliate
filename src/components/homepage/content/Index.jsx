import React, { useState } from "react";
import { useAtom } from "jotai";
import { jwtDecode } from "jwt-decode";

import ClientStats from "./ClientStats";
import TotalStats from "./TotalStats";

import { tokenWithPersistenceAtom } from "../../../atoms";

const Content = ({ aff_Id }) => {
  const [period, setPeriod] = useState("Today");
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);

  let affId;
  if (aff_Id) {
    affId = aff_Id;
  } else {
    if (token) affId = jwtDecode(token).id;
  }

  return (
    <div className="py-5">
      <div className="flex flex-wrap justify-center gap-10 max-[900px]:px-[5px] px-2">
        <TotalStats affId={affId} setPeriod={setPeriod} />
        <ClientStats affId={affId} period={period} />
      </div>
    </div>
  );
};

export default Content;
