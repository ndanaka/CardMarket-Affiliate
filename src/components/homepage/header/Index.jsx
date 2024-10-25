import Top from "./top/Index";
import Main from "./main/Index";
import Navbar from "./navbar/Index";

const Header = () => {
  return (
    <div className="font-sans">
      <Top />
      <Main />
      <Navbar />
    </div>
  );
};
export default Header;
