import RegisterForm from "../../auth/RegisterForm";

const AddUser = () => {
  return (
    <>
      <div className="flex justify-center ]">
        <div className="w-[500px]">
          <RegisterForm title={"ADD USER"} label={"Add"} />
        </div>
      </div>
    </>
  );
};

export default AddUser;
