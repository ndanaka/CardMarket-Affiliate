import { useState } from "react";
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
  ADD_RANK,
  GET_ALL_RANK,
  DELETE_RANK,
  GET_AFF_RANK,
  ADD_LINK,
  GET_ALL_LINK,
  DELETE_LINK,
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

  // Configuration with token
  const postConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  // Configuration with token and multipart
  const multiPartConfig = {
    headers: {
      "Content-Type": "multipart/form-data",
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

  const SubmitAddBank = async (formData) => {
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

  const SubmitAddRank = async (formData) => {
    try {
      return await axios.post(ADD_RANK, formData, multiPartConfig);
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  const GetAllRanks = async () => {
    try {
      return await axios.get(GET_ALL_RANK, postConfig);
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  const DeleteRank = async (formData) => {
    try {
      return await axios.post(DELETE_RANK, formData, postConfig);
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  const GetAffRank = async (rankId) => {
    try {
      const formData = {
        _id: rankId,
      };
      return await axios.post(GET_AFF_RANK, formData, postConfig);
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  const SubmitAddLink = async (formData) => {
    try {
      return await axios.post(ADD_LINK, formData, postConfig);
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  const SubmitDeleteLink = async (formData) => {
    try {
      return await axios.post(DELETE_LINK, formData, postConfig);
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  const GetAllLinks = async () => {
    try {
      return await axios.get(GET_ALL_LINK, postConfig);
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  return {
    op,
    setOp,
    GetMembers,
    GetStatistics,
    GetClients,
    GetAffInfo,
    SubmitAddBank,
    GetAffBankInfo,
    SubmitWithdraw,
    SubmitAddRank,
    GetAllRanks,
    DeleteRank,
    GetAffRank,
    SubmitAddLink,
    SubmitDeleteLink,
    GetAllLinks,
  };
};

export default HomeApi;
