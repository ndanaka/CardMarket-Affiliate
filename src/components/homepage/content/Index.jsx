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
    <div className="mx-8 my-4">
      <p className="font-sans font-semibold text-2xl pb-3">Statistics</p>
      <div className="flex flex-wrap justify-center gap-2">
        <TotalStats affId={affId} setPeriod={setPeriod} />
        <ClientStats affId={affId} period={period} />
      </div>
    </div>
  );
};

export default Content;
