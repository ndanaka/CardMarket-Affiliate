import RegisterForm from "../../components/auth/RegisterForm";
import RegComment from "../../components/sign/RegComment";

const Register = () => {
  return (
    <>
      <div className=" flex justify-center">
        <div className="p-4 w-[400px]">
          <RegisterForm
            title={"Partner Account Registration"}
            label={"Register"}
          />
        </div>
        <div className="border-l-[1px] border-l-gray-300 pl-5 ml-5 max-sm:hidden pr-4 mt-2">
          <RegComment
            order={1}
            title={"Up to $15 per lot"}
            content={
              "Earn up to $15 per lot traded on each client you refer to Oripa.com!"
            }
          />
          <RegComment
            order={2}
            title={"No Limit on Commissions"}
            content={
              "The Oripa Partner Program offers unlimited earning potential, with no restrictions on how much you can earn for you client referral."
            }
          />
          <RegComment
            order={3}
            title={"Real-Time Reporting"}
            content={
              "The Partner Program provides you with a state of the art Partners Area, where you can regularly monitor your funds by means of live statistics and reports."
            }
          />
          <RegComment
            order={4}
            title={"Payments on Time, Everytime"}
            content={
              "As an Oripa Partner not only are your funds safe but all your commissions are also in time and at your convenience."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Register;
