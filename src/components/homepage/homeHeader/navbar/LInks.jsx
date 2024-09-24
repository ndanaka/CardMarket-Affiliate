import { useNavigate } from "react-router";

import NavUList from "./UList";
import NavListItem from "./ListItem";

const NavLinks = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavUList>
        <NavListItem
          label={"Affiliate Links"}
          handle={() => navigate("/homepage/links/affiliatelinks")}
          coloredName={"Links"}
        />
      </NavUList>
    </>
  );
};

export default NavLinks;
