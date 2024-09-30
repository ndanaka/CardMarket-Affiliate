import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import { GET_MEMBERS } from "../constant/api";

import { useAtom } from "jotai";
import { idAtom, timeAtom, tokenWithPersistenceAtom } from "../atoms/index";

const MemberApi = () => {
  const navigate = useNavigate();

  // operation characteristics
  const [, setTime] = useAtom(timeAtom);
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const [, setId] = useAtom(idAtom);

  const [op, setOp] = useState({
    appErr: null,
    serverErr: null,
  });

  // configuration
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Post Op Configuration
  const postConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const GetMembers = async (role) => {
    try {
      const formData = {
        role: role,
      };
      return await axios.post(GET_MEMBERS, formData, postConfig);
    } catch (error) {
      console.log(error);
    }
  };

  return { GetMembers };
};

export default MemberApi;
