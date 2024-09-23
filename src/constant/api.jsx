// local base url
// export const BASE_URL = "http://localhost:5000";
export const BASE_URL = import.meta.env.VITE_BASE_URL;

// cloud base url
// export const BASE_URL = "https://aryeshsaha-to-do-list.onrender.com";

// auth urls
export const REGISTER = `${BASE_URL}/api/user/`; // register user api endpoint
export const LOGIN = `${BASE_URL}/api/user/login`; // login user api endpoint

// user url
export const MYPOSTS = `${BASE_URL}/api/user/myPosts`; // get my posts from db

//time urls
export const GETTIME = `${BASE_URL}/api/user/time`; // get the backend time(GET)
//time urls
export const CHANGEPSD = `${BASE_URL}/api/user/changePsd`; // get the backend time(GET)
