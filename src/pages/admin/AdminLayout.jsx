import { Outlet, useNavigate } from "react-router";
import Header from "../../components/admin/header/Index";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { tokenAtom } from "../../store";

const AdminLayout = () => {
  const [token, setToken] = useAtom(tokenAtom);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });
  return (
    <>
      <div className="mx-36 max-[1000px]:mx-10 max-[700px]:mx-2">
        <Header />
        <Outlet />
      </div>
    </>
  );
};
export default AdminLayout;
