import { VITE_BASE_URL } from "./baseUrl";

// local base url
export const BASE_URL = VITE_BASE_URL;
// export const BASE_URL = "https://aryeshsaha-to-do-list.onrender.com";

// register
export const REGISTER = `${BASE_URL}/auth/register`;

// login
export const LOGIN = `${BASE_URL}/auth/login`;

// get the backend time(GET)
export const GETTIME = `${BASE_URL}/auth/time`;

// change password
export const CHANGEPSD = `${BASE_URL}/auth/changePsd`;

// get my posts from db
export const MYPOSTS = `${BASE_URL}/auth/myPosts`;

// get members
export const GET_MEMBERS = `${BASE_URL}/members`;

// get statistics for affiliate
export const GET_STATISTICS = `${BASE_URL}/status/statistics`;

// get clients of affiliate by period
export const GET_CLIENTS = `${BASE_URL}/status/clients`;
