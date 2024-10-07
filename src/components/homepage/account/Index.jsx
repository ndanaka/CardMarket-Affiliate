import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";

import { useAtom } from "jotai";
import { showNavAtom } from "../../../atoms/index";
import { tokenWithPersistenceAtom } from "../../../atoms/index";

import Button from "./Button";

const Account = ({ setShow }) => {
  const navigate = useNavigate();

  const accountBtn = useRef();

  const [, setShowNav] = useAtom(showNavAtom);
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const [payload, setPayload] = useState();

  const handleClickOutside = (event) => {
    // Check if the clicked element is outside the list
    if (accountBtn.current && !accountBtn.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    setPayload(jwtDecode(token));
    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [token]);

  return (
    <ul
      ref={accountBtn}
      className=" absolute top-8 -left-3 py-2  bg-white w-[200px] rounded-md shadow-lg shadow-gray-600"
    >
      {payload?.role === "affiliate" && (
        <>
          <Button
            src={"setting.svg"}
            label={"Account Info"}
            handle={() => {
              navigate("/homepage/accountsetting");
              setShow(false);
              setShowNav((t) => ({ ...t, color: "" }));
            }}
          />
          <Button
            src={"level.svg"}
            label={"Account Level"}
            handle={() => {
              navigate("/homepage/level");
              setShow(false);
              setShowNav((t) => ({ ...t, color: "Homepage" }));
            }}
          />
        </>
      )}
      <Button
        src={"T&C.svg"}
        label={"T&C"}
        handle={() => {
          window.open("/oripapartner.pdf");
          setShow(false);
        }}
      />
      <Button
        src={"logOut.svg"}
        label={"Log Out"}
        handle={() => {
          localStorage.removeItem("token");
          setToken("");
          setShow(false);
          navigate("/");
        }}
      />
    </ul>
  );
};

export default Account;
