import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashLayout from "./pages/dashBoard/Layout";
import Dashboard from "./pages/dashBoard/Index";
import Register from "./pages/dashBoard/Register";
import LogIn from "./pages/dashBoard/LogIn";
import HomeLayout from "./pages/homepage/Layout";
import Homepage from "./pages/homepage/Index";
import HomePayments from "./pages/homepage/Payments";
import AffiliateLinks from "./pages/homepage/AffiliateLinks";
import LevelUpgrade from "./pages/homepage/LevelUpgrade";
import AccountInfo from "./pages/homepage/AccountInfo";
import ContactUs from "./pages/contactUs/Index";
import AdminLayout from "./pages/admin/Layout";
import AdminPayments from "./pages/admin/Payment";
import Message from "./pages/admin/Message";
import Rank from "./pages/admin/Rank";
import Introduce from "./pages/admin/Introduce";
import Manage from "./pages/admin/manage/Index";
import AddUser from "./pages/admin/manage/AddUser";
import Edit from "./pages/admin/manage/Edit";
import View from "./pages/admin/manage/View";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactUs />} />
          </Route>

          <Route path="/homepage" element={<HomeLayout />}>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/homepage/payments" element={<HomePayments />} />
            <Route
              path="/homepage/links/affiliatelinks"
              element={<AffiliateLinks />}
            />
            <Route path="/homepage/level" element={<LevelUpgrade />} />
            <Route path="/homepage/accountsetting" element={<AccountInfo />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin" element={<Introduce />} />
            <Route path="/admin/manage" element={<Manage />} />
            <Route path="/admin/manage/adduser" element={<AddUser />} />
            <Route path="/admin/manage/edit" element={<Edit />} />
            <Route path="/admin/manage/view" element={<View />} />
            <Route path="/admin/payment" element={<AdminPayments />} />
            <Route path="/admin/message" element={<Message />} />
            <Route path="/admin/rank" element={<Rank />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
