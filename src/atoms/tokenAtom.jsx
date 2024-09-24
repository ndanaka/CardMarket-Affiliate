import { atom } from "jotai";

// Helper function to read from localStorage
const getInitialToken = () => {
  const token = localStorage.getItem("token");
  return token ? token : null;
};

// Create a token atom, initialized from localStorage
export const tokenAtom = atom(getInitialToken());

// Write to localStorage whenever the token changes
export const tokenWithPersistenceAtom = atom(
  (get) => get(tokenAtom), // Read token
  (get, set, newToken) => {
    set(tokenAtom, newToken); // Update token
    if (newToken) {
      localStorage.setItem("token", newToken); // Save to localStorage
    } else {
      localStorage.removeItem("token"); // Clear from localStorage if null/undefined
    }
  }
);
