import RegisterForm from "../../auth/RegisterForm";

const AddUser = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="w-[500px]">
        <RegisterForm type={"admin"} role={"Admin"} />
      </div>
    </div>
  );
};

export default AddUser;
