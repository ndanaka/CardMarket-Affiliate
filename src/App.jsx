import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./utils/i18n";

import DashLayout from "./pages/dashBoard/Layout";
import Dashboard from "./pages/dashBoard/Index";
import Register from "./pages/dashBoard/Register";
import LogIn from "./pages/dashBoard/LogIn";
import HomeLayout from "./pages/homepage/Layout";
import Homepage from "./pages/homepage/Index";
import Links from "./pages/homepage/Links";
import AffPayment from "./pages/homepage/Payment";
import Level from "./pages/homepage/Level";
import Profile from "./pages/homepage/Profile";
import AdminLayout from "./pages/admin/Layout";
import Admin from "./pages/admin/Admin";
import Affiliate from "./pages/admin/Affiliate";
import AddAdmin from "./components/admin/admin/Add";
import AddAffiliate from "./components/admin/affiliate/Add";
import ViewAffiliate from "./components/admin/affiliate/View";
import Edit from "./components/admin/affiliate/Edit";
import Rank from "./pages/admin/Rank";
import Payment from "./components/admin/payment/Index";
import Message from "./pages/admin/Message";
import ContactUs from "./pages/contactUs/Index";

const App = () => {
  return (
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
          <Route path="/homepage/links" element={<Links />} />
          <Route path="/homepage/payment" element={<AffPayment />} />
          <Route path="/homepage/profile" element={<Profile />} />
          <Route path="/homepage/level" element={<Level />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add" element={<AddAdmin />} />
          <Route path="/admin/affiliate" element={<Affiliate />} />
          <Route path="/admin/affiliate/add" element={<AddAffiliate />} />
          <Route path="/admin/affiliate/view" element={<ViewAffiliate />} />
          <Route path="/admin/affiliate/edit" element={<Edit />} />
          <Route path="/admin/rank" element={<Rank />} />
          <Route path="/admin/payment" element={<Payment />} />
          <Route path="/admin/message" element={<Message />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
