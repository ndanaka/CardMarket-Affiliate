import RegisterForm from "../../auth/RegisterForm";

const Add = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="w-[500px]">
        <RegisterForm type={"affiliate"} role={"Affiliate"} />
      </div>
    </div>
  );
};

export default Add;
