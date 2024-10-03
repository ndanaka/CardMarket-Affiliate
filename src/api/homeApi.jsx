import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import {
  GET_MEMBERS,
  GET_STATISTICS,
  GET_CLIENTS,
  GET_AFF_INFO,
} from "../constant/api";

import { useAtom } from "jotai";
import { idAtom, timeAtom, tokenWithPersistenceAtom } from "../atoms/index";

const HomeApi = () => {
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

  const GetStatistics = async (affId) => {
    try {
      const formData = {
        affId: affId,
      };

      return await axios.post(GET_STATISTICS, formData, postConfig);
    } catch (error) {
      console.log(error);
    }
  };

  const GetClients = async (affId, period) => {
    try {
      const formData = {
        affId: affId,
        period: period,
      };

      return await axios.post(GET_CLIENTS, formData, postConfig);
    } catch (error) {
      console.log(error);
    }
  };

  const GetAffInfo = async (affId) => {
    try {
      const formData = {
        affId: affId,
      };
      return await axios.post(GET_AFF_INFO, formData, postConfig);
    } catch (error) {
      console.log(error);
    }
  };

  return { GetMembers, GetStatistics, GetClients, GetAffInfo };
};

export default HomeApi;
