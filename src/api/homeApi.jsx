import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import {
  GET_MEMBERS,
  GET_STATISTICS,
  GET_CLIENTS,
  GET_AFF_INFO,
  GET_BANK_INFO,
  ADD_BANK_ACCOUNT,
  REQUEST_WITHDRAW,
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
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  const GetStatistics = async (affId) => {
    try {
      const formData = {
        affId: affId,
      };

      return await axios.post(GET_STATISTICS, formData, postConfig);
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
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
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  const GetAffBankInfo = async () => {
    try {
      const payload = jwtDecode(token);

      return await axios.post(
        GET_BANK_INFO,
        { aff_id: payload.id },
        postConfig
      );
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  const SubmitBankAdd = async (formData) => {
    try {
      const payload = jwtDecode(token);
      formData.aff_id = payload.id;

      return await axios.post(ADD_BANK_ACCOUNT, formData, postConfig);
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  const SubmitWithdraw = async (formData) => {
    try {
      const payload = jwtDecode(token);
      formData.aff_id = payload.id;

      return await axios.post(REQUEST_WITHDRAW, formData, postConfig);
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  return {
    op,
    GetMembers,
    GetStatistics,
    GetClients,
    GetAffInfo,
    SubmitBankAdd,
    GetAffBankInfo,
    SubmitWithdraw,
  };
};

export default HomeApi;
