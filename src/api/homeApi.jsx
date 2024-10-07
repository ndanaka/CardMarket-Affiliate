import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import {
  GET_MEMBERS,
  GET_STATISTICS,
  GET_CLIENTS,
  GET_AFF_INFO,
} from "../constant/api";

import { useAtom } from "jotai";
import { tokenWithPersistenceAtom } from "../atoms/index";

const HomeApi = () => {
  const navigate = useNavigate();

  // operation characteristics
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);

  const [op, setOp] = useState({
    appErr: null,
    serverErr: null,
  });

  // configuration without token
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Configuration with token
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

  const submitBankRegister = async (formData) => {
    console.log(formData);
  };

  return {
    op,
    GetMembers,
    GetStatistics,
    GetClients,
    GetAffInfo,
    submitBankRegister,
  };
};

export default HomeApi;
