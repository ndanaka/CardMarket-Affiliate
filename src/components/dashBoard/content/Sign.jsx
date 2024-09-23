import SignButton from "./SignButton";
import { useNavigate } from "react-router";

const Sign = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-evenly gap-4 w-full py-4 lg:py-6 bg-[#0c2148ee]">
      <SignButton handle={() => navigate("/login")} className="bg-gray-500">
        PATNER LOGIN
      </SignButton>
      <SignButton handle={() => navigate("/register")} className="bg-green-600">
        REGISTER A PARTNER ACCOUNT
      </SignButton>
    </div>
  );
};
export default Sign;
