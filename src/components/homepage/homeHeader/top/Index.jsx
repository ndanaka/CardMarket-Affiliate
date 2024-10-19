import { useState } from "react";
import { Link } from "react-router-dom";

import AccountInfo from "./AccountInfoModal";

const Top = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="flex flex-wrap justify-between items-center bg-gray-200 px-10 text-[14px] pl-12 p-3 border-b-[1px] border-b-gray-300">
        <div>
          <Link
            to={"/oripapartner.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-info-circle" aria-hidden="true" />
            &nbsp;T & C
          </Link>
        </div>
        <AccountInfo show={show} setShow={setShow} />
      </div>
    </>
  );
};

export default Top;
