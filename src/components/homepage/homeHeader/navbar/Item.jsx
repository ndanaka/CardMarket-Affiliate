import { useAtom } from "jotai";

import { showNavAtom } from "../../../../atoms/index";

const NavItem = ({ label, handle }) => {
  const [showNav] = useAtom(showNavAtom);

  return (
    <>
      <button
        onClick={handle}
        className={`${
          (showNav.list === label || showNav.color === label) &&
          "bg-gray-700 text-white"
        } hover:bg-[#121828] text-gray-400 hover:text-white 
            font-sans font-semibold h-full px-5 max-[410px]:px-1 `}
      >
        {label}&nbsp;
        <i className="fa fa-chevron-down " />
      </button>
    </>
  );
};

export default NavItem;
