import { API_BASE_URL } from "./baseUrl";

// register
export const REGISTER = `${API_BASE_URL}/auth/register`;

// login
export const LOGIN = `${API_BASE_URL}/auth/login`;

// get the backend time(GET)
export const GETTIME = `${API_BASE_URL}/auth/time`;

// change password
export const CHANGEPSD = `${API_BASE_URL}/auth/changePsd`;

// get my posts from db
export const MYPOSTS = `${API_BASE_URL}/auth/myPosts`;

// get members
export const GET_MEMBERS = `${API_BASE_URL}/members`;
export const GET_AFF_INFO = `${API_BASE_URL}/members/getAffInfo`;
export const GET_AFF_RANK = `${API_BASE_URL}/members/getAffRank`;

// get statistics for affiliate
export const GET_STATISTICS = `${API_BASE_URL}/status/statistics`;

// get clients of affiliate by period
export const GET_CLIENTS = `${API_BASE_URL}/status/clients`;

// bank account
export const GET_BANK_INFO = `${API_BASE_URL}/members/getBankInfo`;
export const ADD_BANK_ACCOUNT = `${API_BASE_URL}/members/addBankAcc`;
export const REQUEST_WITHDRAW = `${API_BASE_URL}/members/requestWithdraw`;

// rank
export const ADD_RANK = `${API_BASE_URL}/admin/addRank`;
export const GET_ALL_RANK = `${API_BASE_URL}/admin/getRanks`;
export const DELETE_RANK = `${API_BASE_URL}/admin/deleteRank`;
// link
export const ADD_LINK = `${API_BASE_URL}/link/addLink`;
export const GET_ALL_LINK = `${API_BASE_URL}/link/getLinks`;
export const DELETE_LINK = `${API_BASE_URL}/link/deleteLink`;
