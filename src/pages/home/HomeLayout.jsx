import { useEffect } from "react";
import HomeHeader from "../../components/home/homeHeader/Index";
import { Navigate, Outlet, useNavigate } from "react-router";
import { useAtom } from "jotai";
import { tokenAtom } from "../../store";
const HomeLayout = () => {
  const [token, setToken] = useAtom(tokenAtom);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      {!token ? <Navigate to="/" /> : <HomeHeader />}
      <Outlet />
    </>
  );
};
export default HomeLayout;
